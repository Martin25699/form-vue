<template>
    <div class="form-group" :class="!!_errorField ? 'has-error' : 'has-success'">
        <label class="form-label" :for="_nameField" v-text="_titleField"></label>
        <slot></slot>
        <p class="form-input-hint" v-if="!!_errorField" v-text="_errorField"></p>
    </div>
</template>
<script>
    import { FORM_GET_ERROR } from './store/form.types';
    export default {
        props:['name'],
        computed: {
            _storeName(){
                return this.$parent._storeName;
            },
            _FORM_GET_ERROR() {
                return this._storeName+'/'+FORM_GET_ERROR;
            },
            _nameField() {
                return this.name;
            },
            _errorField() {
                return this.$store.getters[this._FORM_GET_ERROR](this._nameField);
            },
            _titleField() {
                return this.$attrs.title;
            },
        }
    }
</script>