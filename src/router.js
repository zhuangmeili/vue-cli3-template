import Vue from 'vue'
import Router from 'vue-router'

const TestPage=()=>import('./views/TestPage.vue');
const HomePage=()=>import('./views/HomePage.vue');
const FormPage=()=>import('./views/FormPage.vue');
const ListPage=()=>import('./views/ListPage.vue');
const DetailPage=()=>import('./views/DetailPage.vue');
const UploadPage=()=>import('./views/UploadPage.vue');


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/', name: '', component: HomePage},
    {path: '/test', name: 'test', component: TestPage},
    {path: '/form', name: 'form', component: FormPage},
    {path: '/list', name: 'list', component: ListPage},
    {path: '/detail', name: 'detail', component: DetailPage},
    {path: '/upload', name: 'upload', component: UploadPage},
  ]
})
