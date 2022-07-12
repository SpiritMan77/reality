import {createStore} from 'vuex';
import {reals} from "@/data/data.js";

export default createStore({
    state: {
        data: reals,
    },
    mutations: {
        ADD_REAL: (state, newReal) => {
            state.data.push(newReal);
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
