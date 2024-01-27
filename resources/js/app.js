import './bootstrap';
import '../css/app.css';

import "../../public/dist/js/jquery.min"
import "../../public/dist/js/jquery.bootstrap"
import "../../public/dist/js/jquery.magnific-popup"
import "../../public/dist/js/jquery.owl.carousel"
import "../../public/dist/js/jquery.ion.rangeSlider"
import "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"
import "../../public/dist/js/main"

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {


        // const i18n = createI18n({
        //     locale: props.initialPage.props.locale, // user locale by props
        //     fallbackLocale: "en", // set fallback locale
        //     messages: messages, // set locale messages
        // });

        let script2= document.createElement('script');
        script2.src = "/dist/js/main.js";
        document.body.append(script2); // (*)

        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
