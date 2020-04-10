<template>
    <div>

        <nav-component></nav-component>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<script>
    import NavComponent from './NavComponent';

    export default {
        mounted() {
            console.log('App Component mounted.')
        },
        components: {
            'nav-component': NavComponent
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

