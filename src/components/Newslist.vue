<template>
    <div>
        <h2><u>Top Headline Of News</u></h2>
        <table class="center" border='1px'>
            <div  v-if="!loading">
                <tr>
                    <td>Author</td>
                    <td>Title</td>   
                    <td>Details</td>
                </tr>
                <tr v-for="item in list" :key="item.publishedAt">
                    <td>{{item.author}}</td>
                    <td>{{item.title}}</td>  
                    <td>
                        <button @click="details(item)">
                            details
                        </button>
                    </td>
                </tr>
            </div>
            <div v-else>LOADDING.....</div>
        </table>  
    </div>
</template>

<script>
// import Vue from 'vue';
import axios from 'axios';


export default {
    name: 'Newslist',
    data() {
        return {
            list:null,
            loading:true
            }
    },
    components: {},
    mounted() {
        // alert('Hi');
       axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=7ac151188e4f4c658ac52213468f7037')
        .then((resp)=> {
            this.list= resp.data.articles;  
            console.log("result",resp.data.articles)
            this.loading = false;
        })
    },
    methods:{
        details(item){
            console.log("ITEM => ",item)
            this.$router.push({name:"details-news",params: { id: item.publishedAt}})
        }
    }
}
</script>

<style scoped>
    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>