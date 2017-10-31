<template>
    <input :id="_nameField" class="form-input" :disabled="_loading" type="text" v-model="_value"/>
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