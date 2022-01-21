<template>
  <v-row justify="center" class="py-10">

    <v-col cols="11" md="3" class="accent--text">
      <h3>Contact Us</h3>
      <contact />
    </v-col>

    <v-col cols="12" md="8" class="accent--text">
      <GoogleMap />
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />

  </v-row>
</template>
<script>

export default {

  data: () => ({
    title: 'Contact Us',
    description: '',
    image: '',
  }),

}
</script>

<style scoped>
.contact-bg {
  background-image: url('https://cdn.vuetifyjs.com/images/cards/plane.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
