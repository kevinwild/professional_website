<template>
    <div>
        <b-container class="content-padding reg-shadow" id="welcomeContainer">
            <span class="bg-img" id="bg-img-welcome"
                  style="background-image: url('/storage/welcome-background.jpg')"></span>

            <b-row>

                <b-col lg="8">
                    <h1 class="text-light">Projects</h1>
                    <p class="text-light">
                        test
                    </p>

                </b-col>
                <b-col lg="3" class="text-center">
                    <img src="storage/kevin-wildermuth-software-engineer.png" class="img-fluid" id="welcomeProfile">

                </b-col>

            </b-row>

        </b-container>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Projects Component mounted. ')
        }
    }
</script>
<style lang="scss">

</style>
