<template>
  <div>
    <div class="container">
      <div class="row">
        <router-link to=""></router-link>
        <div class="col-md-3" style="padding-bottom: 50px; padding-top: 50px" v-for="real in data" :key="real.id">
          <router-link :to="{ name: 'realview', params: {real: real.id} }" style="text-decoration: none">
            <Card style="width: 20em; height: 600px"
                >
              <template #header>
                <img :src="require(`../assets/images/${real.images[0].image}.jpeg`)"
                     style="height: 15rem"/>
              </template>
              <template #title>
                {{ real.name }}
              </template>
              <template #subtitle>
                {{ real.location }}
              </template>
              <template #content>
                <p><strong>Cena: </strong> <span>{{ real.price }}</span></p>
                <p><strong>Typ: </strong> <span>{{ real.type }}</span></p>
                <p><strong>Lokacia: </strong> <span>{{ real.location }}</span></p>
              </template>
            </Card>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {reals} from "@/data/data.js"

import Card from 'primevue/card';

export default {
  name: "RealEstates",
  components: {Card},
  data() {
    return {
      data: reals.reals,
    }
  },
}
</script>

<style scoped>

</style>
