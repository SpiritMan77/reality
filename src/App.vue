<template>
    <nav>
      <Navigation />
    </nav>
  <router-view/>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'HomeView',
  components: {Navigation},
  data() {
    return {}
  }
}
</script>

<style lang="scss">

</style>
