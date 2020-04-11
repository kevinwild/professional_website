<template>
    <div>
        <lines1-background></lines1-background>
    </div>
</template>

<script>
    import LinesOneBackground from './backgrounds/ParticleBackground'

    export default {
        mounted() {
            console.log('Resume Component mounted. ')
        },
        components:{
            'lines1-background': LinesOneBackground
        }
    }
</script>

