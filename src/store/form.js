import getters from './form.getters';
import mutations from './form.mutations';
import actions from './form.actions';
const form = {
    namespaced: true,
    state() {
        return {
            defaults:{},
            fields:{},
            errors: {},
            action: null,
            loading: false,
            method: 'POST'
        }
    },
    actions,
    mutations,
    getters
};

export default form