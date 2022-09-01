import { createApp } from 'vue'
import App from './App.vue'

import Amplify, * as AmplifyModules from "aws-amplify";
import {AmplifyPlugin} from "aws-amplify-vue";
import awsconfig from "./aws-exports";

import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Amplify.configure(awsconfig);

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;


createApp(App).mount('#app')
