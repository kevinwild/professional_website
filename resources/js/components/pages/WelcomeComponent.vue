<template>
    <div>
        <squares-background></squares-background>

        <b-container class="content-padding animated slideInLeft reg-shadow" id="welcomeContainer">

            <b-row>
                <b-col lg="8">
                    <h1 class="animated bounce delay-1s">Greetings!</h1>
                    <p class="text-light">
                        &nbsp; &nbsp;  My name is Kevin Wildermuth. Welcome to my professional website, creativity
                        outlet, and experimental playground! I currently am employed as a Software Engineer specializing
                        in web application development. My passion was not always programming and technology. At an early
                        age of 13, I began creating advertisements and walking door to door in an attempt to generate money
                        by landscaping and performing small household projects. Quite successful, I continued this throughout
                        my academic years. Growing up I kept busy with a variety of activities such as: skateboarding, snowboarding,
                        playing guitar and engaging in sports.
                         <br><br>
                        &nbsp; &nbsp; After high school, while working full time in a factory my friend and I came up with an idea for
                        a website that involved the hobbies we enjoyed (skateboarding, snowboarding, music, etc.) and
                        categorizing content based on geographical location. With no prior experience, I began teaching myself
                        website development, and within a few weeks completed our vision. I admit the site was not pretty,
                        it was comprised of structural tables and spaghetti code, but witnessing our idea accessible on
                        the public internet was the moment I became fascinated with developing software. This inspired
                        me to study web development at my local community college then later pursuing a degree in web
                        information systems at the
                        <a href="https://catalog.njit.edu/undergraduate/computing-sciences/informatics/web-information-systems-bs/" target="_blank">
                            New Jersey Institute of Technology </a>. During my adult education I continued my
                        entrepreneur spirit and launched Pro Market Me INC. which was a website development and marketing company
                        catering to small businesses. During this time, I gained hands on experience working with clients while
                        expanding my knowledge and skill set at school. Today, I am a full-time Software Engineer at
                        <a href="https://www.internetbrands.com/" target="_blank">Internet Brands </a>
                        and enjoy spending a large portion of my free time learning about new technologies and working on
                        various side projects.


                        <br><br>
                        Thank you for taking the time to learn about my journey into software engineering. If you would like to collaborate,
                        please feel free to
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

