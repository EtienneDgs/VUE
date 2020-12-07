<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 text-center" id="dashboard-menu">
            <h2>menu utilisateur</h2>
            <div class="text-left">
              <ul>
                 <li>
                  <a href="#"><i class=""></i>Mes informations de compte</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Acheter des BordierCoins</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Faire un virement à un commerçant</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Créer un compte commerçant</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Se déconnecter</a>
                </li>
                <li>
                  <a href="#"><i class=""></i>Supprimer mon compte</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 text-center" id="dashboard">
            <h2>informations</h2>
            <RetailerRegistration />
          </div>
        </div>
      </div>
    </div>
</template>

<script>

import RetailerRegistration from '../components/RetailerRegistration.vue';

export default {
  name: 'Dashboard',
  components: { RetailerRegistration },
  data() {
    return {
      
    }
  }
}
</script>