<template>
    <form @submit.prevent="submit" ref="profile">
        <slot></slot>
    </form>
</template>
<script>
    import form from './store/form';
    import { FORM_SET_ACTION, FORM_GET_FIELDS, FORM_LOADING } from './store/form.types'
    export default {
        name: 'form-main',
        props: {
            done:{
                type: Function,
                default: () => {}
            },
            storeName:{
                type: String,
                default: 'form'
            },
            action:{
                type: String,
                required: true,
            },
            method: {
                type: String,
                default: 'post',
            }},
        computed:{
            _storeName(){
              return this.storeName;
            },
            _FORM_SET_ACTION(){
              return this.storeName+'/'+FORM_SET_ACTION;
            },
            _FORM_GET_FIELDS(){
              return this.storeName+'/'+FORM_GET_FIELDS;
            },
            _FORM_LOADING(){
              return this.storeName+'/'+FORM_LOADING;
            },
            _FIELDS(){
                return this.$store.getters[this._FORM_GET_FIELDS];
            }
        },
        methods: {
            submit(){
                let method = this.method;
                let action = this.action;
                let data = this._FIELDS;
                this.$store.commit(this._FORM_LOADING, true);
                this.$http[method](action,data)
                    .then(response => {
                        this.$store.commit(this._FORM_LOADING, false);
                        console.log(response);
                        this.done();
                    })
                    .catch(response => {
                        this.$store.commit(this._FORM_LOADING, false);
                        console.log(response);
                    });
            }
        },
        beforeMount() {
            if(!this.$store.state.forms){
                this.$store.registerModule(['forms'],{});
            }
            if(!this.$store.state.forms[this._storeName]){
                this.$store.registerModule(['forms',this._storeName],form);
            }
            this.$store.commit(this._FORM_SET_ACTION, this.action)
        }
    }
</script>