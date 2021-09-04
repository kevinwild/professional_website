<template>
    <div>
        <waves-background fill1="rgba(56, 193, 114, 63,0.7"
                          fill2="rgba(56, 193, 114,0.5)"
                          fill3="rgba(56, 193, 114,0.3)"
                          fill4="#38c172"></waves-background>
        <b-button size="lg" @click="downloadResume" variant="outline-light">
            Download Resume <i class="fas fa-download"></i>
        </b-button>
        <b-dropdown id="downloadResume" text="Download Resume" class="m-md-2" variant="outline-light">
            <b-dropdown-item @click="downloadResume('docx')">.docx</b-dropdown-item>
            <b-dropdown-item @click="downloadResume('pdf')">.pdf</b-dropdown-item>
            <b-dropdown-item @click="downloadResume('txt')">.txt</b-dropdown-item>
        </b-dropdown>


        <div id="resumeContainer">

            <b-container class="content-padding animated slideInBottom white-background">
                <!-- Start Resume -->
                <h3 class="text-center">Kevin Wildermuth</h3>
                <p class="smallText text-center">
                    <a href="https://www.google.com/maps/place/Wayne,+NJ+07470/@40.9484458,-74.3124033,12z/data=!3m1!4b1!4m5!3m4!1s0x89c30260113c84d3:0xe654539a1cb20344!8m2!3d40.9253725!4d-74.2765441"
                       target="_blank"> Wayne, NJ 07470 </a>|
                    <a href="tel:9739108766">973-910-8766</a> |
                    <a href="mailto:kevinwildermuth1@gmail.com">KevinWildermuth1@gmail.com</a> |
                    <a href="/"> www.KevinWildermuth.com </a>
                </p>
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
                                <li>PHP: Laravel, Lumen, REST API, Backend Web Development</li>
                                <li>Python: Web Mining, Task Automation, Data Manipulation</li>
                                <li>JavaScript: Vue, Angular, Node, React Native, jQuery</li>
                                <li>Databases: MySQL, Postgres, SQlite, MongoDB</li>
                                <li>HTML: Semantic, blade/twig templating</li>
                                <li>CSS: SCSS, Bootstrap, Flexbox</li>
                                <li>CMS: WordPress, October</li>
                                <li>Package Management: NPM, Composer, Pip</li>
                                <li>Object Oriented Design</li>
                                <li>Java and C++: Academic hands-on experience</li>
                            </ul>
                        </ul>
                    </b-col>

                    <b-col>
                        <ul>
                            <li class="listTitle">Project Management</li>
                            <ul>
                                <li>Team Collaboration: Daily Standups, Code Reviews</li>
                                <li>Docker: Compose, Traefik</li>
                                <li>Version Control: Git, Git Flow</li>
                                <li>Support: Technical Documentation, Employee Training</li>
                                <li>Test Driven Development</li>
                            </ul>
                            <li class="listTitle">Software Usage</li>
                            <ul>
                                <li>Adobe Creative Suite: Fireworks, Illustrator, Photoshop</li>
                                <li>Microsoft Suite: Office365, Word, PowerPoint, Excel</li>
                                <li>G Suite: Dialog Flow, Sheets, Docs, Forms and Slides</li>
                                <li>Atlassian: Jira, Confluence</li>
                                <li>Other: Lucid Charts, Tableau</li>
                            </ul>
                        </ul>
                    </b-col>
                </b-row>
                <p class="largeText font-weight-bolder">Professional Experience</p>
                <div v-for="profExp in profExps" id="profExpContainer">
                    <a :href="profExp.company_link" target="_blank">
                        <span class="largeText">{{ profExp.company}}</span>
                    </a>
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
                    <a :href="edu.degree_link" target="_blank"><i>{{ edu.degree }}</i></a>
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
    import WavesBackground from "../backgrounds/WavesBackground";

    const axios = require('axios/index');
    import PublicStore from '../stores/PublicStore.js'

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
                            company_link: 'https://www.internetbrands.com/',
                            title: 'Software Engineer',
                            location: 'New Providence, NJ',
                            duration: 'August 2018 - Present',
                            tasks:
                                [
                                    "Architect, develop and test new applications",
                                    "Develop various ad hoc software to help internal business operations",
                                    "Add features, debug issues, and test complex high traffic software",
                                    "Assist developers and engineers in resolving key issues",
                                    "Work closely with team members to outline solutions to improve the architecture of the existing systems",
                                    "Resolve compatibility issues with software upgrades",
                                    "Effectively manage individual priorities and deadlines",
                                    "Collaborate with multiple teams such as Product, Design, and offshore developers to maintain high traffic enterprise applications, improve critical infrastructure, and maintain production support tickets",
                                    "Primary utilized languages: PHP, Laravel, Python,  Vue.js, Node.js,  Angular.js, jQuery, Docker"
                                ]
                        },
                        {
                            company: 'Pro Market Me INC.',
                            title: 'President',
                            location: 'Fort Myers, FL.',
                            duration: 'August 2018 - Present',
                            tasks:
                                [
                                    "Develop and maintain various small business websites by defining their business requirements and implementing their vision from concept through to completion",
                                    "Extensive WordPress configuration tailored to specific business needs",
                                    "Mobile UI experience enhancement",
                                    "Search Engine Optimization research and implementation",
                                    "Creation of website Illustrations, logos, online and print advertisements"

                                ]
                        },
                        {
                            company: 'UCEDA',
                            title: 'Lead Web Developer',
                            location: 'Paterson, NJ.',
                            duration: 'June 2015 - Present',
                            tasks:
                                [
                                    "Maintain and update multiple websites (75k+ users monthly)",
                                    "Develop custom web applications to improve business operations",
                                    "Effectively research technologies and implement technical solutions to solve business needs and requirements",
                                    "Business migration to use Office 365",
                                    "Train staff on new technologies introduced to the business",
                                    "Assist and collaborate with the Director of Marketing to hel,p implement new strategies for the company's ongoing email campaigns, video, and image advertisements, website page design, and identify new marketing methods to capture existing and new clients",
                                    "Query database for data analysis using MySQL",
                                    "Determine new options to improve organic search engine ranking",

                                ]
                        },
                    ],
                educations:
                    [
                        {
                            name: 'New Jersey Institute of Technology',
                            degree: 'Bachlor of Science, Web Information Systems',
                            degree_link: 'https://catalog.njit.edu/undergraduate/computing-sciences/informatics/web-information-systems-bs/',
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
                            degree_link: 'https://catalog.pccc.edu/program/100/',
                            location: 'Paterson, NJ',
                            graduation: 'Summer 2015',
                        }
                    ],
                psMethods: PublicStore.methods,
                psData: PublicStore.data
            }
        },
        methods: {
            downloadResume(pdf_type) {
                switch (pdf_type) {
                    case '.pdf':
                        window.open("/storage/Kevin-Wildermuth-Resume.pdf", "_blank");
                        break;
                    case 'txt':
                        window.open("/storage/Kevin-Wildermuth-Resume.txt", "_blank");
                        break;
                    default:
                        window.open("/storage/Kevin-Wildermuth-Resume.pdf", "_blank");

                }

            }
        }
    }
</script>


<style lang="scss" scoped>
    #downloadResume {
        margin-right: 25px;
        position: fixed;
        right: 0px;
        top: 70px;
        z-index: 2;
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

