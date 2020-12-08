<template>
    <div>
        <h4>Affiche formulaire inscription commerçant </h4>
        <form  @submit.prevent="registerAsRetailer">
                <br><br><br><br>
                <div>
                    <label for="nameRetailer">
                        Nom : 
                    </label>
                    <input type="text" name="nameRetailer" placeholder="Nom de votre magasin" id="nameRetailer" v-model="nameRetailer">
                </div>
                <div>
                    <label for="description">
                        Description : 
                    </label>
                    <input type="text" name="description" placeholder="description" id="description" v-model="description">
                </div>
                <div>
                    <label for="Image">
                        Image : 
                    </label>
                    <img :src="previewImage" class="uploading-image" />
                    <input type="file" accept="image/jpeg" @change=uploadImage>
                </div>
                <div>
                    <select v-model="selected">
                        <option v-for="categorie in retailerCategories" :key="categorie.val"> {{ categorie.cat }} </option>
                        <p>{{ selected }}</p>
                    </select>
                </div>
                <br>
                <div>
                    <button class="btn btn-dark" type="registerRetailer">Create a retailer account</button>
                    
                </div>
        </form>
        <div class="affiche" v-bind:obj="getImg()">
            test affichage
            {{ getImg() }}
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    name: 'RetailerRegistration',
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    data(){
            return {
               previewImage: null,
               image: null,
               encodedImage: '  ',
               nameRetailer: '',
               description: '',
               retailerCategories : [
                   {
                   'val':1,
                   'cat': 'boulangerie'
                    },
                    {
                   'val':2,
                   'cat': 'epitecrie'
                    }
               ],
               imgTest: null,
               cat: '', 
               selected: ''

            }
    },
    methods:{
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.previewImage = e.target.result;
                //console.log(image);
                console.log(this.previewImage);
                this.image = image;
                this.encodedImage = btoa(image);
            };
        },
        async registerAsRetailer() {
            console.log(this.nameRetailer);
            console.log(this.description);
            console.log(this.image);
            console.log(this.encodedImage);

            var formData = new FormData();
            formData.set('image', this.image);
            
            const res = await axios.put('https://haute-loire.org/api/user/'+this.user.id, {
                pictures: formData,
                storeName: this.nameRetailer,
                storeType: this.selected,
                storeDescription: this.description
            });

            console.log(res);
        },
        async getImg() { // à supprimer, c'était pour tester l'affichage de l'image
            const res = await axios.get('https://haute-loire.org/api/user/'+this.user.id);
            console.log(res.data);
            return this.user.id;
        }
    }
}
</script>