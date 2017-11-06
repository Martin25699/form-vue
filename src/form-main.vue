<template>
    <form @submit.prevent="_submitForm" ref="profile">
        <slot></slot>
    </form>
</template>
<script>
    import { FORM_MAIN } from './CONSTANTS';
    export default {
        name: FORM_MAIN,
        props: {
            done:{
                type: Function,
                default: () => {}
            },
            fail:{
                type: Function,
                default: () => {}
            },
            action:{
                type: String,
                required: true,
            },
            method: {
                type: String,
                default: 'post',
            }
        },
        data(){
          return {
              errors:{},
              fields:{},
              fieldsDefault:{}
          }
        },
        methods:{
            _setErrors(errors){
                for(let name in errors)
                {
                    if(errors.hasOwnProperty(name) && this.fields.hasOwnProperty(name)){
                        this.$set(this, 'errors', {...this.errors,...{[name]:errors[name]}})
                    }
                }
            },
            _getError(name) {
                return this.errors[name] ? this.errors[name][0] : null;
            },
            _submitForm(){
                let method = this.method;
                let action = this.action;
                let data = this.fields;
                this.$http[method](action,data)
                    .then(response => {
                        this.done(response);
                    })
                    .catch(response => {
                        this._setErrors(response.errors);
                        this.fail(response);
                    });
            },
            _addField(name,value = null){
                this.fields[name] = value;
                this.fieldsDefault[name] = value;
            },
            _setField: function (name, value = null) {
                if (this.fields[name] !== undefined) {
                    if (this.errors[name] !== undefined) {
                        this.$set(this, 'errors', delete this.errors[name])
                    }
                    this.$set(this, 'fields', {...this.fields, ...{[name]: value}});
                }
            },
            _getField(name) {
                return this.fields[name] ? this.fields[name] : null;
            }
        }
    }
</script>