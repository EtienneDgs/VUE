<template>
    <div class="text.center">
        <div class="d-flex justify-content-center" id="register-form">
            
            <form  @submit.prevent="register">
                <br><br><br><br>
                <div>
                    <label for="name">
                        Nom : 
                    </label>
                    <input type="text" name="firstName" placeholder="Prénom" id="firstName" v-model="firstName">
                    <input type="text" name="lastName" placeholder="Nom" id="lastName" v-model="lastName">
                </div>
                <div>
                    <label for="adress">
                        Adresse : 
                    </label>
                    <input type="text" name="adress" placeholder="Adresse" id="adress" v-model="adress"><br>
                    <input type="text" name="postCode" placeholder="Code postal" id="postCode" v-model="postCode">
                    <input type="text" name="city" placeholder="Ville" id="city" v-model="city">
                </div>
                <div>
                    <label for="email">
                        Email : 
                    </label>
                    <input type="text" name="email" placeholder="email" id="email" v-model="email">
                </div>
                <div>
                    <label for="password">
                        Mot de passe : 
                    </label>
                    <input type="password" name="password" placeholder="Mot de passe" id="password" v-model="password">
                </div>
                <div>
                    <label for="password">
                        Confirmation mot de passe : 
                    </label>
                    <input type="password" name="passwordConfirmation" placeholder="Mot de passe" id="passwordConfirmation" v-model="passwordConfirmation">
                </div>
                <div>
                    <button class="btn btn-dark" type="register">Register</button>
                </div>
            </form>
            
        </div>
        <div id="error-message">
            <p>Votre compte n'a pas pu être créé.</p>
        </div>
    </div>
</template>

<script>
//import {mapActions} from 'vuex';
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
        name: '',
        firstName: '',
        lastName: '',
        adress: '',
        postCode: '',
        city: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
  }, 
  methods: {
      async register() {
        if (
        this.emailValidation(this.email) && 
        this.passwordValidation(this.password) && 
        this.passwordConfirm(this.password, this.passwordConfirmation)
        ) {
            try {
                let res = await axios.post('https://haute-loire.org/api/user', {
                    name: this.firstName + " "+ this.lastName,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    payroll: 0,
                    retailer: 0,
                    latitude: 45, //à modifier
                    longitude: 0,  // à modifier
                    address: this.adress,
                    postalCode: this.postCode,
                    city: this.city
                })

            console.log(res.data);
            console.log("compte créé avec succès");
            }
            catch (e) {
                console.log(e);
                var ta = document.querySelector("#error-message");
                ta.style.display = "block";
            }
        } else {
            console.log("pas ok")
            var t = document.querySelector("#error-message");
            t.style.display = "block";
        }

      },
      emailValidation(mail) {
        //eslint-disable-next-line
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(mail);
      },
      passwordValidation(password) {
          //eslint-disable-next-line
          let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
          return reg.test(password);
      },
      passwordConfirm(password, passwordConfirmation) {
          return password == passwordConfirmation;

      }
      
  }

}
</script>

<style scoped>
#error-message {
    display: none;
}

</style>