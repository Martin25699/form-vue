export default {
    install(Vue) {
        Vue.component('form-main', require('./form-main.vue'));
        Vue.component('form-group', require('./form-group.vue'));
        Vue.component('form-input', require('./form-input.vue'));
        Vue.component('form-input-date', require('./form-input-date.vue'));
        Vue.component('form-textarea', require('./form-textarea.vue'));
        Vue.component('form-select', require('./form-select.vue'));
        Vue.component('form-submit', require('./form-submit.vue'));
    }
};