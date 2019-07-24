/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/account',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Account',
  meta: {
    title: 'account',
    icon: 'user'
  },
  children: [
    {
      path: 'information',
      component: () => import('@/views/account/information/index'),
      name: 'Information',
      meta: { title: 'information' }
    },
    {
      path: 'setting',
      component: () => import('@/views/account/setting/index'),
      name: 'Setting',
      meta: { title: 'setting' }
    }
  ]
}

export default chartsRouter
