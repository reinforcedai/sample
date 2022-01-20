<template>
  <v-row justify="center" align="center" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
        class="services-bg"
      >
        <v-row align="center" justify="left" class="fill-height">
          <v-col cols="12">
            <h2 class="primary--text text-center">Our Services</h2>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12" class="pa-5">
      <v-row
        justify="center"
        align="center"
      >
        <v-col cols="12">
          <h3 class="mb-3">Lorem ipsum</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis delectus numquam doloremque nesciunt culpa qui dicta illum incidunt eaque! Impedit architecto sint similique voluptate asperiores repellat. Repellat, quaerat earum dicta optio fuga iste facilis quis pariatur eveniet! Harum at quibusdam mollitia ab veniam deleniti eum velit aspernatur assumenda tempore atque nesciunt magnam earum porro, ut accusamus vero dolorem commodi, officia, a blanditiis non? Quia, esse placeat! Aspernatur sed commodi illo, reprehenderit eos fugiat cupiditate enim fugit porro temporibus aliquam excepturi laboriosam ipsum doloremque ex magnam nostrum quae veritatis, dolore ullam! Nisi quis repellendus, deserunt exercitationem facere debitis quos cum, nobis ab harum totam similique, consequuntur nostrum nihil quisquam suscipit error magni ipsam dicta laudantium distinctio hic. Facere atque sapiente esse ipsam recusandae necessitatibus tempore corporis laboriosam accusantium, illo ut aliquid blanditiis similique fugit ipsa dignissimos id quibusdam culpa? Quae sit nam est, quam optio id! Repellendus assumenda magni distinctio voluptatibus sint, voluptatum excepturi eaque sequi, iusto quibusdam illo eveniet. Minus consequuntur, corporis deleniti harum sapiente saepe maiores quam sequi quos odio beatae ipsum qui dolores ipsam explicabo. Provident id ipsam, dolorum eius maxime fugiat distinctio, fuga at iste autem quaerat expedita adipisci dolore ratione vero exercitationem itaque nesciunt. Optio modi aliquid dolorum sit provident repellendus nisi fugiat illum earum, suscipit ullam praesentium voluptas corrupti. Minus ad repellendus amet porro nobis, inventore optio laboriosam in architecto mollitia voluptatibus saepe laborum cumque hic eum aut perferendis ex, odio illo recusandae velit autem ea obcaecati praesentium? Nesciunt molestias dolores ut fuga rem eos et quis, libero ipsam adipisci? Hic modi, eos cum delectus quas harum doloremque fugit dolores, atque mollitia voluptates eius quod ea dignissimos voluptate rem tenetur sit odit totam. Recusandae id suscipit ut? Est tenetur cum at velit officia illum aspernatur voluptatem commodi nihil tempora rerum delectus ex repellendus error, maxime, vitae quos eum assumenda ipsam facilis unde consequuntur dolorum? Ab, dolore qui natus magnam sed illum minima. Molestiae pariatur aliquid quos mollitia ducimus rem optio, sequi nihil esse facilis dolore harum atque eos modi iure? Nisi magnam, possimus eos, optio labore repellendus qui est saepe distinctio blanditiis repellat amet rem autem, asperiores porro tempore reprehenderit excepturi repudiandae. Necessitatibus dicta quos iste deserunt similique soluta rerum, provident eos omnis facilis quas error labore, laborum assumenda recusandae porro. Architecto optio similique ab laborum maiores amet, eos ducimus nobis, debitis officiis laboriosam, neque voluptas ex ratione. Quae consectetur illum distinctio optio animi molestias expedita maiores delectus. Doloribus deserunt nostrum sed id eveniet aliquam, eius unde asperiores, aliquid quas rem ratione magni iusto dolorum modi recusandae dolores pariatur atque, officia corrupti in minima rerum. Laudantium sed officiis doloribus. Iusto quod alias cumque. Officiis repellendus nesciunt optio esse molestiae ex dicta facilis fugit harum laudantium possimus rem est omnis provident vel magni dolores saepe, numquam voluptates blanditiis unde aperiam, eius maxime? Accusamus, vitae? Nemo veritatis officia, aut quia itaque voluptatem debitis quasi nam mollitia! Ipsa ab, nulla est provident nam non laudantium eveniet quisquam qui impedit pariatur explicabo quo blanditiis molestias suscipit reprehenderit unde. Accusantium.</p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>


    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    title: 'Our Services',
    description: '',
    image: '',
    
  }),

}
</script>
<style scoped>
.services-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
