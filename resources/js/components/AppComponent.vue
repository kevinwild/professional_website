<template>
    <div>
        <nav-component></nav-component>
        <router-view class="view"></router-view>
    </div>
</template>

<script>
    import NavComponent from './NavComponent';

    export default {
        mounted() {
            console.log('App Component mounted.')
        },
        components:{
            'nav-component': NavComponent
        }

    }
</script>
