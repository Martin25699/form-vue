import { FORM_GET_ERROR, FORM_GET_VALUE, FORM_GET_FIELDS, FORM_GET_LOADING } from './form.types';
export default {
    [FORM_GET_ERROR]:(state, getters) => (name) => {
        return state.errors[name] ? state.errors[name][0] : null;
    },
    [FORM_GET_VALUE]:(state, getters) => (name) => {
        return state.fields[name] ? state.fields[name] : null;
    },
    [FORM_GET_FIELDS] (state) {
        return state.fields;
    },
    [FORM_GET_LOADING] (state) {
        return state.loading;
    }
}