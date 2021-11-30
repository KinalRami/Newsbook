import {createWebHistory, createRouter} from 'vue-router';
import Documentation from './components/Documentation.vue';
import Headline from './components/Headline.vue';
import Newslist from './components/Newslist.vue';
import Detail from './components/Detail.vue'


const routes=[
  
    {
        name: 'Newslist',
        path: '/',
        component: Newslist
    },
    {
        name: 'Documentation',
        path: '/allnews',
        component: Documentation
    },
    {
        name: 'Headline',
        path: '/headline',
        component: Headline
    },
    {
        name: 'details-news',
        path: '/detail/:id',
        component: Detail
    }
       
];

const router=createRouter({
    // Provide the history implementation to use. We are using the history instead of hash for simplicity here.
    history:createWebHistory(),
    routes
});

export default router;