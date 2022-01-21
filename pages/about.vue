<template>
  <v-row justify="center" no-gutters>

    <v-col cols="12" class="about-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="primary--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" class="my-5">
      <v-card
        flat
        class="info pa-5"
      >
        <h2 class="primary--text text-center">Who we are</h2>
        <v-card-subtitle class="accent--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.</v-card-subtitle> 
      </v-card>
    </v-col>
    <v-col cols="11" class="mb-5">
      <v-card
        flat
        class="info pa-5"
      >
        <h2 class="primary--text text-center">What we do</h2>
        <v-card-subtitle class="accent--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. sit, amet consectetur adipisicing elit. Nihil neque quia illo porro dicta. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium. Aperiam laudantium corporis tenetur facere quis et impedit? Nostrum officiis, perspiciatis vel eaque voluptatibus eligendi accusantium.</v-card-subtitle> 
      </v-card>
    </v-col>
    <v-col cols="11" class="mb-5">
      <v-card
        flat
        class="info pa-5"
      >
        <h2 class="primary--text text-center">Our Team</h2>
        <div class="d-flex justify-center pa-3">
          <v-avatar size="80">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="primary--text text-left pb-1">John Doe</h3>
            <small class="accent--text">neque quia illo porro dicta</small> 
          </div>
        </div>
        <div class="d-flex justify-center pa-3">
          <v-avatar size="80">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="primary--text text-left pb-1">John Doe</h3>
            <small class="accent--text">neque quia illo porro dicta</small> 
          </div>
        </div>
        <div class="d-flex justify-center pa-3">
          <v-avatar size="80">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="primary--text text-left pb-1">John Doe</h3>
            <small class="accent--text">neque quia illo porro dicta</small> 
          </div>
        </div>
      </v-card>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
    
  </v-row>
</template>

<script>

export default {
  data: () => ({
    title: 'About Us',
    description: '',
    image: '',
  })
}
</script>

<style scoped>
.about-bg {
  background-image: url('https://cdn.vuetifyjs.com/images/cards/house.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
