<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-center" id="dashboard-menu">
            <h2>menu utilisateur</h2>
            <div class="text-left">
              <ul>
                 <li v-on:click="updateAccountMenu">
                  <a href="#"><i class="" ></i>Modifier mon compte utilisateur</a>
                </li>
                <li v-on:click="retailerRegisterMenu">
                  <a href="#"><i class="" ></i>Editer un compte commerçant</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Solde Ethicoins</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Supprimer mon compte</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 text-center" id="dashboard">
            <h2>on affiche ici les informations du menu</h2>
            <RetailerRegistration v-if="displayRetailerRegistration"/>
            <UpdateAccount v-if="displayUpdateAccount"/>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
import RetailerRegistration from '@/components/RetailerRegistration.vue';
import UpdateAccount from '@/components/UpdateAccount.vue';

export default {
  name: 'Dashboard',

  components: { RetailerRegistration, UpdateAccount },

  data() {
    return {
      displayUpdateAccount: true,
      displayRetailerRegistration: false,
      displayPayroll: false
    }
  },
  methods: {
    updateAccountMenu() {
      this.displayUpdateAccount = true;
      this.displayRetailerRegistration = false;
      this.displayPayroll = false;

    },
    retailerRegisterMenu() {
      this.displayUpdateAccount = false;
      this.displayRetailerRegistration = true;
      this.displayPayroll = false;

    }
  }
}

</script>