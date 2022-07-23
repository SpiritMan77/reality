<template>
  <div class="filters">

    <!--    <div class="field-checkbox">-->
    <!--      <Checkbox id="filter" name="city" value="cities" :v-model="Dom" @click="() => filterReals('Dom')"/>-->
    <!--      <label for="city1">Dom</label>-->
    <!--    </div>-->
    <!--    <div class="field-checkbox">-->
    <!--      <Checkbox id="filter" name="city" value="cities" :v-model="Byt" @click="() => filterReals('Byt')"/>-->
    <!--      <label for="city1">Byt</label>-->
    <!--    </div>-->
    <!--    <div class="field-checkbox">-->
    <!--      <Checkbox id="filter" name="city" value="cities" :v-model="Pozemok" @click="() => filterReals('Pozemok')"/>-->
    <!--      <label for="city1">Pozemok</label>-->
    <!--    </div>-->


    <!--    <p v-for="filter in filters" :key="filter" @click="filterReals(filter)">{{ filter }}</p>-->
    <Button label="Link" class="p-button-link" v-for="filter in filters" :key="filter" @click="filterReals(filter)">
      {{ filter }}
    </Button>

    <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="term" placeholder="Search" @keyup.enter="search(term)" />
        </span>
  </div>
</template>

<script>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


const filters = [
  'Vsetky',
  'Dom',
  'Byt',
  'Pozemok'
]
export default {
  name: 'Filters',
  props: ['filterReals','search'],
  components: {Button, InputText},
  data() {
    return {
      filters,
      checked: false,
      selectedReals: [],
      term: ''
    }
  }
}
</script>

<!-- Add " scoped
    " attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
