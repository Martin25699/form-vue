<template>
    <textarea class="form-input" v-model="_value"></textarea>
</template>
<script>
    import { computed } from './_defaultInput';
    import { FORM_SELECT_FIELD } from '../CONSTANTS';
    export default {
        name: FORM_SELECT_FIELD,
        props:{
            value:String|Array
        },
        computed
    };
</script>