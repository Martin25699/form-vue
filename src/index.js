import formMain from './form-main.vue';

import formGroup from './form-group.vue';
import formLabel from './form-label.vue';
import formError from './form-error.vue';

import formField from './form-field.vue';

import formInput from './fields/form-input.vue';
import formInputDate from './fields/form-input-date.vue';
import formSelect from './fields/form-select.vue';
import formCheckbox from './fields/form-radio.vue';
import formTextarea from './fields/form-textarea.vue';

import formSubmit from './form-submit.vue';

export function install (Vue, options) {
        if (install.installed) return;
        install.installed = true;

        Vue.component(formMain.name, formMain);
        Vue.component(formField.name, formField);
        Vue.component(formGroup.name, formGroup);
        Vue.component(formError.name, formError);
        Vue.component(formLabel.name, formLabel);
        Vue.component(formInput.name, formInput);
        Vue.component(formInputDate.name, formInputDate);
        Vue.component(formTextarea.name, formTextarea);
        Vue.component(formSelect.name, formSelect);
        Vue.component(formCheckbox.name, formCheckbox);
        Vue.component(formSubmit.name, formSubmit);
}
export default { install }