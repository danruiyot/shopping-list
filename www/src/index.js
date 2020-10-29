window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = require('vue');
// import VueRouter from 'vue-router'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    data(){
        return {
            pages:[]
        }
    },
    mounted() {
        axios.get('http://localhost/wordpress/wp-json/wp/v2/posts?order=asc')
        .then(function (response) {
            // handle success
            let det = JSON.stringify(response.data);
            // alert(det);
            console.log(response.data);
            this.pages = response.data
        })
    },
});