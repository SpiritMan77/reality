<template>
  <div class="home">
    <div class="parent">
      <span></span>
      <Button icon="pi pi-plus" class="p-button-rounded p-button-secondary buttons"
              @click="displayMaximizable=true "/>
    </div>

    <Dialog header="Pridat nehnutelnost" v-model:visible="displayMaximizable"
            :breakpoints="{'960px': '75vw', '640px': '90vw'}"
            :style="{width: '50vw'}" :maximizable="true" :modal="true">
      <span class="p-float-label add-real-input">
            <Textarea id="title" v-model="newReal.title" :autoResize="true" rows="1" cols="90"/>
            <label for="title">Nadpis</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="locations" v-model="newReal.location" :autoResize="true" rows="1" cols="90"/>
            <label for="location">Lokacia</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="price" v-model="newReal.price" :autoResize="true" rows="1" cols="90"/>
            <label for="price">Cena</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="category" v-model="newReal.category" :autoResize="true" rows="1" cols="90"/>
            <label for="category">Kategoria</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="area" v-model="newReal.area" :autoResize="true" rows="1" cols="90"/>
            <label for="area">Rozloha</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="condition" v-model="newReal.condition" :autoResize="true" rows="1" cols="90"/>
            <label for="condition">Stav</label>
        </span>
      <span class="p-float-label add-real-input">
            <Textarea id="text" v-model="newReal.text" :autoResize="true" rows="5" cols="90"/>
            <label for="text">Popis</label>
        </span>
      <template #footer>
        <Button label="Pridat" @click="addToReals" autofocus/>
      </template>
    </Dialog>
    <div class="container">
      <div class="row">
        <router-link to=""></router-link>
        <div class="col-md-3" style="padding-bottom: 50px; padding-top: 50px" v-for="real in filterByCategory"
             :key="real">
          <router-link :to="{name: 'realView', params: {real: JSON.stringify(real)}  }"
                       style="text-decoration: none">
            <Card style="width: 20em; height: 600px"
            >
              <template #header>
                <img :src="require(`../assets/images/${real.image}.jpeg`)"
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
                <p><strong>Typ: </strong> <span>{{ real.category }}</span></p>
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
// @ is an alias to /src

import Card from "primevue/card";
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import {mapMutations, mapGetters} from "vuex";

export default {
  name: 'HomeView',
  components: {Card, Button, Dialog, Textarea},
  data() {
    return {
      displayMaximizable: false,
      displayPosition: false,
      position: 'center',
      newReal: {
        title: "",
        location: "",
        price: "",
        category: "",
        area: "",
        condition: "",
        text: "",
        image: "byt1"
      },
      category: "",
    }
  },
  computed: {
    ...
        mapGetters([
          'getData',
        ]),
    getDatas() {
      return this.getData
    }
    ,

    filterByCategory: function () {
      return this.getDatas.filter(category => !category.category.indexOf(this.category))
    },
  }
  ,
  methods: {
    ...
        mapMutations([
          'ADD_REAL',
        ]),

    addToReals() {
      this.ADD_REAL(this.newReal)
      this.closeDialog()
    }
    ,

    getRealCategory(category) {
      return this.getDatas.find((a) => a.category === category);
    }
    ,

    closeDialog() {
      this.displayMaximizable = false;
    }
    ,

    openMaximizable() {
      this.displayMaximizable = true;
    }
    ,

    closeMaximizable() {
      this.displayMaximizable = false;
    }
    ,

    onSelectAllChange(event) {
      this.selectedItems = event.checked ? this.items.map((item) => item.value) : [];
      this.selectAll = event.checked;
    }
    ,
    onChange(event) {
      this.selectAll = event.value.length === this.items.length
    }
  }
  ,
  created() {
    console.log(this.getRealCategory())
  }
}


// import {ref, computed, reactive} from 'vue';
// import {useStore} from "vuex";

// export default {
//   name: 'HomeView',
//   components: {
//     Card,
//     Button,
//     Dialog,
//     Textarea,
//   },
//   setup() {
//     const store = useStore();
//     let displayMaximizable = ref(false);
//     const position = ref('center');
//     let input = ref("");
//     const newReal = reactive({
//       id: "5",
//       title: "",
//       location: "",
//       price: "",
//       category: "",
//       area: "",
//       condition: "",
//       text: "",
//       images: {
//         image: "byt1"
//       }
//     })

// let data = computed(function () {
//   return store.state.data
// });

// function filteredList() {
//   return fruits.filter((fruit) =>
//       fruit.toLowerCase().includes(input.value.toLowerCase())
//   );
// }

// let closeMaximizableComp = computed(function () {
//   return displayMaximizable = false
// })


// function closeMaximizable() {
//   displayMaximizable = false;
// }

// function addToReals() {
//   store.commit("addReal", newReal);
//   displayMaximizable = false;
// }

// function addToReals() {
//   this.addReal( "newReal", newReal );
//   // displayMaximizable = false;
// }


// function increaseId() {
//   data.forEach((id) => {
//
//   })
// }

//   return {
//     data: computed(() => store.state.data),
//     addToReals,
//     displayMaximizable,
//     position,
//     newReal,
//     input,
//     // filteredList,
//     closeMaximizableComp,
//   }
// }

// }


</script>

<style scoped>
.buttons {
  margin-left: 5px;
}

.add-real-input {
  margin-top: 20px;
  margin-bottom: 20px;
}

.parent {
  display: grid;
  grid-template-columns: 6fr repeat(2, 0.1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding-right: 10px;
}
</style>
