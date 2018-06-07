import Vue from 'vue'
import Router from 'vue-router'

import cHome from '@/components/com-home.vue'
import cLogin from '@/components/com-login.vue'
import cUpload from '@/components/com-upload.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: cHome
    },
    {
      path: '/login',
      name: 'login',
      component: cLogin
    },
    {
      path: '/upload',
      name: 'upload',
      component: cUpload
    }
  ]
})
