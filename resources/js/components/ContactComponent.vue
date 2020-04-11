<template>
    <div>
        <particle-background></particle-background>

    </div>
</template>

<script>
    import ParticleBackground from "./backgrounds/ParticleBackground";
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'particle-background': ParticleBackground

        }
    }
</script>
