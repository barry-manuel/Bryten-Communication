async function getUserInfo() {
    try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

const LOGO_WHITE = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzggMTE4LjIiIGhlaWdodD0iMjgiIHN0eWxlPSJkaXNwbGF5OmJsb2NrOyI+PGc+PGc+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTU2LjgsNDIuNWM1LjYtMi43LDkuNS05LjYsOS41LTE2LjlzLTIuMy0xMi42LTYuOS0xNi40Yy00LjItMy42LTEwLjMtNS40LTE3LjYtNS40SDIuNnY5MS4zaDM5LjhjOS43LDAsMTcuOS0yLjUsMjMuNS03LjMsNS44LTQuOSw4LjktMTIuMSw4LjktMjAuN3MtMS45LTExLjctNS40LTE2LjNjLTMuMy00LjItNy43LTcuMS0xMi41LTguMlpNNjMuNiw2Ny4xYzAsNS42LTIuMSwxMC4yLTUuOSwxMy4zLTMuOCwzLTkuMyw0LjYtMTUuOSw0LjZIMTMuM3YtMzYuMmgzMS4xYzExLjUsMCwxOS4yLDcuMywxOS4yLDE4LjJaTTEzLjMsMzkuMVYxMy44aDI3LjljOC45LDAsMTMuOSw0LjYsMTMuOSwxMi43cy0xLjEsNi44LTMuMyw5Yy0yLjIsMi4zLTUuMywzLjYtOSwzLjZIMTMuM1oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOTMuNSw0Ny44di0xMi43aC0xMC41djYwLjJoMTAuNXYtMjYuMWMwLTE1LjMsOS4yLTI0LjQsMjQuNi0yNC40aC4zdi05LjRoLS4zYy0xMiwwLTIwLjUsNC4zLTI0LjYsMTIuNFoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTc5LjUsMzUuMWwtMjEsNDQuOS0yMi45LTQ0LjloLTExLjVsMjksNTUuNy0xLjQsMi44Yy00LjQsOS4zLTguOCwxMS4xLTE1LjUsMTEuMWgtLjN2MTBoLjNjNy45LDAsMTYuOS0xLjMsMjMuOS0xNi40bDMwLjgtNjMuMmgtMTEuNFoiLz48L2c+PGc+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIyOS4zLDgzLjZzLTQuNiwzLjUtMTAuNCwzLjUtOC43LTMuNS04LjctMTEuMVYyOC43bDY1LjUtNi43LDc3LjksNi43di04LjhzLTc3LjktNi43LTc3LjktNi43bC02NS41LDYuNlYzLjZoLTEwLjV2MTYuM2gtMTQuOGwtMy40LDguOGgxOC4ydjQ3YzAsMTQuMiw1LjgsMjAuOSwxOC4zLDIwLjlzMTEuNy0yLjYsMTQuOS00LjhoLjJjMC0uMS0zLjUtOC40LTMuNS04LjRsLS4zLjJaIi8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI2NS4yLDM1LjFjLTE2LjgsMC0zMCwxMy42LTMwLDMxLjFzMy4zLDE2LjksOS4zLDIyLjVjNS43LDUuNCwxMy41LDguNCwyMS45LDguNHMxNi0yLjgsMjIuNC03LjhsLjUtLjQtNC43LTgtLjcuNmMtNC42LDMuOC0xMSw2LTE3LjQsNi0xMC41LDAtMTguNi02LjktMjAuMi0xNy4zaDQ3LjJzMC0uNywwLS43YzAsMCwwLDAsMC0uMiwwLS42LjItMiwuMi0zLjQsMC04LjItMi45LTE1LjktOC4zLTIxLjctNS40LTUuOC0xMi42LTktMjAuMy05Wk0yNjQuNyw0NC43YzkuNSwwLDE3LjIsNy4xLDE4LjUsMTYuOWgtMzYuOWMxLjYtOS44LDkuMy0xNi45LDE4LjQtMTYuOVoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzMxLjIsMzYuM2MtOCwwLTE1LDMuNC0xOS40LDkuM3YtMTAuMmgtMTAuN3Y2MmgxMC43di0zMy42YzAtOS43LDcuMy0xNywxNi45LTE3czEzLjcsNC45LDEzLjcsMTUuN3YzNC45aDEwLjd2LTM2LjFjMC0xNi42LTcuNC0yNS0yMS44LTI1WiIvPjwvZz48L2c+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM3NS40LDg5LjJjMCw0LjYtMy42LDguMi04LjMsOC4ycy04LjMtMy42LTguMy04LjIsMy43LTguMSw4LjMtOC4xLDguMywzLjYsOC4zLDguMVpNMzYwLjksODkuMmMwLDMuNiwyLjcsNi41LDYuMyw2LjVzNi4yLTIuOSw2LjItNi40LTIuNi02LjUtNi4yLTYuNS02LjMsMi45LTYuMyw2LjVaTTM2NS45LDkzLjRoLTEuOXYtOC4xYy43LS4xLDEuOC0uMiwzLjEtLjJzMi4yLjIsMi44LjZjLjQuMy44LDEsLjgsMS44cy0uNywxLjYtMS43LDEuOWgwYy44LjQsMS4yLDEsMS41LDIuMS4yLDEuMi40LDEuNy42LDJoLTJjLS4yLS4zLS40LTEtLjYtMi0uMS0uOS0uNi0xLjMtMS43LTEuM2gtLjl2My4zWk0zNjUuOSw4OC44aC45YzEsMCwxLjktLjMsMS45LTEuMnMtLjUtMS4yLTEuNy0xLjItLjgsMC0xLC4xdjIuM1oiLz48L3N2Zz4=';
const LOGO_COLOR_SVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzggMTE4LjIiIGhlaWdodD0iMzIiIHN0eWxlPSJkaXNwbGF5OmJsb2NrO21hcmdpbjowIGF1dG87Ij48Zz48Zz48cGF0aCBmaWxsPSIjNEY4NkI2IiBkPSJNNTYuOCw0Mi41YzUuNi0yLjcsOS41LTkuNiw5LjUtMTYuOXMtMi4zLTEyLjYtNi45LTE2LjRjLTQuMi0zLjYtMTAuMy01LjQtMTcuNi01LjRIMi42djkxLjNoMzkuOGM5LjcsMCwxNy45LTIuNSwyMy41LTcuMyw1LjgtNC45LDguOS0xMi4xLDguOS0yMC43cy0xLjktMTEuNy01LjQtMTYuM2MtMy4zLTQuMi03LjctNy4xLTEyLjUtOC4yWk02My42LDY3LjFjMCw1LjYtMi4xLDEwLjItNS45LDEzLjMtMy44LDMtOS4zLDQuNi0xNS45LDQuNkgxMy4zdi0zNi4yaDMxLjFjMTEuNSwwLDE5LjIsNy4zLDE5LjIsMTguMlpNMTMuMywzOS4xVjEzLjhoMjcuOWM4LjksMCwxMy45LDQuNiwxMy45LDEyLjdzLTEuMSw2LjgtMy4zLDljLTIuMiwyLjMtNS4zLDMuNi05LDMuNkgxMy4zWiIvPjxwYXRoIGZpbGw9IiM0Rjg2QjYiIGQ9Ik05My41LDQ3Ljh2LTEyLjdoLTEwLjV2NjAuMmgxMC41di0yNi4xYzAtMTUuMyw5LjItMjQuNCwyNC42LTI0LjRoLjN2LTkuNGgtLjNjLTEyLDAtMjAuNSw0LjMtMjQuNiwxMi40WiIvPjxwYXRoIGZpbGw9IiM0Rjg2QjYiIGQ9Ik0xNzkuNSwzNS4xbC0yMSw0NC45LTIyLjktNDQuOWgtMTEuNWwyOSw1NS43LTEuNCwyLjhjLTQuNCw5LjMtOC44LDExLjEtMTUuNSwxMS4xaC0uM3YxMGguM2M3LjksMCwxNi45LTEuMywyMy45LTE2LjRsMzAuOC02My4yaC0xMS40WiIvPjwvZz48Zz48cGF0aCBmaWxsPSIjMUMzNDYzIiBkPSJNMjI5LjMsODMuNnMtNC42LDMuNS0xMC40LDMuNS04LjctMy41LTguNy0xMS4xVjI4LjdsNjUuNS02LjcsNzcuOSw2Ljd2LTguOHMtNzcuOS02LjctNzcuOS02LjdsLTY1LjUsNi42VjMuNmgtMTAuNXYxNi4zaC0xNC44bC0zLjQsOC44aDE4LjJ2NDdjMCwxNC4yLDUuOCwyMC45LDE4LjMsMjAuOXMxMS43LTIuNiwxNC45LTQuOGguMmMwLS4xLTMuNS04LjQtMy41LTguNGwtLjMuMloiLz48cGF0aCBmaWxsPSIjMUMzNDYzIiBkPSJNMjY1LjIsMzUuMWMtMTYuOCwwLTMwLDEzLjYtMzAsMzEuMXMzLjMsMTYuOSw5LjMsMjIuNWM1LjcsNS40LDEzLjUsOC40LDIxLjksOC40czE2LTIuOCwyMi40LTcuOGwuNS0uNC00LjctOC0uNy42Yy00LjYsMy44LTExLDYtMTcuNCw2LTEwLjUsMC0xOC42LTYuOS0yMC4yLTE3LjNoNDcuMnMwLS43LDAtLjdjMCwwLDAsMCwwLS4yLDAtLjYuMi0yLC4yLTMuNCwwLTguMi0yLjktMTUuOS04LjMtMjEuNy01LjQtNS44LTEyLjYtOS0yMC4zLTlaTTI2NC43LDQ0LjdjOS41LDAsMTcuMiw3LjEsMTguNSwxNi45aC0zNi45YzEuNi05LjgsOS4zLTE2LjksMTguNC0xNi45WiIvPjxwYXRoIGZpbGw9IiMxQzM0NjMiIGQ9Ik0zMzEuMiwzNi4zYy04LDAtMTUsMy40LTE5LjQsOS4zdi0xMC4yaC0xMC43djYyaDEwLjd2LTMzLjZjMC05LjcsNy4zLTE3LDE2LjktMTdzMTMuNyw0LjksMTMuNywxNS43djM0LjloMTAuN3YtMzYuMWMwLTE2LjYtNy40LTI1LTIxLjgtMjVaIi8 + PC9nPjwvZz48cGF0aCBmaWxsPSIjMUMzNDYzIiBkPSJNMzc1LjQsODkuMmMwLDQuNi0zLjYsOC4yLTguMyw4LjJzLTguMy0zLjYtOC4zLTguMiwzLjctOC4xLDguMy04LjEsOC4zLDMuNiw4LjMsOC4xWk0zNjAuOSw4OS4yYzAsMy42LDIuNyw2LjUsNi4zLDYuNXM2LjItMi45LDYuMi02LjQtMi42LTYuNS02LjItNi41LTYuMywyLjktNi4zLDYuNVpNMzY1LjksOTMuNGgtMS45di04LjFjLjctLjEsMS44LS4yLDMuMS0uMnMyLjIuMiwyLjguNmMuNC4zLjgsMSwuOCwxLjhzLS43LDEuNi0xLjcsMS45aDBjLjguNCwxLjIsMSwxLjUsMi4xLjIsMS4yLjQsMS43LjYsMmgtMmMtLjItLjMtLjQtMS0uNi0yLS4xLS45LS42LTEuMy0xLjctMS4zaC0uOXYzLjNaTTM2NS45LDg4LjhoLjljMSwwLDEuOS0uMywxLjktMS4ycy0uNS0xLjItMS43LTEuMi0uOCwwLTEsLjF2Mi4zWiIvPjwvc3ZnPg == ';

document.getElementById('hdrLogo').innerHTML = '<img src = "' + LOGO_WHITE + '" alt = "Bryten" style = "height:28px;width:auto;display:block;" >';

function gt() {
    try {
        return localStorage.getItem('bc_theme') || 'light';
    } catch {
        return 'light';
    }
}

function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    document.getElementById('themeThumb').innerHTML = next === 'dark' ? '<i class="ti ti-moon" ></i>' : '<i class="ti ti-sun" ></i>';
    try {
        localStorage.setItem('bc_theme', next);
    } catch { }
}

(function initTheme() {
    const th = gt();
    document.documentElement.setAttribute('data-theme', th);
    document.getElementById('themeThumb').innerHTML = th === 'dark' ? '<i class="ti ti-moon" ></i>' : '<i class="ti ti-sun" ></i>';
})();

const WORLD_CLOCKS = [{ id: 'az', tz: 'America/Phoenix', label: { en: 'Arizona', es: 'Arizona' } }, { id: 'mt', tz: 'America/Denver', label: { en: 'Colorado & NM', es: 'Colorado y NM' } }, { id: 'ct', tz: 'America/Chicago', label: { en: 'Texas & TN', es: 'Texas y TN' } }, { id: 'et', tz: 'America/New_York', label: { en: 'Florida, NY, PA, KY, NC, SC & GA', es: 'Florida, NY, PA, KY, NC, SC y GA' } }]; const CLOCK_TZ_ABBR = { az: 'AZ Time', mt: 'MST', ct: 'CST', et: 'EST' };
function buildClockStrip() {
    document.getElementById('hdrClockStrip').innerHTML = WORLD_CLOCKS.map(c => {
        const lbl = c.label[LANG] || c.label.en; const abbr = CLOCK_TZ_ABBR[c.id] || '';
        return `<div class="hdr-clock"><div class="hdr-clock-label" title="${sx(lbl)}">${sx(lbl)}</div><div class="hdr-clock-tz">${abbr}</div><div class="hdr-clock-time" id="clk-${c.id}-time">--:--</div><div class="hdr-clock-date" id="clk-${c.id}-date"></div></div>`;
    }).join('');
}

function updateClocks() {
    const now = new Date();
    const locale = LANG === 'es' ? 'es-ES' : 'en-US';
    WORLD_CLOCKS.forEach(c => {
        const timeEl = document.getElementById('clk-' + c.id + '-time');
        const dateEl = document.getElementById('clk-' + c.id + '-date');
        if (!timeEl || !dateEl) return;
        timeEl.textContent = now.toLocaleTimeString(locale, { timeZone: c.tz, hour: 'numeric', minute: '2-digit', hour12: true });
        dateEl.textContent = now.toLocaleDateString(locale, { timeZone: c.tz, weekday: 'long', month: 'numeric', day: 'numeric', year: 'numeric' });
    });
}

function gl() {
    try {
        return localStorage.getItem('bc_lang') || 'en';
    } catch {
        return 'en';
    }
}

let LANG = gl();
const STR = {
    en: {
        hdrTitle: 'Bryten Central',
        manageAdmins: 'Manage Admins',
        postUpdate: 'Post Update',
        adminBtnLabel: 'Admin',
        navHome: 'Home',
        navArchive: 'Archive',
        navKb: 'Knowledge Base',
        navAnalytics: 'Analytics',
        searchPlaceholder: 'Search updates, archive, and resources\u2026',
        pinnedLabel: 'Pinned \u2014 Priority',
        noPinned: 'No pinned items.Pin any update to feature it here.',
        allUpdatesLabel: 'All Updates',
        filterAll: 'All',
        viewList: 'List',
        viewCal: 'Calendar',
        noUpdatesMatch: 'No updates match your search.',
        statActive: 'Active Updates',
        statAlerts: 'Urgent Alerts',
        statExpiring: 'Expiring Soon',
        statPinned: 'Pinned',
        archiveTitle: 'Archive',
        archiveSub: 'Expired updates \u2014 tap any item to read in full.',
        noArchived: 'No archived items',
        matchingSearch: ' matching your search',
        expiredOn: 'Expired {d} ',
        expiresToday: 'Expires today',
        expiresInDays: 'Expires in {d}d',
        expiresOn: 'Expires {d} ',
        kbTitle: 'Knowledge Base',
        kbSub: 'Links, documents, and resources \u2014 always accessible.',
        addResource: 'Add Resource',
        noResources: 'No resources',
        openResource: 'Open Resource',
        viewLinkDefault: 'View Link',
        analyticsTitle: 'Analytics',
        analyticsSub: 'Page views, content engagement, and click-throughs.',
        exportCsv: 'Export CSV',
        resetBtn: 'Reset',
        scopeNote: '<b> Scope note:</b> these metrics reflect activity captured on <b> this device / browser</b>.',
        viewsTrend: 'Views \u2014 Last 14 Days(this device)',
        topContent: 'Top Content by Opens',
        engagementByCat: 'Engagement by Category',
        kpiPageLoads: 'Page Loads(device)',
        kpiDevices: 'Distinct Devices Seen',
        kpiOpens: 'Content Opens',
        kpiClicks: 'Link Click-Throughs',
        noOpensYet: 'No content opens recorded yet on this device.',
        noCatYet: 'No category engagement recorded yet.',
        loginTitle: 'Admin Sign-In',
        loginEyebrow: 'Bryten Communications Hub',
        usernameLbl: 'Username',
        usernamePh: 'Enter username',
        passwordLbl: 'Password',
        passwordPh: 'Enter password',
        loginErr: 'Incorrect credentials.',
        signIn: 'Sign In',
        cancel: 'Cancel',
        postTitleNew: 'Post an Update',
        postTitleEdit: 'Edit Update',
        categoryLbl: 'Category',
        titleLbl: 'Title(English)',
        titlePh: 'Clear, direct headline\u2026',
        bodyLbl: 'Body(English)',
        bodyPh: 'Details, context, or action items\u2026',
        linkUrlLbl: 'Link URL(optional)',
        linkUrlPh: 'https://\u2026',
        linkLabelLbl: 'Link Label (English, optional)',
        linkLabelPh: 'e.g. View Document\u2026',
        deptLbl: 'Department',
        eventDateLbl: 'Event Date (optional)',
        expiresLbl: 'Auto-Expires On (optional)',
        pinLbl: 'Pin as priority update',
        esSectionLbl: 'Spanish Translation (optional)',
        esSectionNote: 'Leave blank to show the English version to Spanish-language viewers.',
        titleEsLbl: 'Title (Spanish)',
        titleEsPh: 'T\xedtulo en espa\xf1ol\u2026',
        bodyEsLbl: 'Body (Spanish)',
        bodyEsPh: 'Contenido en espa\xf1ol\u2026',
        linkLabelEsLbl: 'Link Label (Spanish)',
        linkLabelEsPh: 'Etiqueta del enlace en espa\xf1ol\u2026',
        publishBtn: 'Publish Update',
        kbModalTitleNew: 'Add to Knowledge Base',
        kbModalTitleEdit: 'Edit Resource',
        kbTitleLbl: 'Title (English)',
        kbTitlePh: 'Resource name\u2026',
        kbDescLbl: 'Description (English)',
        kbDescPh: 'Brief description\u2026',
        kbLinkUrlLbl: 'Link URL',
        kbLinkLabelLbl: 'Link Label (English)',
        kbLinkLabelPh: 'e.g. Open Document\u2026',
        kbEsSectionLbl: 'Spanish Translation (optional)',
        kbEsSectionNote: 'Leave blank to show the English version to Spanish-language viewers.',
        kbEsTitleLbl: 'Title (Spanish)',
        kbTitleEsPh: 'Nombre del recurso en espa\xf1ol\u2026',
        kbEsDescLbl: 'Description (Spanish)',
        kbDescEsPh: 'Descripci\xf3n breve en espa\xf1ol\u2026',
        kbEsLinkLabelLbl: 'Link Label (Spanish)',
        kbLinkLabelEsPh: 'Etiqueta del enlace en espa\xf1ol\u2026',
        saveResourceBtn: 'Save Resource',
        manageAdminsTitle: 'Manage Admin Accounts',
        addNewAdmin: 'Add New Admin',
        fullNameLbl: 'Full Name',
        roleLbl: 'Role',
        roleEditorOpt: 'Editor \u2014 can post & manage content',
        roleSuperOpt: 'Super Admin \u2014 full access',
        addAdminBtn: 'Add Admin',
        youLbl: 'You',
        removeAdminTitle: 'Remove admin',
        noAdmins: 'No admins configured.',
        roleSuperBadge: 'Super Admin',
        roleEditorBadge: 'Editor',
        langSwitchTitle: 'Switch language',
        areYouSure: 'Are you sure?',
        delete: 'Delete',
        deletePermanently: 'Delete Permanently',
        confirmMoveToTrash: 'Move "{d}" to the Recycle Bin? A Super Admin can restore it from there.',
        confirmDeleteUpdateTitle: 'Delete update?',
        confirmDeleteResourceTitle: 'Delete resource?',
        confirmPermanentDelete: 'Permanently delete this item? This cannot be undone.',
        confirmPermanentDeleteTitle: 'Permanently delete?',
        recycleBin: 'Recycle Bin',
        deletedOn: 'Deleted {d}',
        restore: 'Restore',
        noDeletedUpdates: 'No deleted updates.',
        noDeletedResources: 'No deleted resources.',
        deletedUpdatesLbl: 'Deleted Updates',
        deletedKbLbl: 'Deleted Knowledge Base Resources'
    },
    es: {
        hdrTitle: 'Bryten Central',
        manageAdmins: 'Gestionar Administradores',
        postUpdate: 'Publicar Actualizaci\xf3n',
        adminBtnLabel: 'Admin',
        navHome: 'Inicio',
        navArchive: 'Archivo',
        navKb: 'Base de Conocimientos',
        navAnalytics: 'Anal\xedtica',
        searchPlaceholder: 'Buscar actualizaciones, archivo y recursos\u2026',
        pinnedLabel: 'Fijado \u2014 Prioridad',
        noPinned: 'No hay elementos fijados.Fija cualquier actualizaci\xf3n para destacarla aqu\xed.',
        allUpdatesLabel: 'Todas las Actualizaciones',
        filterAll: 'Todos',
        viewList: 'Lista',
        viewCal: 'Calendario',
        noUpdatesMatch: 'No hay actualizaciones que coincidan con tu b\xfasqueda.',
        statActive: 'Actualizaciones Activas',
        statAlerts: 'Alertas Urgentes',
        statExpiring: 'Vencen Pronto',
        statPinned: 'Fijados',
        archiveTitle: 'Archivo',
        archiveSub: 'Actualizaciones vencidas \u2014 toca cualquier elemento para leerlo completo.',
        noArchived: 'No hay elementos archivados',
        matchingSearch: ' que coincidan con tu b\xfasqueda',
        expiredOn: 'Vencido {d}',
        expiresToday: 'Vence hoy',
        expiresInDays: 'Vence en {d}d',
        expiresOn: 'Vence {d}',
        kbTitle: 'Base de Conocimientos',
        kbSub: 'Enlaces, documentos y recursos \u2014 siempre disponibles.',
        addResource: 'Agregar Recurso',
        noResources: 'No hay recursos',
        openResource: 'Abrir Recurso',
        viewLinkDefault: 'Ver Enlace',
        analyticsTitle: 'Anal\xedtica',
        analyticsSub: 'Vistas de p\xe1gina, interacci\xf3n con contenido y clics en enlaces.',
        exportCsv: 'Exportar CSV',
        resetBtn: 'Restablecer',
        scopeNote: '<b> Nota de alcance:</b> estas m\xe9tricas reflejan la actividad registrada en <b> este dispositivo / navegador</b>.',
        viewsTrend: 'Vistas \u2014 \xdaltimos 14 D\xedas(este dispositivo)',
        topContent: 'Contenido M\xe1s Visto',
        engagementByCat: 'Interacci\xf3n por Categor\xeda',
        kpiPageLoads: 'Cargas de P\xe1gina(dispositivo)',
        kpiDevices: 'Dispositivos Distintos Vistos',
        kpiOpens: 'Aperturas de Contenido',
        kpiClicks: 'Clics en Enlaces',
        noOpensYet: 'A\xfan no se han registrado aperturas de contenido en este dispositivo.',
        noCatYet: 'A\xfan no se ha registrado interacci\xf3n por categor\xeda.',
        loginTitle: 'Inicio de Sesi\xf3n de Administrador',
        loginEyebrow: 'Bryten Centro de Comunicaciones',
        usernameLbl: 'Usuario',
        usernamePh: 'Ingresa tu usuario',
        passwordLbl: 'Contrase\xf1a',
        passwordPh: 'Ingresa tu contrase\xf1a',
        loginErr: 'Credenciales incorrectas.',
        signIn: 'Iniciar Sesi\xf3n',
        cancel: 'Cancelar',
        postTitleNew: 'Publicar una Actualizaci\xf3n',
        postTitleEdit: 'Editar Actualizaci\xf3n',
        categoryLbl: 'Categor\xeda',
        titleLbl: 'T\xedtulo(Ingl\xe9s)',
        titlePh: 'T\xedtulo claro y directo\u2026',
        bodyLbl: 'Contenido(Ingl\xe9s)',
        bodyPh: 'Detalles, contexto o pasos a seguir\u2026',
        linkUrlLbl: 'URL del Enlace(opcional)',
        linkUrlPh: 'https://\u2026',
        linkLabelLbl: 'Etiqueta del Enlace (Ingl\xe9s, opcional)',
        linkLabelPh: 'ej. Ver Documento\u2026',
        deptLbl: 'Departamento',
        eventDateLbl: 'Fecha del Evento (opcional)',
        expiresLbl: 'Vence Autom\xe1ticamente el (opcional)',
        pinLbl: 'Fijar como actualizaci\xf3n prioritaria',
        esSectionLbl: 'Traducci\xf3n al Espa\xf1ol (opcional)',
        esSectionNote: 'D\xe9jalo en blanco para mostrar la versi\xf3n en ingl\xe9s a los usuarios en espa\xf1ol.',
        titleEsLbl: 'T\xedtulo (Espa\xf1ol)',
        titleEsPh: 'T\xedtulo en espa\xf1ol\u2026',
        bodyEsLbl: 'Contenido (Espa\xf1ol)',
        bodyEsPh: 'Contenido en espa\xf1ol\u2026',
        linkLabelEsLbl: 'Etiqueta del Enlace (Espa\xf1ol)',
        linkLabelEsPh: 'Etiqueta del enlace en espa\xf1ol\u2026',
        publishBtn: 'Publicar Actualizaci\xf3n',
        kbModalTitleNew: 'Agregar a la Base de Conocimientos',
        kbModalTitleEdit: 'Editar Recurso',
        kbTitleLbl: 'T\xedtulo (Ingl\xe9s)',
        kbTitlePh: 'Nombre del recurso\u2026',
        kbDescLbl: 'Descripci\xf3n (Ingl\xe9s)',
        kbDescPh: 'Descripci\xf3n breve\u2026',
        kbLinkUrlLbl: 'URL del Enlace',
        kbLinkLabelLbl: 'Etiqueta del Enlace (Ingl\xe9s)',
        kbLinkLabelPh: 'ej. Abrir Documento\u2026',
        kbEsSectionLbl: 'Traducci\xf3n al Espa\xf1ol (opcional)',
        kbEsSectionNote: 'D\xe9jalo en blanco para mostrar la versi\xf3n en ingl\xe9s a los usuarios en espa\xf1ol.',
        kbEsTitleLbl: 'T\xedtulo (Espa\xf1ol)',
        kbTitleEsPh: 'Nombre del recurso en espa\xf1ol\u2026',
        kbEsDescLbl: 'Descripci\xf3n (Espa\xf1ol)',
        kbDescEsPh: 'Descripci\xf3n breve en espa\xf1ol\u2026',
        kbEsLinkLabelLbl: 'Etiqueta del Enlace(Espa\xf1ol) ',
        kbLinkLabelEsPh: 'Etiqueta del enlace en espa\xf1ol\u2026',
        saveResourceBtn: 'Guardar Recurso',
        manageAdminsTitle: 'Gestionar Cuentas de Administrador',
        addNewAdmin: 'Agregar Nuevo Administrador',
        fullNameLbl: 'Nombre Completo',
        roleLbl: 'Rol',
        roleEditorOpt: 'Editor \u2014 puede publicar y gestionar contenido',
        roleSuperOpt: 'Super Administrador \u2014 acceso completo',
        addAdminBtn: 'Agregar Administrador',
        youLbl: 'T\xfa',
        removeAdminTitle: 'Eliminar administrador',
        noAdmins: 'No hay administradores configurados.',
        roleSuperBadge: 'S\xfaper Admin',
        roleEditorBadge: 'Editor',
        langSwitchTitle: 'Cambiar idioma',
        areYouSure: '\xbfEst\xe1s seguro ? ',
        delete: 'Eliminar',
        deletePermanently: 'Eliminar Permanentemente',
        confirmMoveToTrash: '\xbfMover "{d}" a la Papelera de Reciclaje ? Un S\xfaper Administrador puede restaurarlo desde ah\xed.',
        confirmDeleteUpdateTitle: '\xbfEliminar actualizaci\xf3n ? ',
        confirmDeleteResourceTitle: '\xbfEliminar recurso ? ',
        confirmPermanentDelete: '\xbfEliminar este elemento de forma permanente ? Esta acci\xf3n no se puede deshacer.',
        confirmPermanentDeleteTitle: '\xbfEliminar permanentemente ? ',
        recycleBin: 'Papelera de Reciclaje',
        deletedOn: 'Eliminado {d}',
        restore: 'Restaurar',
        noDeletedUpdates: 'No hay actualizaciones eliminadas.',
        noDeletedResources: 'No hay recursos eliminados.',
        deletedUpdatesLbl: 'Actualizaciones Eliminadas',
        deletedKbLbl: 'Recursos de Base de Conocimientos Eliminados'
    }
};

function t(key, param) {
    let s = (STR[LANG] && STR[LANG][key]) || STR.en[key] || key;
    if (param !== undefined) s = s.replace('{d}', param);
    return s;
}

const CATS = {
    events: {
        label: {
            en: 'Events',
            es: 'Eventos'
        },
        bg: 'var(--bryten-blue-pale)',
        text: 'var(--bryten-navy)',
        hex: '#1C3463'
    },
    announcement: {
        label: {
            en: 'Announcements',
            es: 'Anuncios'
        },
        bg: 'var(--surface-hover)',
        text: 'var(--text-secondary)',
        hex: '#6E7174'
    },
    policy: {
        label: {
            en: 'Policy / SOP Update',
            es: 'Actualizaci\xf3n de Pol\xedtica / SOP'
        },
        bg: 'var(--bryten-success-bg)',
        text: 'var(--bryten-success)',
        hex: '#2F8F5C'
    },
    initiative: {
        label: {
            en: 'Initiative',
            es: 'Iniciativa'
        }, bg: 'var(--bryten-blue-pale)',
        text: 'var(--bryten-blue)',
        hex: '#4F86B6'
    },
    alert: {
        label: {
            en: 'Urgent Alert',
            es: 'Alerta Urgente'
        }, bg: 'var(--bryten-danger-bg)',
        text: 'var(--bryten-danger)',
        hex: '#B83A3A'
    }, spotlight: {
        label: {
            en: 'Spotlight',
            es: 'Destacado'
        },
        bg: 'var(--bryten-warning-bg)',
        text: 'var(--bryten-warning)',
        hex: '#D6A12E'
    },
    didyouknow: {
        label: {
            en: 'Other',
            es: 'Otro'
        },
        bg: 'var(--surface-hover)',
        text: 'var(--text-muted)',
        hex: '#9DA1A6'
    }
};

const CATKEYS = Object.keys(CATS);
const KBCATS = {
    hr: {
        label: {
            en: 'HR & Benefits',
            es: 'RRHH y Beneficios'
        },
        icon: 'ti-heart-handshake'
    },
    ops: {
        label: {
            en: 'Operations',
            es: 'Operaciones'
        },
        icon: 'ti-building'
    },
    policy: {
        label: {
            en: 'Policies & SOPs',
            es: 'Pol\xedticas y SOPs'
        },
        icon: 'ti-file-text'
    },
    training: {
        label: {
            en: 'Training & Learning',
            es: 'Capacitaci\xf3n y Aprendizaje'
        },
        icon: 'ti-school'
    },
    brand: {
        label: {
            en: 'Brand & Marketing',
            es: 'Marca y Marketing'
        },
        icon: 'ti-palette'
    },
    it: {
        label: {
            en: 'IT & Systems',
            es: 'TI y Sistemas'
        },
        icon: 'ti-device-laptop'
    },
    general: {
        label: {
            en: 'General',
            es: 'General'
        },
        icon: 'ti-folder'
    }
};

const DEPTS = {
    'All Teams': {
        en: 'All Teams',
        es: 'Todos los Equipos'
    },
    'Operations': {
        en: 'Operations',
        es: 'Operaciones'
    },
    'HR & Benefits': {
        en: 'HR & Benefits',
        es: 'RRHH y Beneficios'
    },
    'Marketing': {
        en: 'Marketing',
        es: 'Marketing'
    },
    'Maintenance': {
        en: 'Maintenance',
        es: 'Mantenimiento'
    },
    'Leasing': {
        en: 'Leasing',
        es: 'Arrendamiento'
    }, 'Finance': {
        en: 'Finance',
        es: 'Finanzas'
    }, 'Leadership': {
        en: 'Leadership',
        es: 'Liderazgo'
    }
};

function getCatLabel(cat) {
    return (CATS[cat] && CATS[cat].label[LANG]) || cat;
}

function getKbCatLabel(cat) {
    return (KBCATS[cat] && KBCATS[cat].label[LANG]) || cat;
}

function getDeptLabel(dept) {
    return (DEPTS[dept] && DEPTS[dept][LANG]) || dept;
}

let curUser = null, curRole = null, adminMode = false;

function canEdit() {
    return curRole === 'editor' || curRole === 'super';
}

function canSuper() {
    return curRole === 'super';
}

let activeFilt = 'all', arcFilt = 'all', kbFilt = 'all';
let calY, calM; const td = new Date();
td.setHours(0, 0, 0, 0);
calY = td.getFullYear();
calM = td.getMonth();
let editId = null, editKbId = null, nid = 20, nkid = 10;
let curView = 'list';

function gv() {
    try {
        return localStorage.getItem('bc_view') || 'list';
    } catch {
        return 'list';
    }
}

function sv(v) {
    try {
        localStorage.setItem('bc_view', v);
    } catch { }
}

function getDeviceId() {
    try {
        let id = localStorage.getItem('bc_device_id');
        if (!id) {
            id = 'dev_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
            localStorage.setItem('bc_device_id', id);
        }
        return id;
    } catch {
        return 'dev_unknown';
    }
}

const DEVICE_ID = getDeviceId();
const SESSION_ID = 'sess_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const SESSION_START = Date.now();

function getLog() {
    try {
        const s = localStorage.getItem('bc_analytics_log');
        return s ? JSON.parse(s) : [];
    } catch { return []; }
}

function saveLog(l) {
    try {
        if (l.length > 5000) l = l.slice(l.length - 5000);
        localStorage.setItem('bc_analytics_log', JSON.stringify(l));
    } catch { }
}

function sendAnalyticsEvent(evt) {
    if (!spReady() || !SP_CONFIG.analyticsEnabled || !SP_CONFIG.analyticsListName) return;

    fetch('/api/getsharepointlist?list=' + SP_CONFIG.analyticsListName, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Title: evt.type + '_' + evt.t, EventType: evt.type || '', Device: evt.device || '', Session: evt.session || '', ItemId: String(evt.itemId || evt.tab || ''), EventData: JSON.stringify(evt)
        })
    }).catch(() => { }); // silent fail — analytics should never break the app 
}

function trackEvent(type, meta) {
    const evt = { t: Date.now(), type, device: DEVICE_ID, session: SESSION_ID, ...meta };
    const log = getLog();
    log.push(evt);
    saveLog(log);
    sendAnalyticsEvent(evt);
}

function trackPageView() {
    trackEvent('pageview', {});
}

function trackTab(tab) {
    trackEvent('tab_view', { tab });
}

function trackItemOpen(item) {
    trackEvent('item_open', {
        itemId: item.id, title: item.title, cat: item.cat
    });
}

function trackLinkClick(item) {
    trackEvent('link_click', {
        itemId: item ? item.id : null, title: item ? item.title : '', label: item ? item.linkLabel : ''
    });
}

function trackDwell() {
    const secs = Math.max(1, Math.round((Date.now() - SESSION_START) / 1000));
    trackEvent('dwell', { seconds: secs });
}

window.addEventListener('beforeunload', trackDwell);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') trackDwell();
});

function resetAnalytics() {
    if (!canSuper()) return;
    showConfirm(LANG === 'es' ? '\xbfBorrar toda la anal\xedtica almacenada localmente en este dispositivo? Esta acci\xf3n no se puede deshacer.' : 'Clear all locally stored analytics for this device? This cannot be undone.',
        () => {
            try {
                localStorage.removeItem('bc_analytics_log');
            } catch { } renderAnalytics();
        }, {
        title: LANG === 'es' ? '\xbfRestablecer anal\xedtica?' : 'Reset analytics?',
        actionLabel: LANG === 'es' ? 'Borrar Anal\xedtica' : 'Clear Analytics'
    });
}

function exportAnalytics() {
    const log = getLog();
    const rows = [['timestamp', 'type', 'device', 'session', 'itemId', 'title', 'category', 'tab', 'seconds', 'label']];
    log.forEach(e => rows.push([new Date(e.t).toISOString(), e.type, e.device, e.session, e.itemId || '', e.title || '', e.cat || '', e.tab || '', e.seconds || '', e.label || '']));
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'bryten-hub-analytics-' + new Date().toISOString().slice(0, 10) + '.csv'; a.click();
}

function renderAnalytics() {
    const log = getLog();
    const views = log.filter(e => e.type === 'pageview');
    const opens = log.filter(e => e.type === 'item_open');
    const clicks = log.filter(e => e.type === 'link_click');
    const devices = new Set(log.map(e => e.device));
    document.getElementById('anStatRow').innerHTML = `<div class="scard" style="cursor:default;"><div class="snum">${views.length}</div><div class="slbl">${t('kpiPageLoads')}</div></div><div class="scard" style="cursor:default;"><div class="snum">${devices.size}</div><div class="slbl">${t('kpiDevices')}</div></div><div class="scard" style="cursor:default;"><div class="snum">${opens.length}</div><div class="slbl">${t('kpiOpens')}</div></div><div class="scard" style="cursor:default;"><div class="snum">${clicks.length}</div><div class="slbl">${t('kpiClicks')}</div></div>`;
    const days = [];
    for (let i = 13; i >= 0; i--) {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() - i);
        days.push(d);
    }
    const counts = days.map(d => {
        const next = new Date(d);
        next.setDate(next.getDate() + 1);
        return views.filter(e => e.t >= d.getTime() && e.t < next.getTime()).length;
    });
    const max = Math.max(1, ...counts);
    document.getElementById('anChart').innerHTML = counts.map((c, i) => {
        const h = Math.round((c / max) * 100);
        const lbl = days[i].toLocaleDateString(LANG === 'es' ? 'es-ES' : 'en-US', {
            month: 'numeric',
            day: 'numeric'
        });
        return `<div class="chart-bar" style="height:${h || 2}%;" title="${lbl}: ${c}"><span class="chart-bar-lbl">${i % 2 === 0 ? lbl : ''}</span></div>`;
    }).join('');
    const byItem = {};
    opens.forEach(e => {
        const k = e.itemId + '|' + (e.title || '');
        byItem[k] = (byItem[k] || 0) + 1;
    });
    const top = Object.entries(byItem).sort((a, b) => b[1] - a[1]).slice(0, 8);
    const maxTop = Math.max(1, ...top.map(t2 => t2[1]));
    document.getElementById('anTopContent').innerHTML = top.length ? top.map(([k, n]) => {
        const title = k.split('|').slice(1).join('|') || '(untitled)';
        return `<div class="topbar-row"><div class="topbar-name" title="${sx(title)}">${sx(title)}</div><div class="topbar-fill"><div class="topbar-fill-in" style="width:${(n / maxTop * 100)}%;"></div></div><div class="topbar-num">${n}</div></div>`;
    }).join('') : `<div class="empty" style="padding:16px;"><i class="ti ti-chart-bar" style="font-size:22px;"></i>${t('noOpensYet')}</div>`;
    const byCat = {}; opens.forEach(e => { if (e.cat) byCat[e.cat] = (byCat[e.cat] || 0) + 1; });
    const catRows = CATKEYS.filter(k => byCat[k]).sort((a, b) => byCat[b] - byCat[a]);
    const maxCat = Math.max(1, ...catRows.map(k => byCat[k]));
    document.getElementById('anByCat').innerHTML = catRows.length ? catRows.map(k => `<div class="topbar-row"><div class="topbar-name">${getCatLabel(k)}</div><div class="topbar-fill"><div class="topbar-fill-in" style="width:${(byCat[k] / maxCat * 100)}%;background:${CATS[k].hex};"></div></div><div class="topbar-num">${byCat[k]}</div></div>`).join('') : `<div class="empty" style="padding:16px;"><i class="ti ti-chart-bar" style="font-size:22px;"></i>${t('noCatYet')}</div>`;
}

const SEED_ITEMS = [{
    id: 6,
    cat: 'spotlight',
    title: 'Bryten now manages over 58,000 units!',
    title_es: '\u00a1Bryten ahora administra m\u00e1s de 58,000 unidades!',
    body: 'Bryten now manages over 58,000 units across our growing portfolio spanning Class A, Class B, and build-to-rent communities across Arizona, Colorado, and Florida. This milestone reflects significant growth and positions Bryten as a top-tier regional operator.',
    body_es: 'Bryten ahora administra m\u00e1s de 58\u2009000 unidades en nuestro creciente portafolio que abarca comunidades Clase A, Clase B y BTR en Arizona, Colorado y Florida. Este hito refleja un crecimiento significativo y posiciona a Bryten como un operador regional de primer nivel.',
    dept: 'All Teams', posted: '2026-09-14', expiry: '', pinned: false, link: '', linkLabel: '', linkLabel_es: '', edate: ''
},
{
    id: 22,
    cat: 'events',
    title: "Manager's Conference",
    title_es: 'Conferencia de Directores',
    body: "Please join us in FL for the annual Manager's Conference. September 23 & 24.",
    body_es: 'Te invitamos a que te unas a nosotros en Florida para la Conferencia Anual de Directivos. 23 y 24 de Septiembre.',
    dept: 'Operations', posted: '2026-09-14', expiry: '', pinned: false, link: '', linkLabel: '', linkLabel_es: '', edate: '2026-09-23'
},
{
    id: 23,
    cat: 'events',
    title: 'Q4 Town Hall Meeting',
    title_es: 'Reuni\u00f3n p\u00fablica del cuarto trimestre',
    body: "We are getting together for our Q4 Town Hall.\nJoin Joe, Libby, John and Ann as we head toward the finish line of 2026. We'll celebrate some wins, share what's happening across Bryten and give you a look at where we're headed next.",
    body_es: "Nos reuniremos para celebrar nuestra sesi\u00f3n informativa del cuarto trimestre.\nAcompa\u00f1ad a Joe, Libby, John y Ann en este tramo final hacia 2026. Celebraremos algunos logros, compartiremos lo que est\u00e1 sucediendo en toda Bryten y os daremos una idea de hacia d\u00f3nde nos dirigimos a continuaci\u00f3n.",
    dept: 'All Teams', posted: '2026-09-14', expiry: '', pinned: true, link: 'https://teams.microsoft.com/meet/232809557818541?p=Djoaq7qJfOyjN4Emhx', linkLabel: 'Click This Link to Join', linkLabel_es: 'Un\u00edte haciendo clic en este enlace', edate: '2026-10-30'
},
{
    id: 24,
    cat: 'initiative',
    title: 'BILT',
    title_es: 'BILT',
    body: 'Join the paperless push for Bryten to achieve 100% Digital Rent.',
    body_es: 'Un\u00e9tete a la iniciativa para que Bryten pase a ser un servicio de alquiler 100\u00a0% digital.',
    dept: 'Operations', posted: '2026-09-14', expiry: '', pinned: true, link: 'https://www.livebryten.com/', linkLabel: 'Click to View the Leaderboard', linkLabel_es: 'Haz clic para ver los l\u00edderes del concurso', edate: '2026-10-15'
}];

const SEED_KB_ITEMS = [{
    id: 1,
    cat: 'hr',
    title: '2026 Benefits Guide',
    desc: 'Full summary of health, dental, vision, and 401k options for the 2026 plan year.',
    title_es: 'Gu\xeda de Beneficios 2026',
    desc_es: 'Resumen completo de las opciones de salud, dental, visi\xf3n y 401k para el a\xf1o del plan 2026.', link: '#', linkLabel: 'View Guide', linkLabel_es: 'Ver Gu\xeda'
},
{
    id: 2,
    cat: 'policy',
    title: 'Resident Communication SOP',
    desc: 'Standard operating procedure for response times, escalation steps, and required documentation.',
    title_es: 'SOP de Comunicaci\xf3n con Residentes',
    desc_es: 'Procedimiento est\xe1ndar de operaci\xf3n para los tiempos de respuesta, pasos de escalamiento y documentaci\xf3n requerida.', link: '#', linkLabel: 'Open SOP', linkLabel_es: 'Abrir SOP'
},
{
    id: 3, cat: 'brand',
    title: 'Bryten Brand Assets',
    desc: 'Updated logos, color palette, fonts, and brand usage guidelines.',
    title_es: 'Recursos de Marca de Bryten',
    desc_es: 'Logotipos, paleta de colores, tipograf\xedas y gu\xedas de uso de marca actualizados.', link: '#', linkLabel: 'View Brand Assets', linkLabel_es: 'Ver Recursos de Marca'
},
{
    id: 4,
    cat: 'training',
    title: 'De-Escalation Training Module', 
    desc: 'Required for all on- site staff.Covers conflict resolution and resident interaction best practices.',
    title_es: 'M\xf3dulo de Capacitaci\xf3n en Desescalada',
    desc_es: 'Obligatorio para todo el personal en sitio.Cubre la resoluci\xf3n de conflictos y las mejores pr\xe1cticas de interacci\xf3n con residentes.', link: '#', linkLabel: 'Start Training', linkLabel_es: 'Iniciar Capacitaci\xf3n'
},
{
    id: 5,
    cat: 'ops',
    title: 'Property Onboarding Checklist',
    desc: 'Step-by-step checklist for onboarding new communities into the Bryten portfolio.',
    title_es: 'Lista de Verificaci\xf3n de Incorporaci\xf3n de Propiedades',
    desc_es: 'Lista de verificaci\xf3n paso a paso para incorporar nuevas comunidades al portafolio de Bryten.', link: '#', linkLabel: 'View Checklist', linkLabel_es: 'Ver Lista de Verificaci\xf3n'
},
{
    id: 6,
    cat: 'it',
    title: 'Yardi Access Request Form',
    desc: 'Submit a Yardi access or role-change request through the IT help desk portal.',
    title_es: 'Formulario de Solicitud de Acceso a Yardi',
    desc_es: 'Env\xede una solicitud de acceso o cambio de rol en Yardi a trav\xe9s del portal de la mesa de ayuda de TI.', link: '#', linkLabel: 'Submit Request', linkLabel_es: 'Enviar Solicitud'
},
{
    id: 7,
    cat: 'general',
    title: 'Bryten Company Directory',
    desc: 'Full employee directory with department contacts, regional managers, and support desk numbers.',
    title_es: 'Directorio de la Empresa Bryten',
    desc_es: 'Directorio completo de empleados con contactos por departamento, gerentes regionales y n\xfameros de soporte.', link: '#', linkLabel: 'Open Directory', linkLabel_es: 'Abrir Directorio'
}];

/* ════════════════════════════════════════════════════════════ 
SHAREPOINT REST API CONFIGURATION 
──────────────────────────────────────────────────────────── 
To activate org-wide sync: 
1. Set enabled: true and siteUrl to your SharePoint site URL 
2. Create 4 SharePoint Lists with columns: 
• Title (default) • ItemKey (Number) • Payload (Multiline Plain Text) Lists: BrytenUpdates, BrytenKB, BrytenTrash, BrytenKBTrash 
3. Host this HTML file ON that SharePoint site so session cookies authenticate REST calls automatically. 
4. (Optional) Set analyticsListName to store analytics events in a SharePoint list for org-wide reporting. 
That list needs columns: EventType, Device, Session, 
ItemId (all Single-line Text) and EventData (Multiline Text). 
════════════════════════════════════════════════════════════ */

const SP_CONFIG = {
    enabled: true,
    siteUrl: 'https://aptvault.sharepoint.com/', // e.g. 'https://bryten.sharepoint.com/sites/Central' 
    listUpdates: 'BrytenUpdates',
    listKb: 'BrytenKB',
    listTrash: 'BrytenTrash',
    listKbTrash: 'BrytenKBTrash',
    listAdmins: 'BrytenCentralAdmins',
    analyticsListName: 'BrytenAnalytics', // set '' to disable SP analytics storage 
    analyticsEnabled: false, // set true once BrytenAnalytics list is created 
};

let ADMINS = {};

async function gAdmins() {
    try {
        const res = await spGetAll(SP_CONFIG.listAdmins);
        return res;
    } catch (error) {
        console.error("Network error:", error);
    }
}

async function sAdmins(a) {
    try {
        const response = await fetch('/api/spAdminCreate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(a)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Success! Created Admin:", data.Title);

            return data;
        } else {
            console.error("Failed to add Admin:", await response.text());
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

ADMINS = gAdmins();

function spReady() {
    return !!(SP_CONFIG.enabled && SP_CONFIG.siteUrl);
}

async function spGetAll(listName) {
    const res = await fetch('/api/getsharepointlist?list=' + listName)
    const data = await res.json(); 
    return data;
}

async function spCreate(listName, obj) {
    try {
        const response = await fetch('/api/spItemCreate?list=' + listName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Title: String(obj.title || obj.id), ItemKey: obj.id, Payload: JSON.stringify(obj)})
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Success! Created Item ID:", data.id);

            return data;
        } else {
            console.error("Failed to add item:", await response.text());
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

async function spUpdate(listName, spId, obj) {
    try {
        const response = await fetch('/api/spItemUpdate?list=' + listName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Title: String(obj.title || obj.id),
                ItemKey: obj.id,
                ItemID: spId,
                Payload: JSON.stringify(obj)
            })
        });

        if (response.ok) {
            const r = await response.json();
            console.log("Success! Updated Item ID:", r.data.id);

            return r.data;
        } else {
            console.error("Failed to update item:", await response.text());
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

async function spDelete(listName, spId) {
    try {
        const response = await fetch('/api/spItemDelete?list=' + listName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ItemID: spId })
        });

        if (response.ok) {
            console.log("Success! Deleted Item ID:", spId);
        } else {
            console.error("Failed to delete item:", await response.text());
        }
    } catch (error) {
        console.error("Network error:", error);
    }
}

const SP_ID_MAP = { items: {}, kb: {}, trash: {}, kbTrash: {} };

function lsGet(key, fallback) {
    try {
        const s = localStorage.getItem(key);
        return s ? JSON.parse(s) : fallback;
    } catch {
        return fallback;
    }
}

function lsSet(key, val) {
    try {
        localStorage.setItem(key, JSON.stringify(val));
    } catch { }
}

async function loadCollection(lsKey, seed, spList, mapKey) {
    const local = lsGet(lsKey, null);
    if (spReady()) {
        try {
            const rows = await spGetAll(spList);
            const parsed = rows.map(r => {
                try {
                    return JSON.parse(r.Payload);
                } catch {
                    return null;
                }
            }).filter(Boolean);
            rows.forEach((r, i) => {
                if (parsed[i]) SP_ID_MAP[mapKey][parsed[i].id] = r.id;
            });
            lsSet(lsKey, parsed);
            return parsed;
        } catch (e) {
            console.warn('SharePoint sync unavailable, using local cache instead:', e);
        }
    }
    return local !== null ? local : seed.slice();
}

async function pushCreate(spList, mapKey, obj) {
    if (!spReady()) return;
    try {
        const r = await spCreate(spList, obj); 
        if (r && r.d) SP_ID_MAP[mapKey][obj.id] = r.id;
        await initData();
    } catch (e) {
        console.warn('SharePoint create failed, change kept locally only:', e);
    }
}

async function pushUpdate(spList, mapKey, obj) {
    if (!spReady()) return;
    const spId = SP_ID_MAP[mapKey][obj.id];
    if (!spId) {
        await pushCreate(spList, mapKey, obj);
        return;
    } try {
        await spUpdate(spList, spId, obj);
    } catch (e) {
        console.warn('SharePoint update failed, change kept locally only:', e);
    }
}

async function pushDelete(spList, mapKey, objId) {
    if (!spReady()) return;
    const spId = SP_ID_MAP[mapKey][objId];
    if (!spId) return;
    try {
        await spDelete(spList, spId); 
        delete SP_ID_MAP[mapKey][objId];
        await initData();
    } catch (e) {
        console.warn('SharePoint delete failed, change kept locally only:', e);
    }
}

let items = [], kbItems = [], trashItems = [], trashKbItems = [];

function saveItemsLocal() { lsSet('bc_items', items); }

function saveKbLocal() { lsSet('bc_kb_items', kbItems); }

function saveTrashLocal() { lsSet('bc_trash_items', trashItems); }

function saveTrashKbLocal() { lsSet('bc_trash_kb_items', trashKbItems); }

async function initData() {
    items = await loadCollection('bc_items', SEED_ITEMS, SP_CONFIG.listUpdates, 'items');
    kbItems = await loadCollection('bc_kb_items', SEED_KB_ITEMS, SP_CONFIG.listKb, 'kb');
    trashItems = await loadCollection('bc_trash_items', [], SP_CONFIG.listTrash, 'trash');
    trashKbItems = await loadCollection('bc_trash_kb_items', [], SP_CONFIG.listKbTrash, 'kbTrash');
    const allIds = items.concat(trashItems).map(i => i.id);
    const allKbIds = kbItems.concat(trashKbItems).map(i => i.id);
    nid = 1 + Math.max(24, ...allIds, 0);
    nkid = 1 + Math.max(9, ...allKbIds, 0);
}

function getTitle(item) {
    return LANG === 'es' && item.title_es ? item.title_es : item.title;
}

function getBody(item) {
    return LANG === 'es' && item.body_es ? item.body_es : item.body;
}

function getLinkLabel(item) {
    return (LANG === 'es' && item.linkLabel_es) ? item.linkLabel_es : item.linkLabel;
}

function getKbTitle(item) {
    return LANG === 'es' && item.title_es ? item.title_es : item.title;
}

function getKbDesc(item) {
    return LANG === 'es' && item.desc_es ? item.desc_es : item.desc;
}

function getKbLinkLabel(item) {
    return (LANG === 'es' && item.linkLabel_es) ? item.linkLabel_es : item.linkLabel;
}

function dd(s) {
    if (!s) return null;
    const d = new Date(s + 'T00:00:00');
    d.setHours(0, 0, 0, 0);
    return Math.round((d - td) / 86400000);
}

function fmt(s) {
    if (!s) return '';
    const d = new Date(s + 'T00:00:00');
    return d.toLocaleDateString(LANG === 'es' ? 'es-ES' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function isExp(i) {
    return i.expiry ? dd(i.expiry) < 0 : false;
}

function sx(s) {
    return String(s).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function pill(cat) {
    const c = CATS[cat];
    return `<span class="cpill" style="background:${c.bg};color:${c.text};">${getCatLabel(cat)}</span>`;
}

function expText(dif) {
    return dif === 0 ? t('expiresToday') : t('expiresInDays', dif);
}

function updateCountLabel(n) {
    if (LANG === 'es') return n + ' ' + (n === 1 ? 'actualizaci\xf3n' : 'actualizaciones');
    return n + ' update' + (n !== 1 ? 's' : '');
}

function countUp(el, target) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = target; return; }
    const dur = 1200;
    const start = performance.now();
    const from = 0;
    function step(now) {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(from + (target - from) * eased);
        if (p < 1) requestAnimationFrame(step);
    } requestAnimationFrame(step);
}

function populateSelect(selId, entries) {
    const el = document.getElementById(selId);
    const cur = el.value;
    el.innerHTML = entries.map(([val, label]) => `<option value="${val.replace(/"/g, '&quot;')}">${sx(label)}</option>`).join('');
    if (entries.some(([v]) => v === cur)) el.value = cur;
}

function refreshSelects() {
    populateSelect('fCat', CATKEYS.map(k => [k, getCatLabel(k)]));
    populateSelect('kbCat', Object.keys(KBCATS).map(k => [k, getKbCatLabel(k)]));
    populateSelect('fDept', Object.keys(DEPTS).map(k => [k, getDeptLabel(k)]));
}

const BINDINGS = [
    ['hdrTitleTxt', 'text', 'hdrTitle'],
    ['txtManageAdmins', 'text', 'manageAdmins'],
    ['txtPostUpdate', 'text', 'postUpdate'],
    ['txtNavHome', 'text', 'navHome'],
    ['txtNavArchive', 'text', 'navArchive'],
    ['txtNavKb', 'text', 'navKb'],
    ['txtNavAnalytics', 'text', 'navAnalytics'],
    ['gsq', 'placeholder', 'searchPlaceholder'],
    ['pinnedLabelTxt', 'text', 'pinnedLabel'],
    ['allUpdatesTxt', 'text', 'allUpdatesLabel'],
    ['txtViewList', 'text', 'viewList'],
    ['txtViewCal', 'text', 'viewCal'],
    ['archTitleTxt', 'text', 'archiveTitle'],
    ['archSubTxt', 'text', 'archiveSub'],
    ['kbTitleTxt', 'text', 'kbTitle'],
    ['kbSubTxt', 'text', 'kbSub'],
    ['txtAddResource', 'text', 'addResource'],
    ['anTitleTxt', 'text', 'analyticsTitle'],
    ['anSubTxt', 'text', 'analyticsSub'],
    ['txtExportCsv', 'text', 'exportCsv'],
    ['txtReset', 'text', 'resetBtn'],
    ['anNoteTxt', 'html', 'scopeNote'],
    ['txtViewsTrend', 'text', 'viewsTrend'],
    ['txtTopContent', 'text', 'topContent'],
    ['txtEngagementByCat', 'text', 'engagementByCat'],
    ['loginTitleTxt', 'text', 'loginTitle'],
    ['loginEyebrowTxt', 'text', 'loginEyebrow'],
    ['luLbl', 'text', 'usernameLbl'],
    ['lu', 'placeholder', 'usernamePh'],
    ['lpLbl', 'text', 'passwordLbl'],
    ['lp', 'placeholder', 'passwordPh'],
    ['signInBtnTxt', 'text', 'signIn'],
    ['loginCancelTxt', 'text', 'cancel'],
    ['catLbl', 'text', 'categoryLbl'],
    ['titleLbl', 'text', 'titleLbl'],
    ['fTitle', 'placeholder', 'titlePh'],
    ['bodyLbl', 'text', 'bodyLbl'],
    ['fBody', 'placeholder', 'bodyPh'],
    ['linkUrlLbl', 'text', 'linkUrlLbl'],
    ['fLink', 'placeholder', 'linkUrlPh'],
    ['linkLabelLbl', 'text', 'linkLabelLbl'],
    ['fLinkLabel', 'placeholder', 'linkLabelPh'],
    ['deptLbl', 'text', 'deptLbl'],
    ['eventDateLbl', 'text', 'eventDateLbl'],
    ['expiresLbl', 'text', 'expiresLbl'],
    ['pinLbl', 'text', 'pinLbl'],
    ['esSectionLbl', 'text', 'esSectionLbl'],
    ['esSectionNote', 'text', 'esSectionNote'],
    ['titleEsLbl', 'text', 'titleEsLbl'],
    ['fTitleEs', 'placeholder', 'titleEsPh'],
    ['bodyEsLbl', 'text', 'bodyEsLbl'],
    ['fBodyEs', 'placeholder', 'bodyEsPh'],
    ['linkLabelEsLbl', 'text', 'linkLabelEsLbl'],
    ['fLinkLabelEs', 'placeholder', 'linkLabelEsPh'],
    ['postCancelTxt', 'text', 'cancel'],
    ['publishBtnTxt', 'text', 'publishBtn'],
    ['kbCatLbl', 'text', 'categoryLbl'],
    ['kbTitleLbl2', 'text', 'kbTitleLbl'],
    ['kbT', 'placeholder', 'kbTitlePh'],
    ['kbDescLbl', 'text', 'kbDescLbl'],
    ['kbD', 'placeholder', 'kbDescPh'],
    ['kbLinkUrlLbl', 'text', 'kbLinkUrlLbl'],
    ['kbLinkLabelLbl2', 'text', 'kbLinkLabelLbl'],
    ['kbLL', 'placeholder', 'kbLinkLabelPh'],
    ['kbEsSectionLbl', 'text', 'kbEsSectionLbl'],
    ['kbEsSectionNote', 'text', 'kbEsSectionNote'],
    ['kbEsTitleLbl', 'text', 'kbEsTitleLbl'],
    ['kbTEs', 'placeholder', 'kbTitleEsPh'],
    ['kbEsDescLbl', 'text', 'kbEsDescLbl'],
    ['kbDEs', 'placeholder', 'kbDescEsPh'],
    ['kbEsLinkLabelLbl', 'text', 'kbEsLinkLabelLbl'],
    ['kbLLEs', 'placeholder', 'kbLinkLabelEsPh'],
    ['kbCancelTxt', 'text', 'cancel'],
    ['saveResourceBtnTxt', 'text', 'saveResourceBtn'],
    ['admModalTitleTxt', 'text', 'manageAdminsTitle'],
    ['addNewAdminTxt', 'text', 'addNewAdmin'],
    ['fullNameLbl', 'text', 'fullNameLbl'],
    ['usernameLbl2', 'text', 'usernameLbl'],
    ['passwordLbl2', 'text', 'passwordLbl'],
    ['roleLbl', 'text', 'roleLbl'],
    ['naRoleEditorOpt', 'text', 'roleEditorOpt'],
    ['naRoleSuperOpt', 'text', 'roleSuperOpt'],
    ['addAdminBtnTxt', 'text', 'addAdminBtn'],
    ['trashModalTitleTxt', 'text', 'recycleBin'],
    ['trashUpdatesLbl', 'text', 'deletedUpdatesLbl'],
    ['trashKbLbl', 'text', 'deletedKbLbl'],
    ['confirmCancelTxt', 'text', 'cancel']
];

function applyLanguage() {
    document.documentElement.lang = LANG;
    document.title = t('hdrTitle');
    document.getElementById('themeTog').title = LANG === 'es' ? 'Cambiar modo oscuro' : 'Toggle dark mode';
    document.getElementById('langBtnEn').className = 'langbtn' + (LANG === 'en' ? ' on' : '');
    document.getElementById('langBtnEs').className = 'langbtn' + (LANG === 'es' ? ' on' : '');
    BINDINGS.forEach(([id, prop, key]) => {
        const el = document.getElementById(id);
        if (!el) return; if (prop === 'text') el.textContent = t(key);
        else if (prop === 'html') el.innerHTML = t(key);
        else if (prop === 'placeholder') el.placeholder = t(key);
    });
    refreshSelects();
    applyAdmin(); if (typeof buildClockStrip === 'function') {
        buildClockStrip();
        updateClocks();
    }
    const ap = document.querySelector('.panel.on');
    if (ap) {
        if (ap.id === 'panel-home') renderHome();
        else if (ap.id === 'panel-archive') renderArchive();
        else if (ap.id === 'panel-kb') renderKb();
        else if (ap.id === 'panel-analytics') renderAnalytics();
    }
}

function setLang(l) {
    LANG = l; try {
        localStorage.setItem('bc_lang', l);
    }
    catch { }
    applyLanguage();
    trackEvent('lang_switch', { lang: l });
}

async function doLogin() {
    const u = await getUserInfo();
    const rec = ADMINS[u.userDetails];
    if (rec) {
        adminMode = true; 
        curUser = u.userDetails;
        curRole = rec.role;
        applyAdmin();
        renderAll();
        trackEvent('admin_login', { role: curRole });
    } else {
        applyUser();
    }
}
doLogin();

function logoutAdmin() {
    adminMode = false;
    curUser = null; 
    curRole = null;
    applyAdmin();
    renderAll();
}

function applyUser() {
    const b = document.getElementById('adminBtn');
    const rec = curUser || null;
    b.innerHTML = `<i class="ti ti-lock-open"></i> ${sx(rec ? rec.name : curUser)}`;
    b.className = 'btn btn-admin-on';
}

function applyAdmin() {
    const b = document.getElementById('adminBtn');
    const rec = curUser ? ADMINS[curUser] : null;
    const roleBadge = rec ? `<span class="role-badge role-${rec.role}">${rec.role === 'super' ? t('roleSuperBadge') : t('roleEditorBadge')}</span>` : '';
    b.innerHTML = adminMode ? `<i class="ti ti-lock-open"></i> ${sx(rec ? rec.name:curUser)}${roleBadge}` : `<i class="ti ti-lock"></i> <span id="adminBtnTxt">${t('adminBtnLabel')}</span>`;
    b.className = adminMode ? 'btn btn-admin-on' : 'btn btn-ghost';
    document.getElementById('postBtn').style.display = canEdit() ? 'inline-flex' : 'none';
    document.getElementById('kbAddBtn').style.display = canEdit() ? 'inline-flex' : 'none';
    document.getElementById('tab-analytics').style.display = canEdit() ? 'flex' : 'none';
    document.getElementById('admBtn').style.display = canSuper() ? 'inline-flex' : 'none';
    document.getElementById('trashBtn').style.display = canSuper() ? 'inline-flex' : 'none';
    if (canSuper() && typeof updateTrashBadge === 'function') updateTrashBadge();
    document.getElementById('anResetBtn').style.display = canSuper() ? 'inline-flex' : 'none';
    if (!canEdit() && document.getElementById('panel-analytics').classList.contains('on')) showPanel('home');
    const recogAdd = document.getElementById('recogAdminAdd');
    if (recogAdd) recogAdd.style.display = canEdit() ? 'block' : 'none';
}

function openAdm() {
    if (!canSuper()) return;
    renderAdmList();
    document.getElementById('admOv').classList.add('open');
}

function closeAdm() {
    document.getElementById('admOv').classList.remove('open');
}

function renderAdmList() {
    const rows = Object.entries(ADMINS).map(([u, r]) => `<div class="admin-row"><div class="admin-row-main"><div class="admin-row-name">${sx(r.name)} <span class="role-badge role-${r.role}">${r.role === 'super' ? t('roleSuperBadge') : t('roleEditorBadge')}</span></div><div class="admin-row-user">@${sx(u)}</div></div>${u !== curUser ? `<button class="icon-btn ib-del" title="${t('removeAdminTitle')}" onclick="removeAdmin('${u.replace(/'/g, "\\'")}')"><i class="ti ti-trash"></i></button>` : `<span style="font-size:10px;color:var(--text-muted);padding:0 6px;">${t('youLbl')}</span>`}</div>`).join('');
    document.getElementById('admList').innerHTML = rows || `<div class="empty">${t('noAdmins')}</div>`;
}

function addAdmin() {
    const name = document.getElementById('naName').value.trim();
    const user = document.getElementById('naUser').value.trim();
    const role = document.getElementById('naRole').value;
    if (!name || !user) {
        alert(LANG === 'es' ? 'Por favor completa el nombre, usuario y contrase\xf1a.' : 'Please fill in name, username, and password.');
        return;
    }
    if (ADMINS[user]) {
        alert(LANG === 'es' ? 'Ese nombre de usuario ya existe.' : 'That username already exists.');
        return;
    }
    
    sAdmins({ Title: name, Username: user, Role: role});

    document.getElementById('naName').value = '';
    document.getElementById('naUser').value = '';
    renderAdmList();
}

function removeAdmin(u) {
    showConfirm((LANG === 'es' ? '\xbfEliminar administrador @' : 'Remove admin @') + u + (LANG === 'es' ? '? Esta acci\xf3n no se puede deshacer.' : '? This cannot be undone.'), () => {
        delete ADMINS[u];
        sAdmins(ADMINS);
        renderAdmList();
    }, {
        title: LANG === 'es' ? '\xbfEliminar administrador?' : 'Remove admin?',
        actionLabel: LANG === 'es' ? 'Eliminar' : 'Remove'
    });
}

function showPanel(n) {
    if (n === 'analytics' && !canEdit()) return;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
    document.querySelectorAll('.nav-tab').forEach(t2 => t2.classList.remove('on'));
    document.getElementById('panel-' + n).classList.add('on');
    document.getElementById('tab-' + n).classList.add('on'); if (n === 'archive') renderArchive(); if (n === 'kb') renderKb(); if (n === 'home') renderHome(); if (n === 'analytics') renderAnalytics(); trackTab(n);
}

curView = gv();

function setView(v) {
    curView = v;
    sv(v); document.getElementById('listView').style.display = v === 'list' ? 'block' : 'none';
    document.getElementById('calView').style.display = v === 'cal' ? 'block' : 'none';
    document.getElementById('vb-list').className = 'vbtn' + (v === 'list' ? ' on' : '');
    document.getElementById('vb-cal').className = 'vbtn' + (v === 'cal' ? ' on' : '');
    if (v === 'cal') renderCal();
}

function onSearch() {
    const ap = document.querySelector('.panel.on');
    if (ap.id === 'panel-home') renderFeed();
    if (ap.id === 'panel-archive') renderArchive();
    if (ap.id === 'panel-kb') renderKb();
}

function statClick(type) {
    showPanel('home'); if (type === 'all') {
        setFilt('all');
    } else if (type === 'alert') {
        setFilt('alert');
    } else if (type === 'expiring') {
        setFilt('all');
        document.getElementById('feedList').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        setTimeout(() => {
            document.querySelectorAll('.fexp,.fexp.soon').forEach(el => {
                el.style.outline = '2px solid var(--bryten-warning)';
                el.style.borderRadius = '3px'; setTimeout(() => {
                    el.style.outline = '';
                }, 1800);
            });
        }, 300);
    } else if (type === 'pinned') {
        setFilt('all');
        document.getElementById('pinnedGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function renderStats() {
    const act = items.filter(i => !isExp(i));
    const urg = act.filter(i => i.cat === 'alert');
    const sn = act.filter(i => i.expiry && dd(i.expiry) <= 5 && dd(i.expiry) >= 0);
    const pin = act.filter(i => i.pinned); // Update hidden statRow for JS compatibility 
    document.getElementById('statRow').innerHTML = ''; // Update new tile stat numbers 
    const tsActive = document.getElementById('ts-active');
    const tsAlert = document.getElementById('ts-alert');
    const tsExpiring = document.getElementById('ts-expiring');
    if (tsActive) countUp(tsActive, act.length);
    if (tsAlert) countUp(tsAlert, urg.length);
    if (tsExpiring) countUp(tsExpiring, sn.length); // Update tile visual state for alerts 
    const tile = document.getElementById('tile-updates');
    if (tile && urg.length > 0) { tile.style.borderBottom = '3px solid rgba(240,128,128,.4)'; }
}

function renderAlerts() {
    document.getElementById('alertBanners').innerHTML = items.filter(i => i.cat === 'alert' && !isExp(i)).map(x => `<div class="abanner"><div class="adot"></div><span>${sx(getTitle(x))}</span></div>`).join('');
}

function renderPinned() {
    const pin = items.filter(i => i.pinned && !isExp(i));
    const el = document.getElementById('pinnedGrid');
    if (!el) return;
    if (!pin.length) {
        el.innerHTML = `<div class="pcard-no-pins">${t('noPinned')}</div>`;
        return;
    }

    el.innerHTML = '<div class="pgrid-inner">' + pin.map((item, i) => {
        const ab = canEdit() ? `<div class="pc-acts"><button class="pc-btn" onclick="openPost(${item.id})" title="Edit"><i class="ti ti-pencil"></i></button><button class="pc-btn" onclick="unpin(${item.id})" title="Unpin"><i class="ti ti-pin-off"></i></button></div>` : '';
        return `<div class="pcard-inner" style="animation:card-in 400ms var(--ease-standard) ${i * 60}ms both;"><div class="pc-eye"><span class="pcdot"></span>${getCatLabel(item.cat)}</div><div class="pc-title">${sx(getTitle(item))}</div><div class="pc-foot"><span class="pc-meta">${sx(getDeptLabel(item.dept))} · ${fmt(item.posted)}</span>${ab}</div></div>`;
    }).join('') + '</div>';
}
function renderFChips() {
    document.getElementById('fchips').innerHTML = [{
        k: 'all',
        l: t('filterAll')
    },
    ...CATKEYS.map(k => ({ k, l: getCatLabel(k) }))].map(({ k, l }) =>
        `<button class="fchip ${k === 'alert' ? 'fchip-danger' : ''} ${activeFilt === k ? 'on' : ''}" onclick="setFilt('${k}')">${sx(l)}</button>`).join('');
}

function setFilt(k) {
    activeFilt = k; 
    renderFChips();
    renderFeed();
}
function feedCard(item) {
    const dif = item.expiry ? dd(item.expiry) : null;
    let es = ''; if (dif !== null && !isExp(item)) {
        if (dif === 0) es = `<span class="fexp soon">${t('expiresToday')}</span>`;
        else if (dif <= 3) es = `<span class="fexp soon">${t('expiresInDays', dif)}</span>`;
        else if (dif <= 7) es = `<span class="fexp">${t('expiresInDays', dif)}</span>`;
    }
    const ll = getLinkLabel(item);
    const lh = item.link ? `<a href="${item.link}" class="flink" target="_blank" rel="noopener" onclick="trackLinkClick(items.find(x=>x.id===${item.id}))"><i class="ti ti-external-link"></i>${sx(ll || t('viewLinkDefault'))}</a>` : '';
    const ab = canEdit() ? `<div class="facts"><button class="icon-btn ${item.pinned ? 'ib-pin pinned' : 'ib-pin'}" onclick="${item.pinned ? 'unpin' : 'pinItem'}(${item.id})" title="${item.pinned ? 'Unpin' : 'Pin'}"><i class="ti ti-pin"></i></button><button class="icon-btn ib-edit" onclick="openPost(${item.id})" title="Edit"><i class="ti ti-pencil"></i></button><button class="icon-btn ib-del" onclick="delItem(${item.id})" title="Delete"><i class="ti ti-trash"></i></button></div>` : '';
    return `<div class="fcard" onclick="handleCardClick(event,${item.id})" style="cursor:pointer;"><div style="padding-top:2px;">${pill(item.cat)}</div><div class="fm"><div class="ftitle">${sx(getTitle(item))}</div><div class="fbody">${sx(getBody(item))}</div>${lh}<div class="fmeta"><span class="fdate">${fmt(item.posted)}</span><span class="fdept">${sx(getDeptLabel(item.dept))}</span>${es}</div></div>${ab}</div>`;
}

function handleCardClick(e, id) {
    if (e.target.closest('.flink') || e.target.closest('.icon-btn')) return;
    const item = items.find(i => i.id === id);
    if (item) openViewModal(item);
}

function renderFeed() {
    const q = document.getElementById('gsq').value.toLowerCase().trim();
    const vis = items.filter(i => {
        if (isExp(i)) return false;
        if (activeFilt !== 'all' && i.cat !== activeFilt) return false;
        if (q && !getTitle(i).toLowerCase().includes(q) && !getBody(i).toLowerCase().includes(q)) return false;
        return true;
    });
    document.getElementById('fcount').textContent = updateCountLabel(vis.length);
    document.getElementById('feedList').innerHTML = vis.length ? vis.map(feedCard).join('') : `<div class="empty"><i class="ti ti-mood-empty"></i>${t('noUpdatesMatch')}</div>`; if (curView === 'cal') renderCal();
}

function renderCal() {
    const q = document.getElementById('gsq').value.toLowerCase().trim();
    document.getElementById('calMo').textContent = new Date(calY, calM, 1).toLocaleDateString(LANG === 'es' ? 'es-ES' : 'en-US', { month: 'long', year: 'numeric' });
    const fd = new Date(calY, calM, 1).getDay();
    const dim = new Date(calY, calM + 1, 0).getDate();
    const dip = new Date(calY, calM, 0).getDate();
    const rel = items.filter(i => {
        if (isExp(i)) return false;
        if (activeFilt !== 'all' && i.cat !== activeFilt) return false;
        if (q && !getTitle(i).toLowerCase().includes(q)) return false;
        return i.edate || i.expiry || i.posted;
    });

    function forDay(y, m, d) {
        const ds = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
        return rel.filter(i => i.edate === ds || (i.expiry === ds && !i.edate));
    }

    const DOW_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const DOW_ES = ['Dom', 'Lun', 'Mar', 'Mi\xe9', 'Jue', 'Vie', 'S\xe1b'];
    const DOW = LANG === 'es' ? DOW_ES : DOW_EN;
    let h = DOW.map(d => `<div class="caldow">${d}</div>`).join('');

    for (let i = fd - 1; i >= 0; i--) {
        h += `<div class="calday om"><div class="cdnum">${dip - i}</div></div>`;
    }
    for (let d = 1; d <= dim; d++) {
        const it = forDay(calY, calM, d);
        const isT = calY === td.getFullYear() && calM === td.getMonth() && d === td.getDate();
        const shown = it.slice(0, 2);
        const more = it.length - 2;
        const ev = shown.map(i => `<div class="cev" style="background:${CATS[i.cat].hex}18;color:${CATS[i.cat].hex};" title="${sx(getTitle(i))}">${sx(getTitle(i))}</div>`).join(''); h += `<div class="calday${isT ? 'tod' : ''}${it.length ? ' hasev' : ''}" onclick="calDayClick(${calY},${calM},${d})"><div class="cdnum">${d}</div>${ev}${more > 0 ? `<div class="cmore">+${more}</div>` : ''}</div>`;
    }
    const tot = fd + dim;
    const rem = (7 - tot % 7) % 7; for (let d = 1; d <= rem; d++)h += `<div class="calday om"><div class="cdnum">${d}</div></div>`;
    document.getElementById('calGrid').innerHTML = h;
}

function calDayClick(y, m, d) {
    const ds = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const it = items.filter(i => !isExp(i) && (i.edate === ds || (i.expiry === ds && !i.edate)));
    if (!it.length) return;
    if (it.length === 1) {
        openViewModal(it[0]);
    } else {
        document.getElementById('vdTitle').textContent = fmt(ds);
        document.getElementById('vdBody').innerHTML = it.map(i => `<div style="margin-bottom:14px;">${pill(i.cat)}<div class="ftitle" style="margin:6px 0 3px;">${sx(getTitle(i))}</div><div class="fbody">${sx(getBody(i))}</div>${i.link ? `<a href="${i.link}" class="flink" target="_blank" onclick="trackLinkClick(items.find(x=>x.id===${i.id}))"><i class="ti ti-external-link"></i>${sx(getLinkLabel(i) || t('viewLinkDefault'))}</a>` : ''}</div>`).join(' < div style = "height:1px;background:var(--border-default);margin:14px 0;" ></div > ');
        document.getElementById('viewOv').classList.add('open');
        it.forEach(trackItemOpen);
    }
}

function calPrev() {
    calM--;
    if (calM < 0) {
        calM = 11;
        calY--;
    }
    renderCal();
}

function calNext() {
    calM++;
    if (calM > 11) {
        calM = 0; calY++;
    }
    renderCal();
}

function renderArchive() {
    const q = document.getElementById('gsq').value.toLowerCase().trim();
    document.getElementById('arcChips').innerHTML = [{ k: 'all', l: t('filterAll') }, ...CATKEYS.map(k => ({ k, l: getCatLabel(k) }))].map(({ k, l }) => `<button class="fchip ${k === 'alert' ? 'fchip-danger' : ''} ${arcFilt === k ? 'on' : ''}" onclick="setArcFilt('${k} ')">${sx(l)}</button>`).join('');
    const exp = items.filter(i => {
        if (!isExp(i)) return false;
        if (arcFilt !== 'all' && i.cat !== arcFilt) return false;
        if (q && !getTitle(i).toLowerCase().includes(q) && !getBody(i).toLowerCase().includes(q)) return false;
        return true;
    }).sort((a, b) => b.expiry.localeCompare(a.expiry));
    if (!exp.length) {
        document.getElementById('arcList').innerHTML = `<div class="empty"><i class="ti ti-archive"></i>${t('noArchived')}${q ? t('matchingSearch') : ''}.</div>`;
        return;
    }
    document.getElementById('arcList').innerHTML = exp.map(item => {
        const lh = item.link ? `<a href="${item.link}" class="flink" target="_blank" rel="noopener" style="margin-top:8px;display:inline-flex;" onclick="trackLinkClick(items.find(x=>x.id===${item.id}))"><i class="ti ti-external-link"></i>${sx(getLinkLabel(item) || t('viewLinkDefault'))}</a>` : '';
        const ab = canEdit() ? `<button class="icon-btn ib-del" onclick="delItem(${item.id})" title="Delete permanently" style="flex-shrink:0;"><i class="ti ti-trash"></i></button>` : '';
        return `<div class="arc-item" id="arc-${item.id}"><div class="arc-hdr" onclick="toggleArc(${item.id})"><div style="padding-top:1px;">${pill(item.cat)}</div><div class="arc-main"><div class="arc-title">${sx(getTitle(item))}</div><div class="arc-meta"><span class="fdate">${fmt(item.posted)}</span><span class="fdept">${sx(getDeptLabel(item.dept))}</span><span class="fexp">${t('expiredOn', fmt(item.expiry))}</span></div></div>${ab}<i class="ti ti-chevron-down arc-chevron" id="ac-${item.id}"></i></div><div class="arc-body" id="ab-${item.id}"><div class="arc-body-inner">${sx(getBody(item))}${lh}</div></div></div>`;
    }).join('');
}

function toggleArc(id) {
    const b = document.getElementById('ab-' + id);
    const c = document.getElementById('ac-' + id);
    const open = b.classList.toggle('open'); c.classList.toggle('open', open);
    if (open) {
        const item = items.find(i => i.id === id);
        if (item) trackItemOpen(item);
    }
}

function setArcFilt(k) {
    arcFilt = k;
    renderArchive();
}

function renderKb() {
    const q = document.getElementById('gsq').value.toLowerCase().trim();
    document.getElementById('kbChips').innerHTML = [{ k: 'all', l: t('filterAll') }, ...Object.keys(KBCATS).map(k => ({ k, l: getKbCatLabel(k) }))].map(({ k, l }) => `<button class="fchip ${kbFilt === k ? 'on' : ''}" onclick="setKbFilt('${k}')">${sx(l)}</button>`).join('');
    const grps = {}; kbItems.filter(i => {
        if (kbFilt !== 'all' && i.cat !== kbFilt) return false;
        if (q && !getKbTitle(i).toLowerCase().includes(q) && !getKbDesc(i).toLowerCase().includes(q)) return false;
        return true;
    }).forEach(i => {
        if (!grps[i.cat]) grps[i.cat] = []; grps[i.cat].push(i);
    });
    const kc = item => {
        const k = KBCATS[item.cat];
        const ll = getKbLinkLabel(item);
        const ab = canEdit() ? `<div class="kbacts"><button class="icon-btn ib-edit" onclick="openKb(${item.id})" title="Edit"><i class="ti ti-pencil"></i></button><button class="icon-btn ib-del" onclick="delKb(${item.id})" title="Delete"><i class="ti ti-trash"></i></button></div>` : '';
        return `<div class="kbcard"><div class="kbico"><i class="ti ${k.icon}"></i></div><div class="kbm"><div class="kbtitle">${sx(getKbTitle(item))}</div><div class="kbdesc">${sx(getKbDesc(item))}</div>${item.link ? `<a href="${item.link}" class="kblink" target="_blank" rel="noopener" onclick="trackEvent('kb_click',{itemId:${item.id},title:'${sx(item.title).replace(/'/g, "\\'")}'"})"><i class="ti ti-external-link"></i>${sx(ll || t('openResource'))}</a>` : ''}</div>${ab}</div>`;
    };
    let h = ''; Object.keys(grps).forEach(cat => {
        h += `<div class="kbcat-section"><div class="kbcat-title">${getKbCatLabel(cat)}</div>${grps[cat].map(kc).join('')}</div>`;
    });
    document.getElementById('kbContent').innerHTML = h || `<div class="empty"><i class="ti ti-books"></i>${t('noResources')}${q ? t('matchingSearch') : ''}.</div>`;
}

function setKbFilt(k) {
    kbFilt = k;
    renderKb();
}

function openViewModal(item) {
    document.getElementById('vdTitle').textContent = getTitle(item);
    const dif = item.expiry ? dd(item.expiry) : null;
    let es = '';
    if (dif !== null && !isExp(item)) {
        if (dif === 0) es = `<span class="fexp soon">${t('expiresToday')}</span>`;
        else if (dif <= 3) es = `<span class="fexp soon">${t('expiresInDays', dif)}</span>`;
        else es = `<span class="fexp">${t('expiresOn', fmt(item.expiry))}</span>`;
    }
    const ll = getLinkLabel(item);
    document.getElementById('vdBody').innerHTML = `<div class="vd-meta-row">${pill(item.cat)}<span class="fdept">${sx(getDeptLabel(item.dept))}</span><span class="fdate">${fmt(item.posted)}</span>${es}</div><div class="vd-body">${sx(getBody(item))}</div>${item.link ? `<a href="${item.link}" class="flink" target="_blank" rel="noopener" onclick="trackLinkClick(items.find(x=>x.id===${item.id}))"><i class="ti ti-external-link"></i>${sx(ll || t('viewLinkDefault'))}</a>` : ''}`;
    document.getElementById('viewOv').classList.add('open'); trackItemOpen(item);
}

function pinItem(id) {
    if (!canEdit()) return;
    items = items.map(i => i.id === id ? { ...i, pinned: true } : i);
    saveItemsLocal(); const it = items.find(i => i.id === id);
    if (it) pushUpdate(SP_CONFIG.listUpdates, 'items', it);
    renderAll();
}

function unpin(id) {
    if (!canEdit()) return;
    items = items.map(i => i.id === id ? { ...i, pinned: false } : i);
    saveItemsLocal();
    const it = items.find(i => i.id === id);
    if (it) pushUpdate(SP_CONFIG.listUpdates, 'items', it);
    renderAll();
}

function delItem(id) {
    if (!canEdit()) return;
    const item = items.find(i => i.id === id); if (!item) return;
    showConfirm(t('confirmMoveToTrash', getTitle(item)), () => {
        items = items.filter(i => i.id !== id);
        const trashed = { ...item, deletedAt: Date.now(), deletedBy: curUser || 'unknown' };
        trashItems.unshift(trashed);
        saveItemsLocal();
        saveTrashLocal();
        pushDelete(SP_CONFIG.listUpdates, 'items', id);
        pushCreate(SP_CONFIG.listTrash, 'trash', trashed);
        trackEvent('item_delete', { itemId: id });
        renderAll();
        const ap = document.querySelector('.panel.on');
        if (ap && ap.id === 'panel-archive') renderArchive();
    }, { title: t('confirmDeleteUpdateTitle'), actionLabel: t('delete') });
}

function delKb(id) {
    if (!canEdit()) return;
    const item = kbItems.find(i => i.id === id);
    if (!item) return;
    showConfirm(t('confirmMoveToTrash', getKbTitle(item)), () => {
        kbItems = kbItems.filter(i => i.id !== id);
        const trashed = { ...item, deletedAt: Date.now(), deletedBy: curUser || 'unknown' };
        trashKbItems.unshift(trashed);
        saveKbLocal();
        saveTrashKbLocal();
        pushDelete(SP_CONFIG.listKb, 'kb', id);
        pushCreate(SP_CONFIG.listKbTrash, 'kbTrash', trashed); 
        renderKb();
    }, { title: t('confirmDeleteResourceTitle'), actionLabel: t('delete') });
}

function updateTrashBadge() {
    const btn = document.getElementById('trashBtn');
    if (!btn) return; const n = trashItems.length + trashKbItems.length; btn.innerHTML = `<i class="ti ti-trash"></i> <span>${t('recycleBin')}${n ? ' (' + n + ')' : ''}</span>`;
}

function openTrash() {
    if (!canSuper()) return; renderTrash();
    document.getElementById('trashOv').classList.add('open');
}

function closeTrash() {
    document.getElementById('trashOv').classList.remove('open');
}

function renderTrash() {
    const locale = LANG === 'es' ? 'es-ES' : 'en-US';
    document.getElementById('trashUpdatesList').innerHTML = trashItems.length ? trashItems.map(item => `<div class="admin-row"><div class="admin-row-main"><div class="admin-row-name">${sx(getTitle(item))}</div><div class="admin-row-user">${t('deletedOn', new Date(item.deletedAt).toLocaleString(locale))}${item.deletedBy ? ' \xb7 ' + sx(item.deletedBy) : ''}</div></div><button class="btn btn-secondary" onclick="restoreItem(${item.id})"><i class="ti ti-arrow-back-up"></i> ${t('restore')}</button><button class="icon-btn ib-del" title="${t('deletePermanently')}" onclick="purgeItem(${item.id})"><i class="ti ti-trash-x"></i></button></div>`).join('') : `<div class="empty" style="padding:20px;">${t('noDeletedUpdates')}</div>`;
    document.getElementById('trashKbList').innerHTML = trashKbItems.length ? trashKbItems.map(item => `<div class="admin-row"><div class="admin-row-main"><div class="admin-row-name">${sx(getKbTitle(item))}</div><div class="admin-row-user">${t('deletedOn', new Date(item.deletedAt).toLocaleString(locale))}${item.deletedBy ? ' \xb7 ' + sx(item.deletedBy) : ''}</div></div><button class="btn btn-secondary" onclick="restoreKb(${item.id})"><i class="ti ti-arrow-back-up"></i> ${t('restore')}</button><button class="icon-btn ib-del" title="${t('deletePermanently')}" onclick="purgeKb(${item.id})"><i class="ti ti-trash-x"></i></button></div>`).join('') : `<div class="empty" style="padding:20px;">${t('noDeletedResources')}</div>`;
    updateTrashBadge();
}

function restoreItem(id) {
    const idx = trashItems.findIndex(i => i.id === id); if (idx === -1) return;
    const [restored] = trashItems.splice(idx, 1);
    delete restored.deletedAt;
    delete restored.deletedBy;
    items.unshift(restored);
    saveItemsLocal();
    saveTrashLocal();
    pushDelete(SP_CONFIG.listTrash, 'trash', id);
    pushCreate(SP_CONFIG.listUpdates, 'items', restored);
    renderTrash();
    renderAll();
}

function restoreKb(id) {
    const idx = trashKbItems.findIndex(i => i.id === id);
    if (idx === -1) return;
    const [restored] = trashKbItems.splice(idx, 1);
    delete restored.deletedAt;
    delete restored.deletedBy;
    kbItems.push(restored);
    saveKbLocal();
    saveTrashKbLocal();
    pushDelete(SP_CONFIG.listKbTrash, 'kbTrash', id);
    pushCreate(SP_CONFIG.listKb, 'kb', restored);
    renderTrash();
    renderKb();
}

function purgeItem(id) {
    showConfirm(t('confirmPermanentDelete'), () => {
        trashItems = trashItems.filter(i => i.id !== id);
        saveTrashLocal();
        pushDelete(SP_CONFIG.listTrash, 'trash', id);
        renderTrash();
    }, {
        title: t('confirmPermanentDeleteTitle'),
        actionLabel: t('deletePermanently')
    });
}

function purgeKb(id) {
    showConfirm(t('confirmPermanentDelete'), () => {
        trashKbItems = trashKbItems.filter(i => i.id !== id);
        saveTrashKbLocal();
        pushDelete(SP_CONFIG.listKbTrash, 'kbTrash', id);
        renderTrash();
    }, {
        title: t('confirmPermanentDeleteTitle'),
        actionLabel: t('deletePermanently')
    });
}

let _confirmCallback = null;

function showConfirm(msg, cb, opts) {
    opts = opts || {};
    document.getElementById('confirmTitle').textContent = opts.title || t('areYouSure');
    document.getElementById('confirmMsg').textContent = msg;
    document.getElementById('confirmActionBtn').textContent = opts.actionLabel || t('delete');
    _confirmCallback = cb;
    document.getElementById('confirmOv').classList.add('open');
}

function closeConfirm() {
    document.getElementById('confirmOv').classList.remove('open');
    _confirmCallback = null;
}

function confirmAction() {
    const cb = _confirmCallback;
    closeConfirm();
    if (cb) cb();
}

function openPost(id) {
    if (!canEdit()) return;
    editId = id || null;
    const item = id ? items.find(i => i.id === id) : null;
    document.getElementById('postTitle').textContent = item ? t('postTitleEdit') : t('postTitleNew');
    document.getElementById('fCat').value = item ? item.cat : 'events';
    document.getElementById('fTitle').value = item ? item.title : '';
    document.getElementById('fBody').value = item ? item.body : '';
    document.getElementById('fTitleEs').value = item ? (item.title_es || '') : '';
    document.getElementById('fBodyEs').value = item ? (item.body_es || '') : '';
    document.getElementById('fLink').value = item ? item.link : '';
    document.getElementById('fLinkLabel').value = item ? item.linkLabel : '';
    document.getElementById('fLinkLabelEs').value = item ? (item.linkLabel_es || '') : '';
    document.getElementById('fDept').value = item ? item.dept : 'All Teams';
    document.getElementById('fExpiry').value = item ? item.expiry : '';
    document.getElementById('fEdate').value = item ? item.edate : '';
    document.getElementById('fPin').checked = item ? item.pinned : false;
    document.getElementById('postOv').classList.add('open');
    setTimeout(() => document.getElementById('fTitle').focus(), 80);
}

function closePost() {
    document.getElementById('postOv').classList.remove('open');
    editId = null;
}

function saveItem() {
    if (!canEdit()) return; const t2 = document.getElementById('fTitle').value.trim();
    if (!t2) {
        document.getElementById('fTitle').focus();
        return;
    }
    const d = { cat: document.getElementById('fCat').value, title: t2, body: document.getElementById('fBody').value.trim(), title_es: document.getElementById('fTitleEs').value.trim(), body_es: document.getElementById('fBodyEs').value.trim(), link: document.getElementById('fLink').value.trim(), linkLabel: document.getElementById('fLinkLabel').value.trim(), linkLabel_es: document.getElementById('fLinkLabelEs').value.trim(), dept: document.getElementById('fDept').value, expiry: document.getElementById('fExpiry').value, edate: document.getElementById('fEdate').value, pinned: document.getElementById('fPin').checked };
    let savedItem;
    if (editId) {
        items = items.map(i => i.id === editId ? { ...i, ...d } : i);
        trackEvent('item_edit', { itemId: editId });
        savedItem = items.find(i => i.id === editId);
    } else {
        const newItem = { id: nid++, posted: new Date().toISOString().split('T')[0], ...d };
        items.unshift(newItem);
        trackEvent('item_publish', { itemId: newItem.id, cat: newItem.cat });
        savedItem = newItem;
    }

    saveItemsLocal();
    if (savedItem) pushUpdate(SP_CONFIG.listUpdates, 'items', savedItem);
    closePost();
    renderAll();
}

function openKb(id) {
    if (!canEdit()) return;
    editKbId = id || null;
    const item = id ? kbItems.find(i => i.id === id) : null;
    document.getElementById('kbTitle2').textContent = item ? t('kbModalTitleEdit') : t('kbModalTitleNew');
    document.getElementById('kbCat').value = item ? item.cat : 'hr';
    document.getElementById('kbT').value = item ? item.title : '';
    document.getElementById('kbD').value = item ? item.desc : '';
    document.getElementById('kbTEs').value = item ? (item.title_es || '') : '';
    document.getElementById('kbDEs').value = item ? (item.desc_es || '') : '';
    document.getElementById('kbL').value = item ? item.link : '';
    document.getElementById('kbLL').value = item ? item.linkLabel : '';
    document.getElementById('kbLLEs').value = item ? (item.linkLabel_es || '') : '';
    document.getElementById('kbOv').classList.add('open');
    setTimeout(() => document.getElementById('kbT').focus(), 80);
}

function closeKb() {
    document.getElementById('kbOv').classList.remove('open');
    editKbId = null;
}

function saveKb() {
    if (!canEdit()) return;
    const t2 = document.getElementById('kbT').value.trim();
    if (!t2) {
        document.getElementById('kbT').focus();
        return;
    } const d = {
        cat: document.getElementById('kbCat').value,
        title: t2,
        desc: document.getElementById('kbD').value.trim(),
        title_es: document.getElementById('kbTEs').value.trim(),
        desc_es: document.getElementById('kbDEs').value.trim(),
        link: document.getElementById('kbL').value.trim(),
        linkLabel: document.getElementById('kbLL').value.trim(),
        linkLabel_es: document.getElementById('kbLLEs').value.trim()
    };
    let savedItem;
    if (editKbId) {
        kbItems = kbItems.map(i => i.id === editKbId ? { ...i, ...d } : i);
        savedItem = kbItems.find(i => i.id === editKbId);
    } else {
        savedItem = { id: nkid++, ...d };
        kbItems.push(savedItem);
    }
    saveKbLocal();
    if (savedItem) pushUpdate(SP_CONFIG.listKb, 'kb', savedItem);
    closeKb();
    renderKb();
}

function renderHome() {
    renderStats();
    renderAlerts();
    renderPinned();
    renderFChips();
    renderFeed();
    renderRecognitionWall();
}

function renderAll() {
    renderHome();
}

function initOverlayListeners() {
    ['postOv', 'kbOv', 'loginOv', 'viewOv', 'admOv', 'trashOv', 'confirmOv', 'recogOv'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', function (e) {
            if (e.target === this) {
                if (id === 'loginOv') closeLogin();
                else if (id === 'postOv') closePost();
                else if (id === 'kbOv') closeKb();
                else if (id === 'admOv') closeAdm();
                else if (id === 'confirmOv') closeConfirm();
                else if (id === 'recogOv') closeRecogModal();
                else this.classList.remove('open');
            }
        });
    });
    const tcal = document.getElementById('trainingCalOverlay');
    if (tcal) tcal.addEventListener('click', function (e) {
        if (e.target === this) closeTrainingCal();
    });
}

/* ══════════════════════════ RECOGNITION WALL ══════════════════════════ */
function lsGetRecog() {
    try {
        const s = localStorage.getItem('bc_recognitions');
        if (s) {
            const p = JSON.parse(s);
            if (p && p.length) return p;
        }
    } catch { }
    // Seed recognition if none stored yet 
    const seed = [{ id: 1789411831887, name: 'Gina DaSilva', dept: 'Sr. Asset Director', body: "Gina (FL) received this glowing 5 star review on the Google Business Profile from a Client!\n⭐⭐⭐⭐⭐ \nBryten has been great. We have been with them since inception and our regional manager, Gina DaSilva, has been fantastic. We have also had strong community managers and have reached stabilization in a very competitive market. We even have direct access to the company president on an as needed basis. We are very pleased to be with Bryten.", body_es: "\u00a1Gina (Florida) ha recibido esta magn\u00edfica rese\u00f1a de 5 estrellas en el perfil de Google My Business por parte de un cliente!\n⭐⭐⭐⭐⭐ \nBryten ha sido estupenda. Llevamos con ellos desde sus inicios y nuestra responsable regional, Gina DaSilva, ha sido fant\u00e1stica. Tambi\u00e9n hemos contado con excelentes gestores de comunidad y hemos logrado estabilizarnos en un mercado muy competitivo. Incluso tenemos acceso directo al presidente de la empresa siempre que lo necesitamos. Estamos muy contentos de trabajar con Bryten.", by: 'Bryten Team', date: 'Sep 14, 2026' }];
    try {
        localStorage.setItem('bc_recognitions', JSON.stringify(seed));
    } catch { }
    return seed;
}

function lsSetRecog(r) {
    try {
        localStorage.setItem('bc_recognitions', JSON.stringify(r));
    } catch { }
}

let _editRecogId = null;

function getRecogBody(r) {
    return LANG === 'es' && r.body_es ? r.body_es : r.body;
}

function renderRecognitionWall() {
    const wall = document.getElementById('recognitionWall');
    const adminAdd = document.getElementById('recogAdminAdd');
    if (!wall) return;
    if (adminAdd) adminAdd.style.display = canEdit() ? 'block' : 'none';
    const recogs = lsGetRecog();
    if (!recogs.length) {
        const emptyMsg = LANG === 'es' ? 'Los reconocimientos aparecerán aquí.' : 'Recognitions will appear here.';
        const emptyHint = LANG === 'es' ? 'Los administradores pueden celebrar al equipo aquí.' : 'Admins can celebrate the team here.';
        wall.innerHTML = `<div class="recog-empty"><i class="ti ti-confetti"></i>${emptyMsg}<br><span style="font-size:11px;">${emptyHint}</span></div>`;
        return;
    }
    wall.innerHTML = recogs.map(r => {
        const initials = r.name ? r.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : '?';
        const bodyText = getRecogBody(r);
        const adminBtns = canEdit() ? ` <div style="display:flex;gap:4px;margin-top:6px;"> <button onclick="editRecog(${r.id})" style="font-size:10px;padding:3px 8px;border-radius:4px;border:1px solid var(--bryten-navy);background:transparent;color:var(--bryten-navy);cursor:pointer;font-weight:600;display:flex;align-items:center;gap:3px;"><i class="ti ti-pencil"></i> Edit</button> <button onclick="deleteRecog(${r.id})" style="font-size:10px;padding:3px 8px;border-radius:4px;border:1px solid var(--bryten-danger);background:transparent;color:var(--bryten-danger);cursor:pointer;font-weight:600;display:flex;align-items:center;gap:3px;"><i class="ti ti-trash"></i> Delete</button> </div>` : '';
        const esTag = r.body_es && LANG === 'es' ? `<span style="font-size:9px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--bryten-blue);background:var(--bryten-blue-pale);padding:1px 5px;border-radius:6px;margin-left:5px;vertical-align:middle;">ES</span>` : '';
        return `<div class="recog-card" id="recog-${r.id}"> <div class="recog-card-header"> <div class="recog-avatar">${initials}</div> <div><div class="recog-name">${sx(r.name)}${esTag}</div><div class="recog-dept">${sx(r.dept || '')}</div></div> </div> <div class="recog-body">${sx(bodyText)}</div> <div class="recog-meta"><i class="ti ti-heart-filled" style="color:var(--bryten-gold);font-size:11px;"></i>${sx(r.by || 'Bryten Team')} &middot; ${sx(r.date || '')}</div> ${adminBtns} </div>`;
    }).join('');
}

function openRecogModal(editId) {
    if (!canEdit()) return; _editRecogId = editId || null;
    const titleEl = document.getElementById('recogModalTitle');
    const saveEl = document.getElementById('recogSaveBtn');
    if (_editRecogId) {
        const r = lsGetRecog().find(x => x.id === _editRecogId);
        if (!r) return; document.getElementById('recogName').value = r.name || '';
        document.getElementById('recogDept').value = r.dept || '';
        document.getElementById('recogBody').value = r.body || '';
        document.getElementById('recogBodyEs').value = r.body_es || '';
        document.getElementById('recogBy').value = r.by || '';
        if (titleEl) titleEl.textContent = 'Edit Recognition';
        if (saveEl) saveEl.textContent = 'Save Changes';
    } else {
        document.getElementById('recogName').value = '';
        document.getElementById('recogDept').value = '';
        document.getElementById('recogBody').value = '';
        document.getElementById('recogBodyEs').value = '';
        document.getElementById('recogBy').value = '';
        if (titleEl) titleEl.textContent = 'Add Recognition';
        if (saveEl) saveEl.textContent = 'Post Recognition';
    }
    document.getElementById('recogOv').classList.add('open');
    setTimeout(() => document.getElementById('recogName').focus(), 80);
}

function closeRecogModal() {
    document.getElementById('recogOv').classList.remove('open'); _editRecogId = null;
}

function saveRecognition() {
    if (!canEdit()) return;
    const name = document.getElementById('recogName').value.trim();
    const dept = document.getElementById('recogDept').value.trim();
    const body = document.getElementById('recogBody').value.trim();
    const body_es = document.getElementById('recogBodyEs').value.trim();
    const by = document.getElementById('recogBy').value.trim();
    if (!name || !body) {
        alert('Please fill in the employee name and recognition message.');
        return;
    }
    let recogs = lsGetRecog();
    if (_editRecogId) {
        recogs = recogs.map(r => r.id === _editRecogId ? { ...r, name, dept, body, body_es, by: by || 'Bryten Team' } : r);
        trackEvent('recognition_edited', { id: _editRecogId });
    } else {
        const now = new Date();
        const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        recogs.unshift({ id: Date.now(), name, dept, body, body_es, by: by || 'Bryten Team', date });
        trackEvent('recognition_posted', { name });
    }
    lsSetRecog(recogs);
    closeRecogModal();
    renderRecognitionWall();
}

function editRecog(id) {
    if (!canEdit()) return;
    try {
        openRecogModal(id);
    } catch (e) {
        console.error('editRecog error:', e);
        alert('Edit error: ' + e.message);
    }
}

function deleteRecog(id) {
    if (!canEdit()) return;
    showConfirm('Delete this recognition? This cannot be undone.', () => {
        let recogs = lsGetRecog().filter(r => r.id !== id);
        lsSetRecog(recogs);
        renderRecognitionWall();
        trackEvent('recognition_deleted', { id });
    }, { title: 'Delete Recognition?', actionLabel: 'Delete' });
}

/* ══════════════════════════ IDEAS SUBMISSION ══════════════════════════ */
function submitIdea() {
    const first = document.getElementById('ideaFirst').value.trim();
    const last = document.getElementById('ideaLast').value.trim();
    const dept = document.getElementById('ideaDept').value.trim();
    const subject = document.getElementById('ideaSubject').value.trim();
    const body = document.getElementById('ideaBody').value.trim();
    const msg = document.getElementById('ideaMsg');
    if (!first || !last) {
        showIdeaMsg('Please enter your first and last name.', 'error');
        return;
    }
    if (!dept) {
        showIdeaMsg('Please enter your community or department.', 'error');
        return;
    }
    if (!subject) {
        showIdeaMsg('Please add a subject line.', 'error');
        return;
    }
    if (!body) {
        showIdeaMsg('Please describe your idea.', 'error');
        return;
    }
    // Build mailto link — formatted summary email to ideas@livebryten.com 
    const emailSubject = encodeURIComponent('New Idea: ' + subject);
    const emailBody = encodeURIComponent('IDEA SUBMISSION — Bryten Central\n' + '═══════════════════════════════════════\n\n' + 'From: ' + first + ' ' + last + '\n' + 'Community / Department: ' + dept + '\n' + 'Subject: ' + subject + '\n\n'
        + 'IDEA:\n' + body + '\n\n' + '═══════════════════════════════════════\n' + 'Submitted via Bryten Central on ' + new Date().toLocaleString());
    const mailtoLink = 'mailto:ideas@livebryten.com?subject=' + emailSubject + '&body=' + emailBody; window.location.href = mailtoLink;
    // Clear form and confirm 
    setTimeout(() => {
        document.getElementById('ideaFirst').value = '';
        document.getElementById('ideaLast').value = '';
        document.getElementById('ideaDept').value = '';
        document.getElementById('ideaSubject').value = '';
        document.getElementById('ideaBody').value = '';
        showIdeaMsg('Your idea has been sent! Thank you for contributing.', 'success');
        trackEvent('idea_submitted', { dept, subject });
    }, 400);
}

function showIdeaMsg(text, type) {
    const msg = document.getElementById('ideaMsg');
    if (!msg) return; msg.textContent = text; msg.style.display = 'block';
    // navy background — use light colors for both states 
    msg.style.color = type === 'error' ? '#F08888' : 'rgba(245,240,232,.9)';
    msg.style.fontWeight = '600'; setTimeout(() => { msg.style.display = 'none'; }, 5000);
} 
(async function init() {
    // Build clock strip immediately — before async data load so it's visible right away 
    buildClockStrip();
    updateClocks();
    setInterval(updateClocks, 1000);
    try {
        await initData();
        initOverlayListeners();
        applyLanguage();
        setView(curView);
        renderAll();
        trackPageView();
    } catch (err) {
        console.error('Bryten Central init error:', err);
        // Show error details on screen for debugging 
        const dbg = document.createElement('div');
        dbg.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#B83A3A;color:#fff;padding:12px 18px;font-family:monospace;font-size:13px;z-index:9999;white-space:pre-wrap;';
        dbg.textContent = 'Init Error: ' + err.message + '\n' + (err.stack || '').split('\n').slice(0, 4).join('\n'); document.body.prepend(dbg);
    }
})();

/* ══ TRAINING CLASS CALENDAR 
To activate: replace '' below with your SharePoint calendar embed URL. 
Example: 'https://bryten.sharepoint.com/sites/hr/Lists/Training/calendar.aspx' */
const TRAINING_CAL_URL = 'https://aptvault.sharepoint.com/mebintranet/Lists/MEB%20Training/calendar.aspx';
let _tcOpen = false; function toggleTrainingCal() {
    _tcOpen = !_tcOpen; trackEvent('training_cal_toggle', { open: _tcOpen });
    const ov = document.getElementById('trainingCalOverlay');
    const btn = document.getElementById('trainingCalBtn');
    if (_tcOpen) {
        ov.style.display = 'flex';
        btn.classList.add('training-on');
        const iframe = document.getElementById('trainingCalIframe');
        const ph = document.getElementById('trainingCalPlaceholder');
        const link = document.getElementById('trainingCalOpenLink');
        if (TRAINING_CAL_URL) {
            if (iframe.src !== TRAINING_CAL_URL) iframe.src = TRAINING_CAL_URL;
            ph.style.display = 'none';
            link.href = TRAINING_CAL_URL;
        } else {
            iframe.src = 'about:blank';
            ph.style.display = 'flex';
            link.href = '#';
        }
    } else {
        closeTrainingCal();
    }
}

function closeTrainingCal() {
    _tcOpen = false;
    document.getElementById('trainingCalOverlay').style.display = 'none';
    document.getElementById('trainingCalBtn').classList.remove('training-on');
}
// trainingCalOverlay listener moved to initOverlayListeners()