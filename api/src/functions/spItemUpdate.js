const { app } = require('@azure/functions');
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
const { TokenCredentialAuthenticationProvider } = require('@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials');
const { spListMap } = require('../utils/spListMap');
require('isomorphic-fetch');

app.http('spItemUpdate', {
    methods: ['POST'],
    authLevel: 'function',
    handler: async (request, context) => {
        context.log('Processing request to update the SharePoint List item.');

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
            const body = await request.json();
            const itemId = body.ItemID; 
            const listItem = {
                fields: {
                    Title: body.Title,
                    ItemKey: body.ItemKey,
                    Payload: body.Payload
                }
            };

            const result = await graphClient
                .api(`/sites/${siteId}/lists/${listId}/items/${itemId}/fields`)
                .patch(listItem);

            return {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'List item updated successfully', data: result })
            };
        } catch (error) {
            context.log(`Error updating Sharepoint item: ${error.message}`);
            return {
                status: 500,
                body: `Internal Server Error: ${error.message}`
            };
        }
    }
});