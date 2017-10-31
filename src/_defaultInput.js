import { FORM_UPDATE_FIELD, FORM_GET_VALUE, FORM_GET_LOADING } from './store/form.types';
export const props = ['name','value'];
export function beforeMount () {
    this.$store.commit(this._FORM_UPDATE_FIELD,{name:this._nameField, value:this.value});
}
export const computed = {
    _storeName() {
        return this.$parent._storeName;
    },
    _FORM_UPDATE_FIELD() {
        return this._storeName+'/'+FORM_UPDATE_FIELD
    },
    _FORM_GET_VALUE() {
        return this._storeName+'/'+FORM_GET_VALUE;
    },
    _FORM_GET_LOADING(){
        return this._storeName+'/'+FORM_GET_LOADING;
    },
    _loading() {
        return this.$store.getters[this._FORM_GET_LOADING];
    },
    _nameField() {
        return this.name ? this.name : this.$parent._nameField;
    },
    _value: {
        get(){
            return this.$store.getters[this._FORM_GET_VALUE](this._nameField);
        },
        set(value){
            this.$store.commit(this._FORM_UPDATE_FIELD,{name:this._nameField, value});
        }
    },
};
export const methods = {
};