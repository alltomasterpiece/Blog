<template>
  <v-card>

    <v-app-bar class="app-nav px-2" flat fixed app>
      <nuxt-link  to="/">
        <site-logo  />
      </nuxt-link>

      <v-spacer></v-spacer>
      <div class="nav-links">
      <v-app-bar-nav-icon class="burger" @click="drawer = !drawer" />
        <nuxt-link v-for="item in $siteConfig.mainMenu" :key="item.link" class="link" :to="item.link" flat>
          <v-btn text class="link_button">
            {{ item.name }}
          </v-btn>
        </nuxt-link>
        
          <site-search />
        </div>

    </v-app-bar>
    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      fixed
    >
      <v-list>
        <v-list-item
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          :to="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>

          

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      
  </v-card>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      drawer: false,
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}

.theme--light.v-btn{
  color: #50087f !important;
  text-decoration: none !important;
}

.nav-links {
  @media (max-width: 1284px) {
    display: none;
    float:right ;
    height: 70px;
  }
}
.burger {
  @media (min-width: 1285px) {
    display: none;
  }
}

.v-application a{
    text-decoration: none !important;
}
.link_button{
  font-weight: normal !important;
}


</style>
