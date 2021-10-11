import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layouts */
const Default = () => import('../layouts/BlankLayout')
const AuthLayout = () => import('../layouts/AuthLayouts/AuthLayout')
const HorizantalLayout = () => import('../layouts/HorizantalLayout')
/* Dashboards View */
const Dashboard = () => import('../views/Dashboards/Dashboard3')
/* Authentic View */
const SignIn = () => import('../views/AuthPages/Default/SignIn')
const SignUp = () => import('../views/AuthPages/Default/SignUp')
const RecoverPassword = () => import('../views/AuthPages/Default/RecoverPassword')
const LockScreen = () => import('../views/AuthPages/Default/LockScreen')
const ConfirmMail = () => import('../views/AuthPages/Default/ConfirmMail')
/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')
const Pricing = () => import('../views/Pages/Pricing')
const Pricing1 = () => import('../views/Pages/Pricing1')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Invoice = () => import('../views/Pages/Invoice')
/* User View */
const Profile = () => import('../views/User/Profile')
const ProfileEdit = () => import('../views/User/ProfileEdit')
const AddUser = () => import('../views/User/AddUser')
const UserList = () => import('../views/User/UserList')

Vue.use(VueRouter)

const childRoutes = (prop) => [
  {
    path: 'home',
    name: prop + '.home',
    meta: { auth: true, name: 'Home', layout: 'nav-with-menu' },
    component: Dashboard
  }
]

const authChildRoutes = (prop) => [
  {
    path: 'login',
    name: prop + '.login',
    meta: { auth: false },
    component: SignIn
  },
  {
    path: 'register',
    name: prop + '.register',
    meta: { auth: false },
    component: SignUp
  },
  {
    path: 'password-reset',
    name: prop + '.password-reset',
    meta: { auth: false },
    component: RecoverPassword
  },
  {
    path: 'lock-screen',
    name: prop + '.lock-screen',
    meta: { auth: true },
    component: LockScreen
  },
  {
    path: 'confirm-mail',
    name: prop + '.confirm-mail',
    meta: { auth: false },
    component: ConfirmMail
  }
]

const defaultlayout = (prop) => [
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'pricing',
    name: prop + '.pricing',
    meta: { auth: true, name: 'Pricing' },
    component: Pricing
  },
  {
    path: 'pricing-1',
    name: prop + '.pricing1',
    meta: { auth: true, name: 'Pricing 1' },
    component: Pricing1
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { auth: true, name: 'Faq' },
    component: FAQ
  }
]

const pagesChildRoutes = (prop) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { auth: true },
    component: Maintenance
  }
]

const userChildRoute = (prop) => [
  {
    path: 'profile',
    name: prop + '.profile',
    meta: { auth: true, name: 'Profile', layout: 'nav-with-menu' },
    component: Profile
  },
  {
    path: 'profile-edit',
    name: prop + '.edit',
    meta: { auth: true, name: 'Edit Profile', layout: 'nav-with-menu' },
    component: ProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { auth: true, name: 'Add Profile', layout: 'nav-with-menu' },
    component: AddUser
  },
  {
    path: 'user-list',
    name: prop + '.list',
    meta: { auth: true, name: 'User List', layout: 'nav-with-menu' },
    component: UserList
  }
]

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: HorizantalLayout,
    meta: { auth: true },
    children: childRoutes('dashboard')
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthLayout,
    meta: { auth: false },
    children: authChildRoutes('auth')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: HorizantalLayout,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/user',
    name: 'user',
    component: HorizantalLayout,
    meta: { auth: true },
    children: userChildRoute('user')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/auth/login', '/auth/register']
  const isAuthRequest = publicPages.includes(to.path)

  if (isAuthRequest) {
    localStorage.removeItem('user')
    localStorage.removeItem('access_token')
  }

  if (to.meta.auth) {
    const accessToken = localStorage.getItem('access_token')
    if (!accessToken && accessToken === null) {
      return next({ name: 'auth.login' })
    } else if (to.name === 'dashboard') {
      return next({ name: 'user.profile' })
    }
  }

  next()
})

export default router
