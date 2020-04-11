<template>
    <div class="area bg-img">
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style lang="scss">
    @import "../../../sass/_variables.scss";
    .area {
        background: linear-gradient(-45deg, $purple, #6c49a7, #533a80, #382b5a);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

</style>
