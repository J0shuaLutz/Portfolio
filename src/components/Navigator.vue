<template>
    <button class="Navigator" 
    :id="id"  
    :style="{'--left': x, '--top':y}"
    @click="goToSection">
        <h1 :style="{margin:0}" class="dynHeight">{{ Title }}</h1>
        <div class ="NavigatorPoints">
            <div :id="id + '-LP'" class="Point"></div>
            <div :id="id + '-RP'" class="Point"></div>
        </div>
        
    </button>
</template>
<script scoped>
    export default{
        name: "Navigator",
        data(){
          return{
            line: null
          }  
        },
        props: {
            id: {type:String, default: "Navigator"},
            Title: {type:String, default: "Title"},
            x: {type:String, default: "0px"},
            y: {type:String, default: "0px"},
            Target: {type:String, default:""}
        },
        mounted() {
            const LP = document.getElementById(this.id + "-LP");
            const RP = document.getElementById(this.id + "-RP");
            this.line = new window.LeaderLine(LP,RP, {
            color: 'white',
            size: 3,
            path: 'straight',
            startPlug: 'behind',
            endPlug: 'behind'
        });
        },
        unmounted() {
            if (this.line) {
                this.line.remove();
                this.line = null;
            }
        },
        methods: {
            goToSection() {
                if(!this.Target) return;
                const el = document.getElementById(this.Target);
                if(el) {
                    el. scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }
        }
    }
</script>

<style>
    .Navigator{
        border: 0;
        background-color: transparent;
        position: absolute;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        width: clamp(110px,20vw,375px);
        height: 6vw;
        margin-left: var(--left);
        margin-top: var(--top);
        padding:0;
        cursor: pointer;
    }

    .dynHeight{
        font-size: clamp(17px, 2.7vw, 70px);
        transition: 1s;
    }

    .dynHeight:hover{
        transform: scale(1.25);
        transition: .5s;
    }
    .NavigatorPoints{
        display: flex;
        justify-content: space-between;    
    }

    .Point{
        width: 0;
        height: 0;
    }
</style>