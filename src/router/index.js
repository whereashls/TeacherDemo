import Vue from 'vue'
import Router from 'vue-router'
import index  from "../views/index/index"; // 页面整体布局

Vue.use(Router)


const whiteList = [
	'/'
];

//默认不需要权限的页面
export const constantRouterMap = [
	{
		path: '/',  
		name:'index',
        component: index
    },
	{ path: '/login',name: 'login',component:() => import('@/views/login'),hidden: true},
	{ path: '/404', component: () => import('@/views/errorPage/404'), hidden: true },
  { path: '/401', component: () => import('@/views/errorPage/401'), hidden: true },
	
	
]

	//注册路由
export default new Router({
	mode:'history', // 默认为'hash'模式
	routes: constantRouterMap
})