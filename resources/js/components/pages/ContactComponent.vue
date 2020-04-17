<template>
    <div>
        <particle-background></particle-background>
        <b-container class="animated zoomIn content-padding reg-shadow text-light" id="contactContainer">
            <div class="text-center">
                <h1>Thanks for visiting</h1>
            </div>
            <p class="text-center animated rubberBand delay-1s">Have a question or want to work together?</p>
            <b-form class="dark" @submit.prevent="onSubmit">
                <b-row>
                    <b-col>
                        <b-form-group label="Your Name:" label-for="your-name">
                            <b-form-input
                                    id="name"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter name"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                    <b-col>
                        <b-form-group label="How did you find me:" label-for="discovery">
                            <b-form-input
                                    id="name"
                                    v-model="form.discovery"
                                    required
                                    placeholder="Google search, business card ..."
                            ></b-form-input>
                        </b-form-group>
                    </b-col>

                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group
                                id="input-group-1"
                                label="Email address:"
                                label-for="input-1"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    placeholder="Enter email"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label="Phone Number:" label-for="phone">
                            <b-form-input
                                    id="phone"
                                    v-model="form.phone"
                                    placeholder="Enter Phone Number"
                            ></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mb-4">
                    <b-col>
                        <b-form-textarea
                                id="textarea"
                                v-model="form.message"
                                placeholder="Enter your message here..."
                                rows="3"
                                max-rows="6"
                                required
                        ></b-form-textarea>
                    </b-col>
                </b-row>
                <b-button type="submit" class="btn-block" variant="warning">Send Message</b-button>

            </b-form>
        </b-container>
    </div>
</template>

<script>
    import PublicStore from '../stores/PublicStore.js'

    import ParticleBackground from "../backgrounds/ParticleBackground";

    const axios = require('axios/index');

    export default {

        data() {
            return {
                form: {
                    name: '',
                    discovery: '',
                    email: '',
                    phone: '',
                    message: ''
                },
                psMethods: PublicStore.methods,
                psData: PublicStore.data
            }

        },
        methods: {
            onSubmit() {
                this.psMethods.toggleShowLoader();
                axios.post(`api/contact`, {
                    name: this.form.name,
                    discovery: this.form.discovery,
                    email: this.form.email,
                    phone: this.form.phone,
                    message: this.form.message,

                })
                    .then(response => {
                        this.clearForm();
                        this.psData.showLoader = false;
                        this.psMethods.showMsg('Thanks! Your message has been sent');


                    })
                    .catch(e => {
                        this.psData.showLoader = false;
                        this.psMethods.showMsg('Error while sending your message', 'danger');

                        console.log('error', e);
                        this.errors.push(e);


                    })
            },
            clearForm() {
                this.form = {
                    name: '',
                    discovery: '',
                    email: '',
                    phone: '',
                    message: ''
                };
            }

        },

        mounted() {
            console.log('Component mounted.')
        },
        components: {
            'particle-background': ParticleBackground

        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../sass/variables";

    #contactContainer {
        background-color: rgba(41, 43, 44, 0.85);
    }

    h1 {
        color: $yellow;
        display: inline-block;
        margin-left: 0;
        margin-right: 0;
        padding-bottom: 5px;
        position: relative;
        border-bottom: 2px solid $yellow;
    }

    input, textarea {
        background-color: black;
        color: white;
    }


    //...................
    //...................


</style>
