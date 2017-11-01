import formMain from './form-main.vue';

import formGroup from './form-group.vue';

import formInput from './form-input.vue';
import formInputDate from './form-input-date.vue';
import formSelect from './form-select.vue';
import formTextarea from './form-textarea.vue';

import formSubmit from './form-submit.vue';

export function install (Vue, options) {
        if (install.installed) return;
        install.installed = true;

        Vue.component(formMain.name, formMain);
        Vue.component('form-group', formGroup);
        Vue.component('form-input', formInput);
        Vue.component('form-input-date', formInputDate);
        Vue.component('form-textarea', formTextarea);
        Vue.component('form-select', formSelect);
        Vue.component('form-submit', formSubmit);
};
export default { install }