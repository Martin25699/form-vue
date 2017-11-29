<template>
  <div class="form-items">
    <label class="form-checkbox" v-for="o in options">
      <input :type="type" :value="o.id" v-model="_value" :name="name"> {{o.text}}
    </label>
  </div>
</template>

<script>
  import {computed} from './_defaultInput';
  import {FORM_RADIO_FIELD} from '../CONSTANTS';

  export default {
    name: FORM_RADIO_FIELD,
    props: {
      name: String,
      type: String,
      value: String | Array,
      options: {
        type: Array,
        default: null
      },
    },
    computed
  }
</script>
<style>

</style>