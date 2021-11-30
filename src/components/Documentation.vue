<template>
    <div>
        <h2><u>All Covered News</u></h2><hr/><hr/>
    </div>
    <div v-if="!loading">
    <div v-for="item in list" v-bind:key="item.id">
        <h2>{{item.title}}</h2>
        <h3>{{item.content}}</h3>
        <h3>{{item.description}}</h3><br/><br/><hr />
    </div>
    </div>
    <div v-else>LOADDING.....</div>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'Documentation',
        data() {
            return {
                list:null,
                loading: true
                }
        },
        mounted() {
        // alert('Hi');
       axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-10-30&sortBy=publishedAt&apiKey=7ac151188e4f4c658ac52213468f7037')
        .then((resp)=> {
            this.list= resp.data.articles;  
            console.log("result",resp.data.articles)
            this.loading = false;
        })
    }
    }
</script>

<style scoped>

</style>