<template>
        <div class='row'>
        <div class='col-md-4 businesscard' v-for="(business, index) in ydata">
           <div class="card h-100">
            <img class="card-img-top" :src="business.image_url" alt="card image collar">
            <div class="card-body">
              <div><h4 class="card-title">{{business.name}} <slan class='pull-right'>  <button v-on:click="addProductToCart(product)" class="btn btn-primary">Add To Cart</button></slan></h4></div>
              <p class="card-text">Place {{index}}</p>
            </div>
          </div>           
    </div>
    </div>
</template>
<script>
    export default {
        props: ['ydata']
    }
</script>
<style scoped>
    /* resize images */
    
    .businesscard {
        /*margin: 3px 3px 20px 3px;*/
        margin-top: 5px;
        margin-bottom: 20px;
        min-height: 300px;
        overflow: auto;
    }
    
    img {
        width: 100%;
        height: 200px;
    }
    
    .btn {
        border-radius: 8px;
    }
</style>