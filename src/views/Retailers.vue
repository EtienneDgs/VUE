<template>
<div class="container">
    <div class="row">

        <br><br>

        <div class="col-md-6">
            <RetailersList v-bind:retailers="retailers"/>
        </div>

        <div class="col-md-6">
            <Map v-bind:retailers="retailers"/>
        </div>

    </div>
</div>
    

</template>


<script>
import Map from '@/components/Map.vue';
import RetailersList from '@/components/RetailersList.vue';
import axios from 'axios';

export default {
    name: 'Retailers',
    components: { Map, RetailersList },
    data() {
        return {
            retailers: []
        }
    },
    methods: {
    async getRetailers() {
      var res = await axios.get('https://haute-loire.org/api/retailers');
      this.retailers = res.data;
    }
    
  },
  mounted() {
    this.getRetailers()
  }
}

</script>