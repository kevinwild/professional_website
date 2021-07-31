<template>
    <div>
        <squares-background></squares-background>

        <b-container class="content-padding animated slideInLeft reg-shadow" id="welcomeContainer">

            <b-row>
                <b-col lg="8">
                    <h1 class="animated bounce delay-1s">Greetings!</h1>
                    <p class="text-light">
                        &nbsp; &nbsp; My name is Kevin Wildermuth. Welcome to my professional website, creativity outlet and
                        experimental playground! I currently am employed as a software engineer specifically developing
                        web applications. My passion was not always programming and technology.
                        At an early age of 13, I began creating advertisements and walking door to door in an attempt
                        to generate money by completing landscaping and small house hold projects. Quite successful I continued
                        this throughout my academic years. Growing up I kept busy with a variety of activities
                        such as: skateboarding, snowboarding, playing guitar and engaging in sports.
                         <br><br>
                        &nbsp; &nbsp; After high school, my friend and I came up with an idea for a website that involved
                        the hobbies we enjoyed (skateboarding, snowboarding, music, etc.) and categorizing content based
                        on geographical location. With no prior experience, I began teaching myself website development,
                        and within a few weeks completed our vision. I admit the site was not pretty, it was comprised
                        of structural tables and hard codded madness, but seeing our idea live on the internet was the
                        moment I knew web development became my passion. This inspired me to pursue a degree in
                        web information systems at the New Jersey Institute of Technology. Currently, I spend a large
                        portion of my free time reading about new technologies and working on various side projects.

                        <br><br>
                        Thank you for taking the time to learn about me and if you want to connect feel free to
                        <b-link href="/contact">
                            contact me.
                        </b-link>
                    </p>

                </b-col>
                <b-col lg="3" class="text-center">
                    <img :src="'/storage/kevin-wildermuth-headshot.jpeg'"
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

