import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '@/views/Login'
import NotFound from '@/views/404'
import VueRouter from 'vue-router';


const routes = [
    { path: '/login', component: Login,hidden: true },
    { path: '/404', component: NotFound ,hidden: true},
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
        name: '配置中心',
        iconCls: 'el-icon-message', // 图标样式class
        children: [
          { path: '/main', component: () => import('@/views/Main.vue'), name: '主页', hidden: true },
          { path: '/conf/job', component: () => import('@/views/conf/Job.vue'), name: '任务配置' },
          { path: '/conf/group', component: () => import('@/views/conf/Group.vue'), name: '集群配置' }
        ]
      }, {
        path: '/',
        component: () => import('@/views/Home.vue'),
        name: '监控中心',
        iconCls: 'el-icon-message', // 图标样式class
        children: [
          { path: '/monitor/plan', component: () => import('@/views/monitor/Plan.vue'), name: '执行计划' },
          { path: '/monitor/node', component: () => import('@/views/monitor/Node.vue'), name: '调度集群' },
          { path: '/monitor/snapshot', component: () => import('@/views/monitor/Snapshot.vue'), name: '任务快照' }
         
        ]
      }

  ]



  export default new VueRouter({
    routes
  })