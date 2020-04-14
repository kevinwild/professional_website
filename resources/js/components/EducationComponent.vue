<template>
    <div>
        <waves-background fill1="rgba(149, 97, 226,0.7"
                          fill2="rgba(149, 97, 226,0.5)"
                          fill3="rgba(149, 97, 226,0.3)"
                          fill4="#9561e2"></waves-background>

        <b-container class="content-padding animated bounceInDown bg-light" id="cardContainer">
            <div class="animated slideInRight delay-1s">
                <p id="cardToggle" @click="cardSwap" class="dropShadow float-right animated rubberBand delay-5s">
                    {{ cardToggleText}}
                </p>
            </div>

            <!-- Education Stuff -->
            <div v-if="currentCard === 'education'">
                <h1 class="animated delay-1s">College Education</h1>
                <h3>New Jersey Institute of Technology</h3>
                <h4 class="degreeText">Bachelors in Web Information Systems:</h4><span
                    class="smallText">- summer 2018</span>
                <p>
                    The Web and Information Systems program provides you with the practical skills and technical
                    understanding needed to design, implement, maintain and improve the functionality of websites for
                    large-scale organizations.
                    <a href="https://catalog.njit.edu/undergraduate/computing-sciences/information-systems/web-information-systems-bs/"
                       target="_blank">
                        (degree courses)
                    </a>
                </p>
                <div id="hr" class="d-left"></div>

                <!-- Arrow Tab -->


                <h3 class="mt-2">Passaic County Community College</h3>
                <h4 class="degreeText">Associate in Applied Science - Web and Mobile Development</h4><span
                    class="smallText">- summer 2015</span>
                <p>
                    The Information Technology major is designed to provide students interested in beginning, changing,
                    or advancing technology careers with a broad-based background in all areas of Information
                    Technology.
                    IT majors with this option are qualified for positions as a Web Applications Developer, Web Support
                    Specialist, and Web Manager and Administrator. Students will be prepared to support computing in a
                    networked environment and also be able to transfer to selected institutions of higher learning.
                    <a href="https://catalog.pccc.edu/program/100/"
                       target="_blank">
                        (degree courses)
                    </a>
                </p>
            </div>
            <!-- Skills Stuff -->
            <div v-if="currentCard === 'skills'">
                <h1>Acquired Skills</h1>
            </div>
        </b-container>

    </div>
</template>

<script>
    import WavesBackground from "./backgrounds/WavesBackground";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                cardToggleText: 'Check out my career skills',
                currentCard: 'education'
            }
        },
        components: {
            'waves-background': WavesBackground

        },
        methods: {
            cardSwap()   {
                this.animateCSS('#cardContainer', 'flipOutX', this.changeCardValues);
                
            },
            animateCSS(element, animationName, callback, delay = null) {
                const node = document.querySelector(element);
                if(delay !== null){
                    node.classList.add('animated', animationName, delay);
                }else {
                    node.classList.add('animated', animationName);
                }

                function handleAnimationEnd() {
                    node.classList.remove('animated', animationName);
                    node.removeEventListener('animationend', handleAnimationEnd);

                    if (typeof callback === 'function') callback()
                }

                node.addEventListener('animationend', handleAnimationEnd)
            },
            changeCardValues(){
                switch (this.currentCard) {
                    case 'skills':
                        this.currentCard = 'education';
                        this.cardToggleText = 'View my college education';
                        break;
                    case 'education':
                        this.currentCard = 'skills';
                        this.cardToggleText = 'Check out my career skills';
                        break;
                    default:
                        this.currentCard = 'education';
                }
                this.animateCSS('#cardContainer', 'flipInX', 'delay-1s')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../sass/_variables.scss";

    #cardContainer {
        background-color: $bg-white;
    }

    h1 {
        display: inline-block;
        padding-bottom: 5px;
        position: relative;
        border-bottom: 2px solid $purple;
    }

    h4 {
        display: inline;
    }

    .degreeText {
        color: $purple;
        font-weight: bold;
    }

    #hr {
        border-bottom: $purple solid 2px;
        display: block;
    }

    .smallText {
        display: inline;
    }

    #cardToggle {
        padding: 5px;
        border: solid 1px $purple;
        font-weight: bold;

        &:hover {

        }
    }

    .dropShadow {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);

        &:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            cursor: pointer;
        }


    }


</style>
