<template>
    <div
    :id="id"
    :style = "{'--BorderRadius': BorderRadius, '--BackColor': BackColor}"
    class="ProjectInfo device">
        <img class="Image" :src="Image" alt="InfoImage" :style = "{'--BorderRadius': BorderRadius}"/>
        <div class="InfoText">
            <slot>

            </slot>
        </div>
    </div>

</template>

<script>
    export default{
        props: {
            id: {type: String, default: "item"},
            Image: {type: String, default: "/images/Projects/InfoPanel-Basic.jpg"},
            BackColor: {type: String, default: "rgba(46, 46, 146, 1.0)"},
            BorderRadius: {type: String, default: "0px"}
        }
    }
</script>

<style scoped>

    .ProjectInfo{
        display: grid;
        grid-template-rows: 1fr 1fr;
        border-radius: var(--BorderRadius);
        background-color: var(--BackColor);
        overflow: hidden;
        padding:0;
        margin: 20px;
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
        min-width: 300px;
        min-height: 300px;
        max-width: 300px;
        max-height: 300px;
    }

    .InfoText{
        padding: 2%;
        height: 100%;
        overflow-y: auto;
    }

    @media (min-width: 759px) {
        .device {
            min-width: 600px;
            min-height: 600px;
            max-width: 600px;
            max-height: 600px;
        }
    }
</style>