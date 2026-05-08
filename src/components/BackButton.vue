<template>
    <button class="backButton device" 
    :style="{'--BorderRadius': BorderRadius, '--ButtonColor': ButtonColor }"
    @click="goToPage">
        <img class="backImage" src="/images/BackButton.png" alt="BackButton"/>
    </button>
</template>

<script>
    export default{
        name: 'backButton',
        props: {
            BorderRadius: {type: String, default: "0px"},
            ButtonColor: {type: String, default: "rgba(46, 46, 146, 1.0)"}
        },
        methods: {
            goToPage(){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>

    .backButton{
        position: absolute;
        top: 20px;
        left: 20px;
        border-width: 0;
        border-radius: var(--BorderRadius);
        background-color: var(--ButtonColor);
        cursor: pointer;
        transition: 1s;
    }

    .backButton:hover{
        transform: scale(1.2);
        transition: 1s;
    }

    .backImage{
        width: 75%;
        height: 75%;
    }

    .device {
        width: 50px;
        height: 50px;
        
    }

    @media (min-width: 759px){
        .device{
            width: 75px;
            height: 75px;
        }
    }
</style>