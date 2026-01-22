import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"d1b8986f-4961-4a1f-ac0b-865dd28c0169","homePageId":"8ba806f0-5ece-4815-b6e8-072fc40006dc","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"lt","default":true}],"background":{},"workflows":[],"pages":[{"id":"7f5f31fe-9d99-4f65-bac3-ca0353bb3061","linkId":"7f5f31fe-9d99-4f65-bac3-ca0353bb3061","name":"Users","folder":"Administration/","paths":{"en":"users","default":"users"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"cf054121-cd19-4911-b67e-32d8c0bb8c66","sectionTitle":"Body","linkId":"35073cdb-a3c9-47a3-a06a-bfa82463e72a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f7ac81d0-7abc-4095-a8ae-ac6a80985397","linkId":"f7ac81d0-7abc-4095-a8ae-ac6a80985397","name":"View Purchase Request","folder":"Purchases/","paths":{"en":"view-purchase-request/{{request_id|}}","default":"view-purchase-request/{{request_id|}}"},"langs":["lt","en"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"ea871459-e458-4e54-bafb-178b9d26ed2e","sectionTitle":"Body","linkId":"6e8342a9-27f0-4d94-90b4-572774e597e9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1be5f603-4e65-46a8-843e-6952e3c16200","linkId":"1be5f603-4e65-46a8-843e-6952e3c16200","name":"Login","folder":"Authentication/","paths":{"en":"login","default":"login"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"d3378f91-35a2-4126-b1de-090205792b9c","sectionTitle":"Login","linkId":"b7feea12-5ce5-4722-8a45-e7bcd606d064"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1689c0ac-9ee6-47b9-ac35-81e8fdb0ac24","linkId":"1689c0ac-9ee6-47b9-ac35-81e8fdb0ac24","name":"Create Purchase Request","folder":"Purchases/","paths":{"en":"create-purchase-request","default":"create-purchase-request"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"8b89e058-c232-4ab2-bb48-56862a937c00","sectionTitle":"Body","linkId":"9859d6aa-e1e9-43e4-847b-8e59719bea9e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8ba806f0-5ece-4815-b6e8-072fc40006dc","linkId":"8ba806f0-5ece-4815-b6e8-072fc40006dc","name":"Home","folder":null,"paths":{"en":"","lt":"home","default":"home"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"002aff54-e583-4fce-88e3-e4441365b5d6","sectionTitle":"Body","linkId":"6b11d9f7-0c4e-4ad1-baaa-6d3dd0bd446b"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e1323dff-4396-4d42-a589-17d1b4bac290","linkId":"e1323dff-4396-4d42-a589-17d1b4bac290","name":"Create Competition","folder":"Competition/","paths":{"lt":"create-competition/{{request_id|}}","default":"create-competition/{{request_id|}}"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"e98eb2c2-eed7-45bc-8b2b-89e348492481","sectionTitle":"Body","linkId":"638ed68f-2f0a-4b45-8411-40fab8706da2"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"8b65357d-ae6e-4f6a-b636-763b7bf27e70","linkId":"8b65357d-ae6e-4f6a-b636-763b7bf27e70","name":"Purchase Requests","folder":"Purchases/","paths":{"en":"purchase-requests","default":"purchase-requests"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"57e6f623-d5bf-47d4-a091-348bebd04b38","sectionTitle":"Body","linkId":"4a28fc2d-a95d-44cd-b5c6-47e20ad04f19"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"be73216b-d2cc-489f-a95a-24d650e34027","linkId":"be73216b-d2cc-489f-a95a-24d650e34027","name":"Competition","folder":"Competition/","paths":{"lt":"competition/{{competition_id|}}","default":"competition/{{competition_id|}}"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"aed8c1de-0f4b-44d9-ac07-f872dd72ecd8","sectionTitle":"Body","linkId":"45511475-9e8c-442c-bcc1-17122f9977c4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6bcddf60-ee6f-43fa-9c20-d334034a530a","linkId":"6bcddf60-ee6f-43fa-9c20-d334034a530a","name":"General Ledger","folder":"Data/","paths":{"lt":"general-ledger","default":"general-ledger"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"a0f4ac50-075d-4eda-ab9b-0717421ee0eb","sectionTitle":"Body","linkId":"9b65314f-dc4b-47a6-a0fe-fb297b139d41"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"bfc01ca4-ec13-4289-8c50-9fbf7c0f7dd0","linkId":"bfc01ca4-ec13-4289-8c50-9fbf7c0f7dd0","name":"Supplier","folder":"Data/","paths":{"lt":"supplier","default":"supplier"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"d0c56412-467d-420a-9dae-805f9b8e6a17","sectionTitle":"Body","linkId":"832341a7-0ad1-4454-aa3e-c1e3f7cf8de8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"61d95b6f-103b-437a-b855-ef24fe1ba8fc","linkId":"61d95b6f-103b-437a-b855-ef24fe1ba8fc","name":"Deartment","folder":"Data/","paths":{"lt":"department","default":"department"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"9dd0a1cc-38d5-48a5-a7fa-71eaeba9b7ac","sectionTitle":"Body","linkId":"89761f50-f117-4754-a6b1-ffd2def2e858"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"afecdc84-63e2-4d21-8bc1-91db178a4712","linkId":"afecdc84-63e2-4d21-8bc1-91db178a4712","name":"Item","folder":"Data/","paths":{"lt":"item","default":"item"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"c4954ce5-fe93-41a4-9507-98d728a6495a","sectionTitle":"Body","linkId":"0976a9a7-7a00-43bb-a060-031abd27ba8b"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"aadd13ad-98e1-4538-ba6c-809dcad6a01f","linkId":"aadd13ad-98e1-4538-ba6c-809dcad6a01f","name":"Group","folder":"Data/","paths":{"lt":"group","default":"group"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"a053a31d-4d2a-4fb9-9dc5-e8cf3f111004","sectionTitle":"Body","linkId":"4de568f1-ab4e-4800-9ccd-87900a70a154"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"eebdfe7e-25be-448f-9dcc-69dcab1083a2","linkId":"eebdfe7e-25be-448f-9dcc-69dcab1083a2","name":"Forgot Password","folder":"Authentication/","paths":{"en":"forgot-password","default":"forgot-password"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"6521afdd-1ed3-47d8-a742-3d2cb5428e2d","sectionTitle":"Reset password","linkId":"b9867d7b-99ec-43ae-ada2-e32e44d65de9"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"1550435b-ea2d-4b1b-83d9-3317b7637ceb","linkId":"1550435b-ea2d-4b1b-83d9-3317b7637ceb","name":"Competitions","folder":"Competition/","paths":{"lt":"competitions","default":"competitions"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"5ada7a92-d7a5-460f-8f84-f1ae4316b48d","sectionTitle":"Body","linkId":"6102fa91-20f3-4c2a-8a76-3698ee829b02"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"84c33d38-4595-44a7-8908-6ba23bd70062","linkId":"84c33d38-4595-44a7-8908-6ba23bd70062","name":"Budget","folder":"Budget/","paths":{"en":"budget","default":"budget"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"1eb2834b-2467-4d02-aa46-d8416250264c","sectionTitle":"Body","linkId":"625e3806-bf57-4ae1-8cc9-99be2aaea2d5"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"79207715-0e7b-4812-8869-2ac076936ad1","linkId":"79207715-0e7b-4812-8869-2ac076936ad1","name":"Workflows","folder":"Administration/","paths":{"en":"workflows","default":"workflows"},"langs":["en","lt"],"cmsDataSetPath":null,"sections":[{"uid":"e16786dc-2e43-479d-8537-4de3684506c9","sectionTitle":"Sidemenu","linkId":"45ff90b4-ae2c-4f05-8a51-1dac3c715cdf"},{"uid":"2115031d-845b-4e47-a840-3974391e2c1c","sectionTitle":"Body","linkId":"041f5f6b-c3cc-434a-a746-94a424fc0223"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 1;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
