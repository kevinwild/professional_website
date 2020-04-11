<template>
    <div>
        <gradient-background></gradient-background>
    </div>
</template>

<script>
    import GradientBackground from "./backgrounds/GradientBackground";
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'gradient-background': GradientBackground

        }
    }
</script>
