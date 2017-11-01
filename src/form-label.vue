<template>
    <label class="form-label" :for="name" v-text="title"></label>
</template>
<script>
    export default {
        props:['name','title']
    }
</script>