<template>
    <label class="form-label" :for="name" v-text="label"></label>
</template>
<script>
    import { FORM_LABEL } from './CONSTANTS';
    export default {
        name: FORM_LABEL,
        props:['name','label']
    }
</script>