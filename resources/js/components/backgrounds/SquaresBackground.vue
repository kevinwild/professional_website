<template>
    <div class="area">
        <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

        </ul>

    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../sass/_variables.scss";

    body {
        font-family: 'Exo', sans-serif;
    }

    .area {
        left: 0px;
        top: 0px;
        position: fixed;
        z-index: -1;
        background: repeating-linear-gradient(
                        45deg,
                        $grey1,
                        $grey2 10px,
                        $grey1 10px,
                        $grey2 20px
        );
        width: 100%;
        height: 100vh;


    }

    .circles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0.25;

    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        //background: rgba(255, 255, 255, 0.2);
        background: $blue;
        animation: animate 15s linear infinite;
        bottom: -150px;

    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }


    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 15s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 10px;
        height: 10px;
        animation-delay: 0s;
        animation-duration: 30s;
    }
    .circles li:nth-child(11) {
        left: 90%;
        width: 75px;
        height: 75px;
        animation-delay: 2s;
        animation-duration: 18s;
    }
    .circles li:nth-child(12) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 3s;
        animation-duration: 20s;
    }
    .circles li:nth-child(13) {
        left: 25%;
        width: 100px;
        height: 100px;
        animation-delay: 8s;
        animation-duration: 11s;
    }
    .circles li:nth-child(14) {
        left: 63%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 13s;
    }
    .circles li:nth-child(15) {
        left: 1%;
        width: 80px;
        height: 80px;
        animation-delay: 7s;
        animation-duration: 11s;
    }


    @keyframes animate {

        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }

    }
</style>
