<template>
    <div>
        <nav-component></nav-component>
        <loading-component></loading-component>
        <message-component></message-component>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import NavComponent from './shared/NavComponent';
    import LoadingComponent from './shared/LoadingComponent';
    import MessageComponent from './shared/MessageComponent';

    export default {
        mounted() {
            console.log('App Component mounted.')
        },
        components: {
            'nav-component': NavComponent,
            'loading-component': LoadingComponent,
            'message-component': MessageComponent
        },


    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

