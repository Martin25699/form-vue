<template>
    <flat-pickr class="form-input" :disabled="_loading" v-model="_value" :config="config"></flat-pickr>
</template>
<script>
    import flatPickr from 'vue-flatpickr-component';
    import { props, beforeMount, computed, methods } from './_defaultInput';
    export default {
        props,
        data() {
            return {
                config: {
                    altFormat: 'd.m.Y',
                    altInput: true,
                    dateFormat: 'Y-m-d'
                }
            }
        },
        beforeMount,
        computed,
        methods,
        components: {
            flatPickr
        }
    };
</script>
<style lang="scss">
    @import '../node_modules/flatpickr/dist/flatpickr.css';
</style>