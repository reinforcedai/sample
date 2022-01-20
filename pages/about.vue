<template>
  <v-row justify="center" no-gutters>

    <v-col cols="12" class="about-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="12">
          <h1 class="primary--text text-center">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <h3 class="mb-3">Lorem ipsum</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis deli eum officia, a blanditiis non? Quia, esse placeat! Aspernatur sed commodi illo, reprehenderit eos fugiat cupiditate enim fugit porro temporibus aliquam excepturi laboriosam ipsum doloremque ex magnam nostrum quae veritatis, dolore ullam! Nisi quis repellendus, deserunt exercitationem facere debitis quos cum, nobis ab harum totam similique, consequuntur nostrum nihil quisquam suscipit error magni ipsam dicta laudantium distinctio hic. Facere atque sapiente esse ipsam recusandae necessitatibus tempore corporis laboriosam accusantium, illo ut aliquid blanditiis similique fugit ipsa dignissimos id quibusdam culpa? Quae sit nam est, quam optio id! Repellendus assumenda magni distinctio voluptatibus sint, voluptatum excepturi eaque sequi, iusto quibusdam illo eveniet. Minus consequuntur, corporis deleniti harum sapiente saepe maiores quam sequi quos odio beatae ipsum qui dolores ipsam explicabo. Provident id ipsam, dolorum eius maxime fugiat distinctio, fuga at iste autem quaerat expedita adipisci dolore ratione vero exercitationem itaque nesciunt. Optio modi aliquid dolorum sit provident repellendus nisi fugiat illum earum, suscipit ullam praesentium voluptas corrupti. Minus ad repellendus amet porro nobis, inventore optio laboriosam in architecto mollitia voluptatibus saepe laborum cumque hic eum aut perferendis ex, odio illo recusandae velit autem ea obcaecati praesentium? Nesciunt molestias dolores ut fuga rem eos et quis, libero ipsam adipisci? Hic modi, eos cum delectus quas harum doloremque fugit dolores, atque mollitia voluptates eius quod ea dignissimos voluptate rem tenetur sit odit totam. Recusandae id suscipit ut? Est tenetur cum at velit officia illum aspernatur voluptatem commodi nihil tempora rerum delectus ex repellendus error, maxime, vitae quos eum assumenda ipsam facilis unde consequuntur dolorum? Ab, dolore qui natus magnam sed illum minima. Molestiae pariatur aliquid quos mollitia ducimus rem optio, sequi nihil esse facilis dolore harum atque eos modi iure? Nisi magnam, possimus eos, optio labore repellendus qui est saepe distinctio blanditiis repellat amet rem autem, asperiores porro tempore reprehenderit excepturi repudiandae. Necessitatibus dicta quos iste deserunt similique soluta rerum, provident eos omnis facilis quas error labore, laborum assumenda recusandae porro. Architecto optio similique ab laborum maiores amet, eos ducimus nobis, debitis officiis laboriosam, neque voluptas ex ratione. Quae consectetur illum distinctio optio animi molestias expedita maiores delectus. Doloribus deserunt nostrum sed id eveniet aliquam, eius unde asperiores, aliquid quas rem ratione magni iusto dolorum modi recusandae dolores pariatur atque, officia corrupti in minima rerum. Laudantium sed officiis doloribus. Iusto quod alias cumque. Officiis repellendus nesciunt optio esse molestiae ex dicta facilis fugit harum laudantium possimus rem est omnis provident vel magni dolores saepe, numquam voluptates blanditiis unde aperiam, eius maxime? Accusamus, vitae? Nemo veritatis officia, aut quia itaque voluptatem debitis quasi nam mollitia! Ipsa ab, nulla est provident nam non laudantium eveniet quisquam qui impedit pariatur explicabo quo blanditiis molestias suscipit reprehenderit unde. Accusantium.</p>
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
