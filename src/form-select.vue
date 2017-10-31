<template>
    <select class="form-select" :disabled="_loading" v-model="_value">
        <option v-for="row in rows" :selected="row.id == _value" :value="row.id" v-text="row.text"></option>
    </select>
</template>
<script>
    import { props, beforeMount, computed, methods } from './_defaultInput';
    export default {
        props:['rows',...props],
        beforeMount,
        computed,
        methods
    };
</script>