<template>
  <div class="container">


    <div class="row">
      

      <div class="col-md-6 categories">
        <!--
        <Categories 
          v-bind:retailers="retailers"/>
       -->
      </div>
      <div class="col-md-6 map">
        <Map v-bind:retailers="retailers"/>
      </div>
 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Map from '@/components/Map.vue';


export default {
  name: 'Home',
  components: {
    //Categories,
    Map
  },
  data() {
    return {
      retailers: [],
    }
  }, 
  methods: {

  },
  mounted() {

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

