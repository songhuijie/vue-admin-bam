/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const homeRouter = {
  path: '/home',
  component: Layout,
  redirect: '/home/category',
  name: 'Table',
  meta: {
    title: '主页',
    icon: 'table'
  },
  children: [
    {
      path: 'category/category',
      component: () => import('@/views/home/category/index'),
      name: 'category',
      meta: { title: '分类管理', icon: 'edit' }
    },
    {
      path: 'article/article',
      component: () => import('@/views/home/article/index'),
      name: 'article',
      meta: { title: '文章管理', icon: 'edit' }
    }
  ]
}
export default homeRouter
