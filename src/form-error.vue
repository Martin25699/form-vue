<template>
    <p class="form-input-hint" v-if="!!error" v-text="error"></p>
</template>
<script>
    import { FORM_ERROR } from './CONSTANTS';
    export default {
        name: FORM_ERROR,
        props:['error']
    }
</script>