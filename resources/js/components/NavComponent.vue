<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Kevin Wildermuth</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav type="light" class="ml-auto">
                    <b-nav-item :to="{ path: '/'}" :active='$route.name === "welcome"'>
                        <i class="fas fa-hand-paper"></i>
                        Welcome
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/contact'}" :active='$route.name === "education"'>
                        <i class="fas fa-user-graduate"></i>
                        Education
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/contact'}" :active='$route.name === "projects"'>
                        <i class="fas fa-code-branch"></i>
                        Projects
                    </b-nav-item>

                    <b-nav-item :to="{ path: '/contact'}" :active='$route.name === "resume"'>
                        <i class="fas fa-file-alt"></i>
                        Resume
                    </b-nav-item>
                    <b-nav-item :to="{ path: '/contact'}" :active='$route.name === "contact"'>
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
        }
    }
</script>
