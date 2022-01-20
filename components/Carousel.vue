<template>
    <v-carousel
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="100vh"
      class=""
    >
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
        :src="slide.src"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col class="text-center">
            <h1 class="primary--text">{{ slide.text }}</h1>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        cycle: true,
        slides: [
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            text: 'Slide 1',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            text: 'Slide 2',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
            text: 'Slide 3',
          },
        ],
      }
    },
  }
</script>
