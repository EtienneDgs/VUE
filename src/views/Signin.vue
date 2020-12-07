<template>
    <div class="text.center">
        <div class="d-flex justify-content-center" id="signin-form">
            
            <form  @submit.prevent="submit">
                <br><br><br><br>
                {{email}}
                {{password}}

                <div>
                    <label for="email">
                        Email
                    </label>
                    <input type="text" name="email" id="email" v-model="email">
                </div>
                <div>
                    <label for="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" v-model="password">
                </div>
                <div>
                    <button class="btn btn-dark" type="submit">Sign in</button>
                </div>
            </form>
            <router-link :to="{name: 'Register'}">Créer un compte ici</router-link>
        </div>

    </div>
</template>

<script>
import {mapActions} from 'vuex';
//import axios from 'axios';

export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
    }
  },


  methods: {
      ...mapActions({
            signin: 'auth/signin'
        }),
        submit() {
            console.log("submitted");
            console.log(this.email);
            
            this.signin([this.email, this.password]).then(() => { //si login, on redirige vers dashboard
                this.$router.replace({
                    name: 'Dashboard'
                }).catch(() => {
                    console.log('login failed'); //ou bien afficher un message d'erreur dans la page HTML
                });
            })
            /*
            let res = await axios.post('http://localhost:8000/api/auth/signin', {
                'email': this.email,
                'password': this.password
            });
            console.log(res.data);
            */

        }
  }
}
</script>

<style scoped>


</style>