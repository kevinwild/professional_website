<template>
    <div>
        <waves-background fill1="rgba(56, 193, 114, 63,0.7"
                          fill2="rgba(56, 193, 114,0.5)"
                          fill3="rgba(56, 193, 114,0.3)"
                          fill4="#38c172"></waves-background>    </div>
</template>

<script>
    import WavesBackground from "./backgrounds/WavesBackground";
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'waves-background': WavesBackground

        }
    }
</script>

