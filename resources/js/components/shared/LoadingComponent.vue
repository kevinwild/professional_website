<template>
    <div class="darkenScreen" v-if="psData.showLoader">
        <div class="center" id="loaderBox">
            <b-spinner class="aboveTheDark" id="blue" variant type="grow" label="Loading..."></b-spinner>
            <b-spinner class="aboveTheDark" id="purple" variant type="grow" label="Loading..."></b-spinner>
            <b-spinner class="aboveTheDark" id="orange" variant type="grow" label="Loading..."></b-spinner>
            <b-spinner class="aboveTheDark" id="green" variant type="grow" label="Loading..."></b-spinner>
            <b-spinner class="aboveTheDark" id="yellow" variant type="grow" label="Loading..."></b-spinner>
        </div>

    </div>
</template>

<script>
    import PublicStore from '../stores/PublicStore.js';

    export default {
        mounted() {
            console.log('Projects Component mounted. ')
        },
        data() {
            return {
                psData: PublicStore.data
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../../sass/_variables.scss";

    .darkenScreen {
        opacity:    0.85;
        background: #000;
        width:      100%;
        height:     100%;
        z-index:    998;
        top:        0;
        left:       0;
        position:   fixed;
    }
    .aboveTheDark {
        z-index: 999;
    }
    #blue {
        color: $blue;
    }
    #purple {
        color: $purple;
    }
    #orange {
        color: $orange;
    }
    #green {
        color: $green;
    }
    #yellow {
        color: $yellow;
    }
</style>
