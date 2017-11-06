# form-vue

> Vue Form constructor

## Build Setup

### install
``` bash
npm i form-vue --save
```
### How to

in app.js

```javascript
import Vue from 'vue'
import axios from 'axios';
import formVue from 'form-vue';

Vue.use(formVue);

//For send requests
Vue.prototype.$http = axios || 'other';
```

#### Submit Form Method
```javascript
this.$http[method](action,data)
    .then(response => {
        this.done(response);
    })
    .catch(response => {
        this._setErrors(response.errors);
        this.fail(response);
    });
```


### Example
```vue
<form-main action="/" method="post" :done="FormDone" :fail="FormFail">
    <form-group name="key" :value="key" type="hidden"></form-group>
    <form-group name="name" :value="name" label="Name"></form-group>
    <form-group name="year" :value="year" type="select" :options="yearsRows" label="Year"></form-group>
    <form-group name="birthday" :value="birthday" type="date" label="Birthday"></form-group>
    <form-group name="desc" :value="desc" type="textarea" label="Description"></form-group>
    <form-submit text="Send Fail"></form-submit>
</form-main>
```


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
