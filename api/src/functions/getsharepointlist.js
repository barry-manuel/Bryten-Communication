const { app } = require('@azure/functions');
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
const { spListMap } = require('../utils/spListMap');
require('isomorphic-fetch');

app.http('getSharePointList', {
    methods: ['GET'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log('Processing request to fetch SharePoint List items.');

        // 1. Initialize credentials using App Registration values
        // (If deployed with a Managed Identity, you would use DefaultAzureCredential instead)
        const credential = new ClientSecretCredential(
            process.env.SHAREPOINT_TENANT_ID,
            process.env.SHAREPOINT_CLIENT_ID,
            process.env.SHAREPOINT_CLIENT_SECRET
        );

        // 2. Initialize the Graph Client with Azure Identity authentication
        const authProvider = new TokenCredentialAuthenticationProvider(credential, {
            scopes: ['https://graph.microsoft.com/.default']
        });

        const graphClient = Client.initWithMiddleware({ authProvider });

        const siteId = process.env.SHAREPOINT_SITE_ID;
        const listId = spListMap(request.query.get('list'));

        try {
            // 3. Query the list items and expand 'fields' to grab the actual column data
            const result = await graphClient
                .api(`/sites/${siteId}/lists/${listId}/items?$expand=fields`)
                .get();
            
            // 4. Map and clean the data to only return the list columns
            const cleanData = result.value.map(item => item.fields);


            return {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cleanData)
            };

        } catch (error) {
            context.log(`Error querying Graph API: ${error.message}`);
            return {
                status: 500,
                body: `Internal Server Error: ${error.message}`
            };
        }
    }
});