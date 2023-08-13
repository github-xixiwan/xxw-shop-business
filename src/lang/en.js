import spu from './goods/spu/en'
import attr from './goods/attr/en'
import category from './goods/category/en'
import notice from './business/notice/en'
import shopUser from './business/shop-user/en'
import hotSearch from './business/hot-search/en'
import imgbox from './biz/imgbox/en'
import role from './rbac/role/en'
import menu from './rbac/menu/en'
import menuPermission from './rbac/menu-permission/en'
import selector from './components/category-selector/en'
import shopUserAccount from './business/shop-user-account/en'
import order from './order/order/en'
import constant from './constant/en'
import admin from './admin/en'
import shop from './shop/en'
import address from './address/en'
import goods from './goods/en'

export default {
  language: 'English',
  route: {
    dashboard: 'Dashboard'
  },
  navbar: {
    logOut: 'Log Out'
  },
  tip: {
    select: 'please select prod',
    input: 'please input'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  date: {
    start: 'Start date',
    end: 'End date',
    tip: 'to',
    t: 'today',
    y: 'yesterday',
    n: 'nearly 7',
    m: 'nearly 30',
    a: 'whole'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    any: 'any',
    thirdparty: 'Or connect with',
    thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
  },
  unit: {
    dollar: 'yuan'
  },
  table: {
    search: 'Search',
    add: 'Add',
    export: 'Export',
    id: 'ID',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    create: 'Create',
    publish: 'Publish',
    delete: 'Delete',
    cancel: 'Cancel',
    offline: 'Offline',
    clear: 'Clear',
    confirm: 'Confirm',
    actionSuccess: 'Actions Success',
    tips: 'Tips',
    seq: 'Queue number',
    sureToDelete: 'Be sure to delete?',
    createTime: 'create time',
    updateTime: 'update time'
  },
  action: {
    putOnShelf: 'Put on the shelf',
    offShelf: 'off the shelf'
  },
  rbac: {
    role,
    menu,
    menuPermission
  },
  business: {
    notice,
    shopUser,
    hotSearch,
    shopUserAccount
  },
  goods: {
    ...goods,
    attr,
    category,
    spu
  },
  biz: {
    imgbox
  },
  order: {
    order
  },
  constant: {
    ...constant
  },
  admin: {
    ...admin
  },
  shop: {
    ...shop
  },
  address: {
    ...address
  },
  components: {
    selector
  }
}
