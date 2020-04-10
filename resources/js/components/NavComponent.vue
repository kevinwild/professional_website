<template>
    <div>
        <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark" id="navbar">
            <b-navbar-brand href="#">
                Kevin Wildermuth -
                <transition name="slide-fade">
                    <small><em> {{ loopNames[0] }} </em></small>
                </transition>

            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav type="light" class="ml-auto">
                    <b-nav-item :to="{ path: '/'}" :active='$route.name === "welcome"' id="navWelcome">
                        <i class="fas fa-hand-paper welcome-icon"></i>
                        Welcome
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/education'}" :active='$route.name === "education"' id="navEducation">
                        <i class="fas fa-user-graduate"></i>
                        Education
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/projects'}" :active='$route.name === "projects"' id="navProjects">
                        <i class="fas fa-code-branch"></i>
                        Projects
                    </b-nav-item>

                    <b-nav-item :to="{ path: '/resume'}" :active='$route.name === "resume"' id="navResume">
                        <i class="fas fa-file-alt"></i>
                        Resume
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/contact'}" :active='$route.name === "contact"' id="navContact">
                        <i class="fas fa-phone-volume"></i>
                        Contact
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('App Component mounted. ')
        },
        data(){
            return {
                loopNames: [
                    'software engineering'
                    ,'programmer'
                    ,'entrepreneur'
                    ,'hobbyist'
                    ,'creative thinker'
                ],

            }

        },
        mounted(){
            window.setInterval(()=>{
                this.changeLoopName();
            }, 5000);

        },
        methods: {
            changeLoopName(){
                const first = this.loopNames.shift();
                this.loopNames = this.loopNames.concat(first);
            }
        }
    }
</script>

<style lang="scss">
    @import "../../sass/_variables.scss";

    #navbar {
        /* Shadow 4dp */
        box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20);
    }
    #navWelcome:hover i{
        color: $blue;
    }

    #navWelcome .active {
        i {
            color: $blue;
        }

        border-bottom: 2px $blue solid;
    }

    #navEducation:hover i{
        color: $purple;
    }

    #navEducation .active {
        i {
            color: $purple;
        }

        border-bottom: 2px $purple solid;

    }

    #navProjects:hover i {
        color: $orange;

    }

    #navProjects .active {
        i {
            color: $orange;
        }

        border-bottom: 2px $orange solid;

    }

    #navResume:hover i{
        color: $green;
    }

    #navResume .active {
        i {
            color: $green;
        }

        border-bottom: 2px $green solid;

    }

    #navContact:hover i {
        color: $yellow;

    }

    #navContact .active {
        i {
            color: $yellow;
        }

        border-bottom: 2px $yellow solid;
    }
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
