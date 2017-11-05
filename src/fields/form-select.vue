<template>
    <select class="form-select" v-model="_value">
        <option v-for="option in options" :selected="option.id == _value" :value="option.id" v-text="option.text"></option>
    </select>
</template>
<script>
    import { computed } from './_defaultInput';
    import { FORM_SELECT_FIELD } from '../CONSTANTS';
    export default {
        name: FORM_SELECT_FIELD,
        props:{
            value: String|Array,
            options: {
                type: Array,
                default: null
            },
        },
        computed
    };
</script>