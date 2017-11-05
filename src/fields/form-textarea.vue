<template>
    <textarea class="form-input" v-model="_value"></textarea>
</template>
<script>
    import { computed } from './_defaultInput';
    import { FORM_TEXTAREA_FIELD } from '../CONSTANTS';
    export default {
        name: FORM_TEXTAREA_FIELD,
        props:{
            value:String|Array
        },
        computed
    };
</script>