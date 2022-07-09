import {createStore} from 'vuex';
import {reals} from "@/data/data.js";

export default createStore({
    state: {
        data: reals,
    },
    mutations: {
        ADD_REAL: (state, data) => {
            state.data.push(data.newReal);
        },
        addReal(state, real) {
            state.data.push(real);
        },
        REMOVE_REAL: (state, index) => {
            state.data.splice(index, 1);
        },
    },
    getters: {
        getData: state => state.data,
    },
    modules: {}
})
