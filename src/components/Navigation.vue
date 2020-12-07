<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
          <div class="container-fluid">
            <router-link :to="{name: 'Home'}"><img src="img/Logo.png" alt="Logo"></router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav mr-auto">
                    <li>
                        <router-link :to="{name: 'Home'}">Home</router-link>
                    </li>
                    
                    <template v-if="authenticated">  
                        <li id="hello-name">
                            Hello, {{user.name}}
                        </li>
                        <li>
                            <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
                        </li>
                        
                        <li>
                            <a href="#" @click.prevent="signout">Signout</a>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <router-link :to="{name: 'Signin'}">Signin</router-link>
                        </li>
                    </template>

                </ul>   
            
            </div>
          </div>

        </nav> <!-- FIN NAVBAR-->
        
        {{ user }}
        {{ authenticated }}
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Navigation',
    
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    methods: {
        ...mapActions({
            signoutAction: 'auth/signout' //signoutAction = action du STORE
        }),
        signout() { //méthode appelée par la fonction 
            this.signoutAction().then(() => {
                this.$router.replace({
                    name: 'Home'
                })
            })
        }
    }


}
</script>

<style scoped>
#hello-name {
    color: white;
}

</style>