<template>
    <div>
        <h1>Detail Of Headline</h1>
    </div>
    <div v-if="!loading">
    <div v-for="item in list" v-bind:key="item.id">
        <h2>{{item.title}}</h2>
        <h3>{{item.author}}</h3>
        <h3>{{item.description}}</h3><br/><br/><hr />
    </div>
    </div>
    <div v-else>LOADDING.....</div>
</template>

<script>
import axios from 'axios'
// import {useRoute} from 'vue-router';

    export default {
        props:{
            id:[Number,String,Date],
        },
        name: 'Detail',
        data() {
            return {
                list:'',
                loading:true,

            }
        },
        mounted(){
            console.log("id => ",this.id)
        },
        methods: {
            async getData() {
                let newId = this.$route.params.id;
                let resp = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7ac151188e4f4c658ac52213468f7037' + newId)
                this.list = resp.data.articles
                console.log(this.list)
            }
        },
        created()
        {
            this.getData();
        }
    }
</script>

<style scoped>

</style>