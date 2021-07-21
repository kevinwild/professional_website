<template>
    <div>
        <squares-background></squares-background>

        <b-container class="content-padding animated slideInLeft reg-shadow" id="welcomeContainer">

            <b-row>
                <b-col lg="8">
                    <h1 class="animated bounce delay-1s">Greetings!</h1>
                    <p class="text-light">
                        My name is Kevin Wildermuth. Welcome to my professional website, creativity outlet and
                        experimental playground!
                        I am a web application software engineer by day and tinkering a variety of different
                        <a href="/projects">tech hobbies by night. </a> My passion was not always in programming and
                        technology,
                        From the age 13, I began creating advertisements for lawn maintenance and small house hold
                        projects.
                        I
                        continued this through my schooling which has taught me entrepreneurship, people skills and
                        discipline.
                        At age 21 I began to learn the basics of developing websites, after launching my first
                        website,


                    </p>

                </b-col>
                <b-col lg="3" class="text-center">
                    <img :src="{}"
                         class="img-fluid reg-shadow animated jackInTheBox delay-2s" id="welcomeProfile">

                </b-col>

            </b-row>

        </b-container>


    </div>
</template>

<script>
    import WelcomeBackground from '../backgrounds/SquaresBackground'

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'welcome-background': WelcomeBackground

        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../sass/variables";

    #welcomeProfile {
        border-radius: 125px;
        width: 200px;
        height: inherit;
        padding: 10px;
        background: $grey4;
    }

    #learnMore {
        bottom: 0;
        left: 0;
        right: 0;
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

