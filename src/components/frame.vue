<template>
    <div
    :id ="id"
    :style = "{'--BGColor': bgColor, '--BorderRadius': BorderRadius, '--Margin': Margin, '--Padding': Padding}"
    class="frame">
    <slot>

    </slot>
    </div>
</template>

<script>
    export default{
        name: "frame",
        props: {
            id: {type: String, default: "frame"},
            bgColor: {type: String, default: "rgba(46, 46, 146, 1.0)"},
            BorderRadius: {type: String, default: "10px"},
            Margin: {type: String, default: "4px"},
            Padding: {type: String, default: "4px"}
        }
    }
</script>

<style>
    .frame{
        background-color: var(--BGColor);
        border-radius: var(--BorderRadius);
        padding: var(--Padding);
        margin: var(--Margin);
    }
</style>