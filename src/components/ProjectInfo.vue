<template>
    <div
    :id="id"
    :style = "{'--BorderRadius': BorderRadius, '--BackColor': BackColor}"
    class="ProjectInfo device"
    :class="{ expanded: isExpanded}"
    @click="toggle">
        <img class="Image" :src="Image" alt="InfoImage" :style = "{'--BorderRadius': BorderRadius}"/>
        <div class="InfoText">
            <slot>
            </slot>
            <div class="Spacer">
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        props: {
            id: {type: String, default: "item"},
            Image: {type: String, default: "/images/Projects/InfoPanel-Basic.jpg"},
            BackColor: {type: String, default: "rgba(46, 46, 146, 1.0)"},
            BorderRadius: {type: String, default: "0px"},
            isExpanded: {type: Boolean, default: false}
        }, 
        methods: {
            toggle() {
                this.$emit('toggle', this.id);
            }
        }
    }
</script>

<style scoped>

    .ProjectInfo{
        display: grid;
        border-radius: var(--BorderRadius);
        background-color: var(--BackColor);
        overflow: hidden;
        padding:0;
        margin: 20px;
        cursor: pointer;
        transition: 1s;
    }

    .Image{
        border-top-left-radius: var(--BorderRadius);
        border-top-right-radius: var(--BorderRadius);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .device{
        grid-template-rows: 1fr 1fr;
        min-width: 300px;
        min-height: 300px;
        max-width: 300px;
        max-height: 300px;
        transition: 1s;
    }

    .device.expanded {
            grid-template-rows: 2.25fr 1fr;
            min-width: 90vw;
            min-height: 90vw;
            max-width: 90vw;
            max-height: 180vw;
            transition: 1s;
            scroll-snap-align: center;
        }

    .InfoText{
        height: 100%;
        padding: 10px;
        padding-bottom: 20px;
        overflow-y: auto;
    }

    @media (min-width: 759px) {
        .device {
            grid-template-rows: 1fr 1fr;
            min-width: 600px;
            min-height: 600px;
            max-width: 600px;
            max-height: 600px;
            transition: 1s;
        }

        .device.expanded {
            grid-template-rows: 3fr 1fr;
            min-width: 90vh;
            min-height: 90vh;
            max-width: 90vh;
            max-height: 90vh;
            transition: 1s;
            scroll-snap-align: center;
        }
    }
</style>