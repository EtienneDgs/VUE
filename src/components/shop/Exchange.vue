<template>
  <div id="Exchange">
    <div id="corpse">


        <template v-if="authenticated">  
                     
            <p>
                    Give 
                    <input
                    id="numberToken"
                    v-model="numberToken"
                    type="int"
                    name="cardmonth"
                    > tokens to
                    <input
                    id="userId"
                    v-model="receiverId"
                    type="int"
                    name="userId"
                    >
            </p>
            <button v-on:click="exchangeCoin(userId, receiverId, numberToken)">Pay</button>
                                                    
        </template>
      
        
        

    </div>
    <router-view/>
  </div>
</template>



<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Exchange',
  components: {
  },
  props: [
    "userId"
  ],
  data() {
    return {
        receiverId: null,
        numberToken: null
    }
  },
  computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
  },
  methods:{
        exchangeCoin(userId, receiverId, numberToken){
            console.log(userId);
            console.log(receiverId);
            console.log(numberToken);
            var axios = require('axios');
            var data = JSON.stringify({"id_donor":userId,"id_receiver":receiverId,"amount":numberToken});

            var config = {
            method: 'post',
            url: 'https://haute-loire.org/api/transaction',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
  }
}
</script>



<style>
#Exchange{
    background-color: lightgrey;
}
</style>
