<template>

    <div class="retailers-list">

        <div class="cards" style="width: 18rem">
            <ul class="list-group list-group-flush" v-for="retailer in retailers" :key="retailer.id" >
                <li class="list-group-item"> {{ retailer.storeName }}</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'RetailersList',
    props: ['retailers']
}
</script>

<style scoped>
.retailers-list {
    overflow-y : scroll;
    height: 95vh;
    
}


ul li:hover {
    background-color: darkgrey !important;

}
</style>