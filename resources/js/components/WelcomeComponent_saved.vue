<template>
    <div>

        <b-jumbotron header="Greetings!" lead="">
            <b-row>
                <b-col lg="8">
                    <p>
                        My name is Kevin Wildermuth. Welcome to my professional website, creativity outlet and
                        experimental
                        playground!
                        I am a web application software engineer by day and tinkering a variety of different
                        <a href="/projects">tech hobbies by night. </a> My passion was not always in programming and
                        technology,
                        From the age 13, I began creating advertisements for lawn maintenance and small house hold
                        projects.
                        I
                        continued this through my schooling which has taught me entrepreneurship, people skills and
                        discipline.
                        At age 21 I began to learn the basics of developing websites, after launching my first website,
                        .

                    </p>

                </b-col>
                <b-col lg="3" class="text-center">
                    <img src="storage/kevin-wildermuth-software-engineer.png" class="img-fluid" id="welcomeProfile">

                </b-col>

            </b-row>

            <b-button id="learnMore" block variant="primary" href="#">Learn More</b-button>

        </b-jumbotron>

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style lang="scss">
    @import "../../sass/_variables.scss";

    #welcomeProfile {
        border-radius: 125px;
        width: 200px;
        height: inherit;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
    }

    #learnMore {
        bottom: 0;
        left: 0;
        right: 0;
    }

</style>

