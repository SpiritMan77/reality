<template>
  <div class="realView">
    <h1>{{ parsedReal.name }}</h1>
    <p><strong>Lokacia: </strong><span>{{ parsedReal.location }}</span></p>
    <p><strong>Kategoria: </strong><span>{{ parsedReal.category }}</span></p>
    <p><strong>Cena: </strong><span>{{ parsedReal.price }}</span></p>
    <p><strong>Rozloha: </strong><span>{{ parsedReal.area }}</span></p>
    <Image :src="require(`../assets/images/${parsedReal.images[0].image}.jpeg`)" alt="Image" width="250" preview/>
    <p>{{ parsedReal.text }}</p>
  </div>
</template>
<script>
import Image from 'primevue/image';

export default {
  props: ['real'],
  components: {Image},
  computed: {
    parsedReal() {
      return JSON.parse(this.real)
    }
  }
}
</script>

<style scoped>
.realView {
  padding-left: 10px;
}
</style>
