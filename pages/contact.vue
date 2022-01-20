<template>
  <v-row justify="center" class="pb-10">

    <v-col cols="12" class="contact-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="primary--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="8" md="4">
      <p class="--text">
        Phone: 070x xxx xxxx
      </p>
      <p class="--text">
        Email: info@example.com
      </p>
      <p class="--text">
        Location: Lagos
      </p>
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
