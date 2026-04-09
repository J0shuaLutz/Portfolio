<template>
    <div
    :id="id">
        <h2 class="highlight4">{{ Title }}</h2>
        <frame :bgColor=bgColor :BorderRadius="0">
            <div class="ScrollWrap">
                <slot class="ScrollList" >
                </slot>
            </div>
        </frame>
    </div>
</template>

<script>
  import item from '../components/Item.vue'
  import frame from '../components/frame.vue'

  export default {
    name: 'itemlist',
    components: {
        frame,
        item
    },
    props: {
        id: {type: String, default: "itemlist"},
        bgColor: {type: String, default: "rgba(46, 46, 146, 1.0)"},
        Title: {type: String, default: "Title"}
    }
  }
</script>

<style>

    .ScrollWrap{
        display: flex;
        align-items: center;
        justify-content: start;
        width: max-content;
        max-width: 100%;
        overflow-x: auto;
        margin-left:auto;
        margin-right:auto;
    }

    .ScrollList{
        display: flex;
        column-gap: 10px;
        object-fit: fill;
    }
</style>