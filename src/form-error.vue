<template>
    <p class="form-input-hint" v-if="!!error" v-text="error"></p>
</template>
<script>
    export default {
        props:['error']
    }
</script>