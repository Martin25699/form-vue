<template>
  <button class="btn btn-primary" type="submit" v-text="text" :disabled="_loading">Сохранить</button>
</template>
<script>
  import {FORM_SUBMIT} from './CONSTANTS';

  export default {
    name: FORM_SUBMIT,
    props: ['text'],
    computed: {
      _loading() {
        return this.$parent.loading;
      },
    }
  }
</script>