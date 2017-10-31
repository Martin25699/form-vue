<template>
    <textarea class="form-input" :disabled="_loading" v-model="_value"></textarea>
</template>
<script>
    import { props, beforeMount, computed, methods } from './_defaultInput';
    export default {
        props,
        beforeMount,
        computed,
        methods
    };
</script>