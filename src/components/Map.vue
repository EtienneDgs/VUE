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
          :lat-lng="getPos(retailer.latitude,retailer.longitude)"
          id="marker">
          <l-popup class="popup"
          :icon-size="iconSize"
          :icon-url="iconUrl">
            <div @click="innerClick(retailer)">
              {{retailer.name}}
              <br>
              {{ retailer.storeType }}
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
        currentZoom: 11.5,
        currentCenter: latLng(45.7462373, 4.8339948),
        showParagraph: false,
        mapOptions: {
            zoomSnap: 0.5
        },
        showMap: true,
        retailer: '',
        iconSize: [50,50],
        iconUrl: "https://www.pngfind.com/pngs/m/114-1147878_location-poi-pin-marker-position-red-map-google.png"
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
    innerClick(retailer) {
      this.$router.replace({
                    name: 'Retailer', params: {id: retailer.id, retailer: retailer}
                });
      //console.log(retailer.id);
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
  color:blue;
}
.popup {
  size:150;
  color:red;
  /*
  height: 150px;
  width: 200px;
  */
}
.leaflet-marker-icon {
  /*
  background-color: black;
  */
  size: 200%;
  height: 200%;
}

</style>