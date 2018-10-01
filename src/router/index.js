import Vue from 'vue'
import Router from 'vue-router'
import ShufflePicture from '@/components/ShufflePicture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShufflePicture',
      component: ShufflePicture
    }
  ]
})
