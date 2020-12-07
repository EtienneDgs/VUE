<template>
    <div style="height: 500px; width: 100%">
        

        <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        >

      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />

      <l-marker 
        v-for="retailer in retailers" 
        :key="retailer.id" 
        :lat-lng="getPos(retailer.lat,retailer.long)"
        id="marker">
        <l-popup class="popup">
          <div @click="innerClick">
            {{retailer.name}}
            <p v-show="showParagraph">
              {{retailer.description}}
            </p>
          </div>
        </l-popup>
      </l-marker>


    </l-map>
  </div>
    
</template>





<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";


    export default {
        name: "Map",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LPopup
        },
        props: ['retailers'],
    data() {
        return {
        zoom: 13,
        center: latLng(45.7462373, 4.8339948), 
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        withPopup: latLng(45.7455653,4.8355129),
        withTooltip: latLng(45.7498627,4.8263183),
        currentZoom: 11.5,
        currentCenter: latLng(45.7462373, 4.8339948),
        showParagraph: false,
        mapOptions: {
            zoomSnap: 0.5
        },
        showMap: true
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    getPos(lat, long) {
      return latLng(lat,long);
    }
  }
}
</script>


<style>
#map {
    background-color: #f3f3f3;
}
#marker {
  size: 200;
  color:red;
}
.popup {
  size:150;
  color:red;
}
</style>