<template>
    <div>
        <waves-background fill1="rgba(149, 97, 226,0.7"
                          fill2="rgba(149, 97, 226,0.5)"
                          fill3="rgba(149, 97, 226,0.3)"
                          fill4="#9561e2"></waves-background>

        <div id="cardContainer">
            <b-container class="content-padding animated bounceInDown bg-light">
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
                        understanding needed to design, implement, maintain and improve the functionality of websites
                        for
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
                        The Information Technology major is designed to provide students interested in beginning,
                        changing,
                        or advancing technology careers with a broad-based background in all areas of Information
                        Technology.
                        IT majors with this option are qualified for positions as a Web Applications Developer, Web
                        Support
                        Specialist, and Web Manager and Administrator. Students will be prepared to support computing in
                        a
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
                    <p>The progress skill bars listed below are self assesed. A full bar represents 100% understanding
                        of a topic.
                        Hover over the title of each skill to get an explanation.</p>
                    <b-row>
                        <b-col>
                            <h4 class="mb-5">Frontend</h4>
                            <div v-for="skill in frontendSkills">
                                <div class="skillLink" v-b-popover.hover.top="skill.description" :title="skill.name">
                                    <p>{{ skill.name }}</p>
                                    <b-progress :value="skill.value" max="100" class="mb-3" show-value></b-progress>
                                </div>
                            </div>

                        </b-col>
                        <b-col>
                            <h4 class="mb-5">Backend</h4>
                            <div v-for="skill in backendSkills">
                                <div class="skillLink" v-b-popover.hover.top="skill.description" :title="skill.name">
                                    <p>{{ skill.name }}</p>
                                    <b-progress :value="skill.value" max="100" class="mb-3" show-value></b-progress>
                                </div>
                            </div>
                        </b-col>
                        <b-col>
                            <h4 class="mb-5">Other</h4>
                            <div v-for="skill in otherSkills">
                                <div class="skillLink" v-b-popover.hover.top="skill.description" :title="skill.name">
                                    <p>{{ skill.name }}</p>
                                    <b-progress :value="skill.value" max="100" show-value></b-progress>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

    </div>
</template>

<script>
    import WavesBackground from "../backgrounds/WavesBackground";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                cardToggleText: 'Check out my career skills',
                currentCard: 'education',
                frontendSkills: [


                    {
                        name: 'HTML',
                        description: 'A scripting language that defines the layout a web page. I have a very clear ' +
                            'understanding of HTML and how to create and parse it programmatically.',
                        value: 95
                    },
                    {
                        name: 'CSS',
                        description: 'A style language for expressing the presentation of a structured document, such as ' +
                            'a web page. I am proficient in understanding and writing CSS, although not a master.' +
                            ' CSS can be very frustrating and while I enjoy tweaking complex animated sequences, the level' +
                            'of pure CSS creation is a mastery of art.',
                        value: 85
                    },
                    {
                        name: 'JavaScript',
                        description: 'A scripting language that is interpreted by your browser to add functionality to ' +
                            'a web page. I first learned vanilla JS when I began programming, now I prefer to use a ' +
                            'framework instead, which is why I gave my self a lower score.',
                        value: 70
                    },
                    {
                        name: 'Vue.js',
                        description: 'A light weight JavaScript framework used to build user interfaces and single ' +
                            'page applications (SPA). Vue.js is my preferred frontend framework that I mainly pair with a ' +
                            'Laravel backend API. I plan on trying Vue Native for mobile app development in the near ' +
                            'future',
                        value: 75
                    },
                    {
                        name: 'React.js',
                        description: 'A JavaScript library for building user interfaces and single page applications ' +
                            '(SPA). I have only built some small testing projects in React and React Native. I am willing' +
                            'to explore further but am not fond of JSX and tend to use Vue.js when optional. ',
                        value: 40
                    },

                ],
                backendSkills: [


                    {
                        name: 'PHP',
                        description: 'A server side scripting language for building dynamic web pages. I began my career' +
                            'using vanilla procedural PHP. As my education advanced I began learning object oriented PHP,' +
                            ' frameworks and package management such as Composer. PHP is my preferred backend language to build' +
                            'robust web applications.',
                        value: 83
                    },
                    {
                        name: 'Laravel',
                        description: 'An MVC PHP framework used to build robust web application. Laravel is my favorite' +
                            'framework to work in. I really enjoy building advance REST APIs. I am currently working as ' +
                            'a Laravel Developer but tend to code in other languages as well.',
                        value: 83
                    },
                    {
                        name: 'Node.js',
                        description: 'JavaScript runtime environment that executes JavaScript outside of a web browser.' +
                            ' I have done some projects in node but not many. One project I wrote was a web page screen shot' +
                            ' tool. The program takes a seed of URLs, visits the website, scrolls to the bottom,' +
                            ' takes a screen shot and resize the image for final viewing.',
                        value: 40
                    },
                    {
                        name: 'Python',
                        description: 'An interpreted high level programming language. I have moderate experience with ' +
                            'Python since I used it throughout my college career to complete a variety of assignments.' +
                            ' My favorite being a web scrapper. I have mainly used Python for data crunching and ' +
                            'tinkering with my Raspberry Pi, I do not have much experience with Python and web development.' +
                            'Although, I am sure I can adapt quickly.' ,
                        value: 80
                    },
                ],
                otherSkills: [
                    {
                        name: 'Application Architecture',
                        description: 'I really enjoy building entire applications from, concept to product. While most' +
                            'applications require custom tech stacks, I am most familiar with Linux, Apache, MySQL & PHP (LAMP).' +
                            'I will lean towards a LAMP stack with Laravel Backend and Vue.js frontend. Recently I began working with ' +
                            'Docker, which I have been implementing system orchestrations.',
                        value: 70
                    },
                    {
                        name: 'Git',
                        description: 'Version control system for tracking changes in source code during software development.' +
                            ' Since I learned Git I began using it for every project. I am a casual user and know basics ' +
                            'when it it comes to committing, branches, merges and remote repos. Git can get very complicated' +
                            ' when a lot programmers are sharing the same repository. I am less familiar with some of the more complex ' +
                            'git functions. ',
                        value: 80
                    },
                    {
                        name: 'Docker',
                        description: 'A Platform that performs OS-level vitalization to deliver software in isolated containers.' +
                            ' I think Docker is an amazing tool, I began using it as a local dev environment and then ' +
                            '',
                        value: 80
                    },
                ]
            }
        },
        components: {
            'waves-background': WavesBackground

        },
        methods: {
            cardSwap() {
                this.animateCSS('#cardContainer', 'flipOutX', this.changeCardValues);

            },
            animateCSS(element, animationName, callback, delay = null) {
                const node = document.querySelector(element);
                if (delay !== null) {
                    node.classList.add('animated', animationName, delay);
                } else {
                    node.classList.add('animated', animationName);
                }

                function handleAnimationEnd() {
                    node.classList.remove('animated', animationName);
                    node.removeEventListener('animationend', handleAnimationEnd);

                    if (typeof callback === 'function') callback()
                }

                node.addEventListener('animationend', handleAnimationEnd)
            },
            changeCardValues() {
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
    @import "../../../sass/variables";

    #cardContainer {
        z-index: 3;
        margin-bottom: 25px;
    }

    h1 {
        display: inline-block;
        padding-bottom: 5px;
        position: relative;
        border-bottom: 2px solid $purple;
    }

    h4 {
        display: inline;
        color: $purple;
        font-weight: bold;

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

    .progress {
        margin-top: -10px;
        margin-bottom: 5px;
    }
    .skillLink {
        cursor: pointer;
    }

</style>
