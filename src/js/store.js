import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        listFractions: [
            {
                dividend: null,
                divisor: null,
            },
            {
                dividend: null,
                divisor: null,
            }
        ],
    },
    actions: {},
    getters: {
        fractionsCount(state) {
            return state.listFractions.length;
        },
        calcSumFractions(state) {
            let sum = 0;
            let checkCorrectFraction = state.listFractions.filter(item => item.dividend != null && item.divisor != null)

            checkCorrectFraction.forEach((item, index) => {
                sum += item.dividend / item.divisor;
            });

            return sum.toFixed(3);
        },
    },
    mutations: {
        addFraction(state, newFraction) {
            state.listFractions.push(newFraction);
        },
        setValueFraction(state, value) {
            state.listFractions[value.index][value.type] = value.data
        },
        deleteFraction(state, fraction) {
            state.listFractions.pop();
        }
    }
});
