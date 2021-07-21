<template>
    <div>
        <squares-background></squares-background>

        <b-container class="content-padding animated slideInLeft reg-shadow" id="welcomeContainer">

            <b-row>
                <b-col lg="8">
                    <h1 class="animated bounce delay-1s">Home</h1>
                </b-col>
            </b-row>

        </b-container>


    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../../sass/variables";

    #welcomeProfile {
        border-radius: 125px;
        width: 200px;
        height: inherit;
        padding: 10px;
        background: $grey4;
    }



    #welcomeRow {
        background-color: #fff;
    }

    #welcomeContainer {
        background: $bg-black;
        border-radius: 25px;

    }

    p {
        font-size: 1.2em;
    }

    h1 {
        color: white;
        display: inline-block;
        padding-bottom: 5px;
        position: relative;
        border-bottom: 2px solid $blue;
    }


</style>

