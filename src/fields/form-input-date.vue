<template>
    <flat-pickr class="form-input" v-model="_value" :config="config"></flat-pickr>
</template>
<script>
    import flatPickr from 'vue-flatpickr-component';
    import { computed } from './_defaultInput';
    import { FORM_DATE_FIELD } from '../CONSTANTS';
    export default {
        name: FORM_DATE_FIELD,
        props:{
            value:String|Array
        },
        data() {
            return {
                config: {
                    altFormat: 'd.m.Y',
                    altInput: true,
                    dateFormat: 'Y-m-d'
                }
            }
        },
        computed,
        components: {
            flatPickr
        }
    };
</script>
<style lang="scss">
    @import '../../node_modules/flatpickr/dist/flatpickr.css';
</style>