<template>
    <button class="btn btn-primary" type="submit" v-text="text">Сохранить</button>
</template>
<script>
    import { FORM_SUBMIT } from './CONSTANTS';
    export default {
        name: FORM_SUBMIT,
        props:['text'],
    }
</script>