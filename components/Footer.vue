<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="secondary text-center">

      <v-row class="primary--text font-weight-thin pt-16">
         
        <v-col cols="12" md="4" class="text-center">
          <h3>Menu</h3>
          <v-btn
            v-for="(item, i) in navItems"
            :key="i"
            :to="`${item.to}`"
            tile
            text
            block
            class="success--text text-capitalize"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
        
         
        <v-col cols="12" md="4" class="text-center">
          <h3>Follow Us</h3>
          <social-links />
        </v-col>
        
        <v-col cols="12" md="4" class="text-center">
          <h3>Contact Us</h3>
          <p class="success--text">
            Phone: +234 (0)90x xxx xxxx
          </p>
          <p class="success--text">
            Email: info@example.com
          </p>
          <p class="success--text">
            Location: Lagos
          </p>
        </v-col>
      </v-row>

      <v-card-text class="success--text py-16">
        &copy; {{ new Date().getFullYear() }} - {{ companyName }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['companyName', 'navItems']),
  },
}
</script>
