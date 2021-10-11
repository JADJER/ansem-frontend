<template>
  <!-- TOP Nav Bar -->
  <div class="iq-top-navbar">
    <div class="iq-navbar-custom d-flex align-items-center justify-content-between">
      <div class="iq-sidebar-logo">
        <div class="top-logo">
          <router-link :to="homeURL">
            <img :src="logo" class="img-fluid" alt="logo">
            <span>{{ appName }}</span>
          </router-link>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light p-0">
        <b-navbar-toggle target="nav-collapse" class="mr-2 text-primary">
          <i class="ri-menu-3-line"></i>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <slot name="responsiveRight"/>
        </b-collapse>
        <slot name="right"/>
      </nav>
    </div>
  </div>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { APPNAME } from '../../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'DefaultNavBar',
  props: {
    homeURL: { type: Object, default: () => ({ name: 'dashboard.home' }) },
    logo: { type: String, default: require('../../../assets/images/logo.png') },
    items: { type: Array },
    sidebarGroupTitle: { type: Boolean, default: true }
  },
  computed: {
    ...mapGetters({
      bookmark: 'setting/bookmarkState'
    })
  },
  data () {
    return {
      appName: APPNAME,
      globalSearch: '',
      showSearch: false,
      showMenu: false
    }
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    removeClass () {
      this.showSearch = false
      this.showMenu = ''
      this.globalSearch = ''
      if (document.getElementById('searchbox-datalink') !== null && document.getElementById('searchbox-datalink') !== undefined) {
        document.getElementById('searchbox-datalink').classList.remove('show-data')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse-menu{
    @media (min-width:1300px) {
      display: none;
    }
  }
  .iq-sidebar-menu .iq-menu.hover-menu{
    display: flex;
    @media (max-width:1299px){
      display: none !important;
    }
  }
</style>
