<template>
    <div class="form-group" :class="{'has-error':!!_errorField}">
        <form-label :name="_nameField" :label="_labelField" v-if="_showLabel"></form-label>
        <form-field v-model="_valueField" :type="_typeField" :options="_optionsField" :disabled="_loading"></form-field>
        <form-error :error="_errorField" v-if="_showError"></form-error>
    </div>
</template>
<script>
    import { FORM_GROUP } from './CONSTANTS';
    export default {
        name: FORM_GROUP,
        props:{
            name: String,
            label: String,
            value: String|Array,
            options: {
                type: Array,
                default: null
            },
            type: {
                type: String,
                default: 'text'
            },
        },
        computed: {
            _loading(){
              return this.$parent.loading;
            },
            _typeField() {
                return this.type;
            },
            _labelField() {
                return this.label;
            },
            _nameField() {
                return this.name;
            },
            _optionsField() {
                return this.options;
            },
            _valueField: {
                get(){
                    return this.$parent._getField(this._nameField);
                },
                set(value){
                    this.$parent._setField(this._nameField,value);
                }
            },
            _errorField() {
                return this.$parent._getError(this._nameField);
            },
            _showLabel(){
                return !(this._typeField === 'hidden' || !this._labelField);
            },
            _showError(){
                return !(this._typeField === 'hidden' || !this._errorField);
            }
        },
        beforeMount(){
            this.$parent._addField(this.name, this.value);
        }
    }
</script>