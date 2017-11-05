<template>
    <component :is="_componentName"  v-model="_value" :type="type" :options="_optionsField"></component>
</template>
<script>
    import { FORM_INPUT_FIELD, FORM_SELECT_FIELD, SELECT_TYPE, FORM_DATE_FIELD, DATE_TYPE, TEXTAREA_TYPE, FORM_TEXTAREA_FIELD, FORM_FIELD } from './CONSTANTS';
    export default {
        name: FORM_FIELD,
        props:{
            value: String|Array,
            options: {
                type: Array,
                default: null
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        computed:{
            _componentName(){
                switch (this.type){
                    case TEXTAREA_TYPE:
                        return FORM_TEXTAREA_FIELD;
                    case DATE_TYPE:
                        return FORM_DATE_FIELD;
                    case SELECT_TYPE:
                        return FORM_SELECT_FIELD;
                    default:
                        return FORM_INPUT_FIELD;
                }
            },
            _optionsField() {
                return this.options;
            },
            _value: {
                get(){
                    return this.value;
                },
                set(value){
                    this.$emit('input', value)
                }
            },
        }
    }
</script>