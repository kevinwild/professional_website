<template>
    <div class="container">
        <b-alert :variant="psData.typeMsg" id ="bAlert" :show="psData.showMsg"> {{ psData.displayMsg}}</b-alert>

    </div>
</template>

<script>
    import PublicStore from '../stores/PublicStore.js';

    export default {
        data() {
            return {
                psData: PublicStore.data
            }
        },

    }
</script>
<style lang="scss" scoped>
    @import "../../../sass/_variables.scss";

    #bAlert {
        z-index: 25;
        margin-top: 60px;
        margin-bottom: -90px;
    }

</style>
