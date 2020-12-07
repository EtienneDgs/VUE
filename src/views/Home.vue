<template>
  <div class="container">


    <div class="row">
      

      <div class="col-md-6 categories">

        <Categories 
          @mouse-over-retailer="mouseOverRetailer"
          @mouse-left-retailer="mouseLeftRetailer"
          v-bind:retailers="retailers"/>
       
      </div>
      <div class="col-md-6 map">
        <Map v-bind:retailers="retailers"/>
      </div>
 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Categories from '@/components/Categories.vue';
import Map from '@/components/Map.vue';

import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Categories,
    Map
  },
  data() {
    return {
      retailers: [],
    }
  }, 
  methods: {
    mouseOverRetailer: function (index) {
      console.log(index+"mouse over");
    },
    mouseLeftRetailer: function (index) {
      console.log(index+"mouse left");
    },
  },
  mounted() {
    axios.get('http://localhost:8000/api/retailers')
      .then(response => { this.retailers = response.data; });
  }
}
</script>

<style scoped>
* {
  width: 100%;
}
div {
  width: 100%;
}
.categories {
  background-color: "green";
  width: 100%;
}

</style>>

