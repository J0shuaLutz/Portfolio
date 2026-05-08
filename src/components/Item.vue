<template>
    <div
    :id ="id"
    :style = "{'--Image': `url(${Image})`, '--BorderRadius': BorderRadius, '--ButtonColor': ButtonColor}"
    class="item device">
        <h2 class="leftText white"> {{Title}} </h2>
        <h4 class="highlight"> {{ ProjectStyle }}</h4>
        <h4> {{Description}} </h4>
        <button class="itemButton" @click="goToPage"> 
            <h4 class="white"> view more </h4>
        </button>
    </div>
</template>

<script>
    export default{
        name: "item",
        props: {
            id: {type: String, default: "item"},
            Image: {type: String, default: "/images/Projects/Basic_SoS.jpg"},
            BorderRadius: {type: String, default: "0px"},
            ButtonColor: {type: String, default: "rgba(46, 46, 146, 1.0)"},

            Title: {type:String, default: "Title"},
            Description: {type:String, default: "Description"},
            ProjectStyle: {type:String, default: "StudentProject"},
            Path: {type:String, default: ""}
        },
        methods: {
            goToPage() {
                this.$router.push(this.Path);
            }
        }
    };
</script>

<style scoped>
    .item{
        background-image: var(--Image);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: var(--BorderRadius);
        margin: 20px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex-grow: 0;
        flex-shrink: 1;
        transition: 1s;
    }

    .device{
        min-width: 200px;
        max-width: 200px;
        min-height: 200px;
        max-height: 200px;
    }

    .item:hover{
        transform: scale(1.1);
        transition: .5s;
    }

    .itemButton{
        width: 100%;
        border-width: 0;
        border-radius: var(--BorderRadius);
        background-color: var(--ButtonColor);
        margin-top: auto;
        margin-bottom: 0px;
        cursor: pointer;
    }
    
    @media (min-width: 759px) {
        .device{
            min-width: 300px;
            max-width: 300px;
            min-height: 300px;
            max-height: 300px;
        }
    }

    
</style>