<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link to="/">Domov</router-link>
      </li>
      <span class="p-input-icon-left">
<!--            <i class="pi pi-search"/>-->
        <!--            <InputText type="text" v-model="value3" placeholder="Search" style="height: 30px; margin-top: 20px"/>-->
        </span>
      <!--      <li> <router-link to="/reals">Nehnutelnosti</router-link> </li>-->
      <!--      <li> <router-link to="/about">O nas</router-link> </li>-->
    </ul>

  </div>
</template>

<script>
// import InputText from 'primevue/inputtext';

export default {
  name: 'Navigation',
  // components: {InputText},
  data() {
    return {
      links: [
        {text: "Home", route: "/"},
        {text: "Follow list", route: "/about"},
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigation {
  padding-bottom: 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #04AA6D;
}
</style>
