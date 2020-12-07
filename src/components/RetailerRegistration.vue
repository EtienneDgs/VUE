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
                    <select v-model="retailerCategories">
                        <option v-for="categorie in retailerCategories" :key="categorie.val"> {{ categorie.cat }} </option>
                    </select>
                </div>
        </form>
    </div>
</template>


<script>
export default {
    name: 'RetailerRegistration',
    data(){
            return {
               previewImage: null,
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
               ]

            }
    },
    methods:{
        uploadImage(e){
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                this.previewImage = e.target.result;
                console.log(this.previewImage);
            };
        }
    }
}
</script>