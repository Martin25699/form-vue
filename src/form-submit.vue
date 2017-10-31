<template>
    <button class="btn btn-primary" :disabled="_loading" type="submit" v-text="text">Сохранить</button>
</template>
<script>
    import { FORM_GET_LOADING } from './store/form.types'
    export default {
        props:['text'],
        computed:{
            _storeName(){
                return this.$parent._storeName;
            },
            _FORM_GET_LOADING(){
                return this._storeName+'/'+FORM_GET_LOADING;
            },
            _loading() {
                return this.$store.getters[this._FORM_GET_LOADING];
            }
        }
    }
</script>