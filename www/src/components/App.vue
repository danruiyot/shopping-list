
<template>
<!-- Vue.component('example-component', require('./components/App.vue').default);  -->

    <div>
<nav class="navbar navbar-expand navbar-dark bg-dark">
    <ul class="nav navbar-nav">
        <li class="nav-item active">
            <a class="nav-link" href="#">Nav 1 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Nav 2</a>
        </li>
    </ul>
</nav>

<div class="alert alert-primary alert-dismissible fade show " role="alert" id="hiden">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
    </button>
     You should check in on some of those fields below.
</div>
 
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-3 col-md-4 col-xl-3 mt-5 "  v-for="food in foods" :key="food.id">
                     <div class="card container p-3">

                         {{ food.image }}
                            <div class="card-body text-center">
                                <h5>{{ food.name }}</h5>
                            <p class="card-text">{{ food.description }}</p>
                            </div>
                            
                </div>
                </div>
                
            </div>
        </div>
           
                  
    </div>
</template>

<script>
   export default {
        data() {
            return {
                pages: [],
                message: [],
                basket: []
            }
        },
        created() {
            axios.get('http://localhost/restaurant/pages/api')
                .then(response => {
                    this.pages = response.data.products;
                });
        },
        methods: {
            myBasket(){
                axios.get('http://localhost/restaurant/pages/api')
                .then(response=>{
                    this.basket = response.data;
                });
            }
        }
    }
</script>
<style >
#hiden{
    display: none;
}
</style>
