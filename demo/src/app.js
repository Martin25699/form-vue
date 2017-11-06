import Vue from 'vue'
import App from './App.vue'
import formVue from 'form-vue';

Vue.use(formVue);

function randomInteger(min = 0, max = 2) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

//DEMO HTTP Client
let HTTPClien = {
    post:(url,data) => {
        return new Promise((resolve,reject) => {
            if(randomInteger() !== 0){
                let response = {
                    message: 'ok'
                };
                resolve(response)
            } else {
                let response = {
                    message: 'fail',
                    errors: {
                        name:['Some error'],
                        birthday:['Some error']
                    }
                };
                reject(response);
            }
        })
    }
};

//Need $http method in Vue
Vue.prototype.$http = HTTPClien;

new Vue({
    el: '#app',
    render: h => h(App)
});