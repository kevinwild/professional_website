<template>
    <div>
       <waves-background fill1="rgba(246, 153, 63,0.7"
                         fill2="rgba(246, 153, 63,0.5)"
                         fill3="rgba(246, 153, 63,0.3)"
                         fill4="#f6993f"></waves-background>
    </div>
</template>

<script>
    import WavesBackground from "./backgrounds/WavesBackground";

    export default {
        mounted() {
            console.log('Projects Component mounted. ')
        },
        components: {
            'waves-background': WavesBackground

        }
    }
</script>
<style lang="scss">

</style>
