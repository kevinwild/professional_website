<template>
    <div class="background bg-img">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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

    .background {
        background: $bg-black;
    }

    $particleSize: 20vmin;
    $animationDuration: 6s;
    $amount: 20;
    .background span {
        width: $particleSize;
        height: $particleSize;
        border-radius: $particleSize;
        backface-visibility: hidden;
        position: absolute;
        animation-name: move;
        animation-duration: $animationDuration;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        $colors: (
                rgba(253, 255, 94, 0.69),
                rgba(242, 221, 105, 0.68),
                rgba(253, 255, 94, 0.4),
                rgba(242, 221, 105, 0.50)
        );
        @for $i from 1 through $amount {
            &:nth-child(#{$i}) {
                color: nth($colors, random(length($colors)));
                top: random(100) * 1%;
                left: random(100) * 1%;
                animation-duration: (random($animationDuration * 10) / 10) * 1s + 20s;
                animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
                transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
                $blurRadius: (random() + 0.5) * $particleSize * 0.5;
                $x: if(random() > 0.5, -1, 1);
                box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
            }
        }
    }

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 3px) rotate(360deg);
        }
    }
</style>
