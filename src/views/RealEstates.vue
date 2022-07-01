<template>
  <div>
    <h1>Reals</h1>
    <div v-for="real in data" :key="real.index">
      <Card style="width: 25em">
        <template #header>
          <img :src="require(`../assets/images/${real}.jpeg`)"
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
