<template>
    <div>
       <waves-background></waves-background>
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
