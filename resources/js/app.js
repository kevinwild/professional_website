import Vue from 'vue'
import VueRouter from 'vue-router'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Router
Vue.use(VueRouter);
// Install BootstrapVue
Vue.use(BootstrapVue);
// BootstrapVue icon components plugin
Vue.use(IconsPlugin);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//.. App component is top level holding vue router and navigation
Vue.component('app-component', require('./components/AppComponent.vue').default);
const welcome = Vue.component('welcome-component', require('./components/WelcomeComponent.vue').default);
const education = Vue.component('education-component', require('./components/EducationComponent.vue').default);
const projects = Vue.component('projects-component', require('./components/ProjectsComponent.vue').default);
const resume = Vue.component('resume-component', require('./components/ResumeComponent.vue').default);
const contact = Vue.component('contact-component', require('./components/ContactComponent.vue').default);


/**
 * Define Routes for application
 */
const routes = [
    {path: '/', component: welcome, name: 'welcome'},
    {path: '/education', component: education, name: 'education'},
    {path: '/projects', component: projects, name: 'projects'},
    {path: '/resume', component: resume, name: 'resume'},
    {path: '/contact', component: contact, name: 'contact'}

];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    el: '#app',
    router
});
