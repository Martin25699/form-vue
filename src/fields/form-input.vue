<template>
    <input class="form-input" :type="type" v-model="_value"/>
</template>
<script>
    import { computed } from './_defaultInput';
    import { FORM_INPUT_FIELD } from '../CONSTANTS';
    export default {
        name: FORM_INPUT_FIELD,
        props:{
            value:String|Array,
            type:String,
        },
        computed
    };
</script>