<template>
  <v-row>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="secondary"
    >
      <nuxt-link to="/" exact class="text-decoration-none">
        <v-system-bar
          height="55"
          class="secondary"
        >
          <h3 class="primary--text">{{ siteName }}</h3>
          <!-- <v-img
            alt="logo"
            contain
            src=""
            transition="scale-transition"
            width="200"
            class="shrink"
          /> -->
        </v-system-bar>
      </nuxt-link>
      <v-list nav>

        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-capitalize primary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      flat
      color="secondary"
    >
      <v-app-bar-nav-icon
        color="success"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <nuxt-link to="/" exact class="text-decoration-none ml-16">
      <h3>{{ siteName }}</h3>
        <!-- <v-img
          contain
          src=""
          alt="logo"
          class="mx-auto"
          width="200"
        /> -->
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down ml-16 pr-16">
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="`${item.to}`"
          tile
          text
          class="primary--text text-capitalize"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
      ...mapGetters(['siteName', 'navItems']),
    },
  
}
</script>
