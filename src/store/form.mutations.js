import Vue from 'vue';
import { FORM_UPDATE_FIELD, FORM_SET_ACTION, FORM_LOADING } from './form.types';
export default {
    [FORM_UPDATE_FIELD] (state, { name, value = null }) {
        if(!state.fields.hasOwnProperty(name)) {
            state.defaults[name] = value;
        }
        Vue.set(state, 'fields', {...state.fields,...{[name]:value}})
    },
    [FORM_SET_ACTION] (state, action) {
        Vue.set(state, 'action', action)
    },
    [FORM_LOADING] (state, action) {
        Vue.set(state, 'loading', !!action)
    }
}