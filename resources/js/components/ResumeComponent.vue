<template>
    <div>
        <waves-background fill1="rgba(56, 193, 114, 63,0.7"
                          fill2="rgba(56, 193, 114,0.5)"
                          fill3="rgba(56, 193, 114,0.3)"
                          fill4="#38c172"></waves-background>
        <b-button id="printResume" variant="outline-success">
            Print Resume <i class="fas fa-print"></i>
        </b-button>


        <div id="resumeContainer">

            <b-container class="content-padding animated slideInBottom white-background">
                <!-- Start Resume -->
                <h3 class="text-center">Kevin Wildermuth</h3>
                <p class="smallText text-center">Wayne, NJ 07470 | 973-910-8766 | KevinWildermuth1@gmail.com |
                    www.KevinWildermuth.com</p>
                <p><span class="font-weight-bolder largeText">Objective:</span>
                    Skilled Full-Stack Web Developer aspiring for challenging opportunities in a growth-oriented
                    environment,
                    where my skills, enthusiasm and innovative thinking can be utilized.
                </p>
                <p class="font-weight-bolder largeText">Technical Skills:</p>
                <b-row>
                    <b-col>
                        <ul>
                            <li class="listTitle">Programming Technologies:</li>
                            <ul>
                                <li>PHP: Laravel, REST API, Service and Repository Pattern</li>
                                <li>HTML: Semantic</li>
                                <li>CSS: Bootstrap, Flexbox</li>
                                <li>JavaScript: JQuery, Angular, React (Native), Node</li>
                                <li>CMS: WordPress</li>
                                <li>Redux: Paired with React Native</li>
                                <li>Python: Data crunching, web scraping (beautifulSoup)</li>
                                <li>Java and C++: Academic hands-on experience</li>
                                <li>Package Management: NPM, Composer</li>
                                <li>Search Algorithms</li>
                                <li>Data Structures</li>
                                <li>Object Oriented Design</li>
                            </ul>
                        </ul>
                    </b-col>

                    <b-col>
                        <ul>
                            <li class="listTitle">Professional Skills:</li>
                            <ul>
                                <li>Version Control: Git</li>
                                <li>Test Driven Development</li>
                                <li>Methodologies: Agile, SCRUM, SDLC, Trello, Kanban</li>
                                <li>Adobe Creative Suite: Fireworks, Illustrator, Photoshop, Dreamweaver</li>
                                <li>Microsoft Suite: Word, PowerPoint, Excel</li>
                                <li>G Suite: Sheets, Docs, Forms and Slides</li>
                                <li>Tableau</li>

                            </ul>
                        </ul>
                    </b-col>
                </b-row>
                <p class="largeText font-weight-bolder">Professional Experience</p>
                <div v-for="profExp in profExps" id="profExpContainer">
                    <span class="largeText">{{ profExp.company}}</span>
                    <span class="smallText"> - {{ profExp.location}} </span>
                    <span class="float-right smallText"> {{ profExp.duration}} </span>
                    <ul>
                        <li v-for="task in profExp.tasks">
                            {{ task }}
                        </li>
                    </ul>

                </div>

                <p class="largeText font-weight-bolder">Education</p>
                <div v-for="edu in educations">
                    <span class="largeText">{{ edu.name}}</span> <br>
                    <i>{{ edu.degree }}</i>
                    <span class="smallText"> - {{ edu.location}} </span>
                    <span class="float-right smallText"> {{ edu.graduation}} </span>
                    <ul>
                        <li v-if="edu.details" v-for="detail in edu.details">
                            {{ detail }}
                        </li>
                    </ul>

                </div>



            </b-container>

        </div>


    </div>
</template>

<script>
    import WavesBackground from "./backgrounds/WavesBackground";

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'waves-background': WavesBackground
        },
        data() {
            return {
                profExps:
                    [
                        {
                            company: 'Internet Brands',
                            title: 'Software Engineer',
                            location: 'New Providence, NJ',
                            duration: 'August 2018 - Present',
                            tasks:
                                [
                                   'Develop and maintain varies web applications',
                                    'Upgrade multiple PHP applications from version 5 to 7+',
                                    'Developed restful API for'
                                ]
                        },
                        {
                            company: 'Learana',
                            title: 'Backend Laravel Developer',
                            location: 'Wilmington, DE.',
                            duration: 'June 2018 - August 2018',
                            tasks:
                                [
                                    'Work collaboratively with team members as a key member during development',
                                   ' Create and strategize the database and software design',
                                    'Develop API using service repository pattern',
                                ]
                        },
                        {
                            company: 'Pro Market Me INC.',
                            title: 'President',
                            location: 'Fort Myers, FL.',
                            duration: 'August 2018 - Present',
                            tasks:
                                [
                                    'Develop and maintain varies web applications',
                                    'Upgrade multiple PHP applications from version 5 to 7+',
                                    'Developed restful API for'
                                ]
                        },
                        {
                            company: 'UCEDA',
                            title: 'Lead Web Developer',
                            location: 'Paterson, NJ.',
                            duration: 'June 2015 - Present',
                            tasks:
                                [
                                    'Develop and maintain varies web applications',
                                    'Upgrade multiple PHP applications from version 5 to 7+',
                                    'Developed restful API for'
                                ]
                        },
                    ],
                educations:
                    [
                        {
                            name: 'New Jersey Institute of Technology',
                            degree: 'Bachlor of Science, Web Information Systems',
                            location: 'Newark, NJ',
                            graduation: 'Summer 2018',
                            details:
                                [
                                    '3.7 GPA',

                                    'Senior Capstone Project: Upgraded NJIT’s live parking application as a ' +
                                    'competitive project choice and received a letter of recommendation from the ' +
                                    'head department of technology. ',

                                    'Developed a python web scraper to calculate support and confidence towards the ' +
                                    'occurrence of words that relate to a specific topic. The crawler used the website ' +
                                    'Wikipedia for its data retrieving 500 relative pages. '
                                ]

                        },
                        {
                            name: 'Passaic County Community College',
                            degree: 'Associate of Applied Science, IT Web Design Options',
                            location: 'Paterson, NJ',
                            graduation: 'Summer 2015',
                        }
                    ]
            }
        }
    }
</script>


<style lang="scss" scoped>
    #printResume {
        margin-right: 25px;
        position: fixed;
        right: 0px;
        top: 70px;
        z-index:2;
    }

    #resumeContainer {
        margin-top: 125px;
        z-index: 1;
        margin-bottom: 50px;
        position: relative;
    }

    .smallText {
        font-size: .85em;
    }

    .largeText {
        font-size: 1.2em;
        margin-bottom: -3px;
    }

    ul .listTitle {
        list-style-type: none;
        font-weight: bolder;
    }

    .white-background {
        background-color: white;
    }
    #profExpContainer {
        margin-left: 35px;
    }
</style>

