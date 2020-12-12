<template>
  <div>
    <form class="form" @submit.prevent="updateProfile">
      <label>
        <textarea class="border rounded p-3" v-model="profile.firstName"></textarea>
      </label>
      <tag class="border rounded p-3">Prénoms</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.lastName"></textarea>
      </label>
      <tag class="border rounded p-3">Nom</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.email"></textarea>
      </label>
      <tag class="border rounded p-3">Mail</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.address"></textarea>
      </label>
      <tag class="border rounded p-3">Adresse</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.city"></textarea>
      </label>
      <tag class="border rounded p-3">Ville</tag>
      <p></p>
      <label>
        <textarea class="border rounded p-3" v-model="profile.postalCode"></textarea>
      </label>
      <tag class="border rounded p-3">Code postal</tag>
      <p></p>
      <button type="submit" class="border rounded p-3">Edité le profil</button>
    </form>
  </div>
</template>

<script>

import Vue from 'vue'
import axios from 'axios'
//import VueAxios from 'vue-axios'

import {mapGetters} from 'vuex';

Vue.use( axios)

export default {
  name: "UserProfile",
  data() {
    return {
      profile: ''
    }
  },

  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    }),

  },

  methods: {

    getProfile() {
      axios.get('https://haute-loire.org/api/user/' + this.user.id)
          .then((result) => {
            console.log(result);
            this.profile = result.data;
            console.log(this.profile)
          })
    },

    updateProfile() {
      axios.patch(('https://haute-loire.org/api/user/' + this.user.id), {
        'email': this.profile.email,
        'firstName': this.profile.firstName,
        'lastName': this.profile.lastName,
        'address': this.profile.address,
        'city': this.profile.city,
        'postalCode': this.profile.postalCode
      })
          .then((response) => {
            console.log(response);
          });
    }
  },

  mounted() {
    this.getProfile();
    this.updateProfile()
  }
}

</script>

<style scoped>

</style>