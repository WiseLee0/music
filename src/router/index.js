import Vue from 'vue'
import Router from 'vue-router'

const Recommend = (resolve) => {
  import('components/recommend/index').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('components/rank/index').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('components/search/index').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('components/singer/index').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('components/singer-detail/index').then((module) => {
    resolve(module)
  })
}

const Disc = (resolve) => {
  import('components/disc/index').then((module) => {
    resolve(module)
  })
}

const TopList = (resolve) => {
  import('components/top-list/index').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/Recommend'
  }, {
    path: '/recommend',
    component: Recommend,
    children: [{
      path: ':id',
      component: Disc
    }]
  }, {
    path: '/rank',
    component: Rank,
    children: [{
      path: ':id',
      component: TopList
    }]
  }, {
    path: '/search',
    component: Search
  }, {
    path: '/singer',
    component: Singer,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  }]
})