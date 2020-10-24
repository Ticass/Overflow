import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        ram: 0,
        totalRam: 0,
        rps: 0,
        rpk: 1,
        player: {
            name: "",
            level: 0,
            nextLevel: 100,
            increase: 3
        },
        power_ups: [],
        upgrades: [
            {
            name: "Script Kiddie",
            cost: 50,
            increase: 1.15,
            rps: 0.1,
            quantity: 0,
            unlocksAt: 0
        },
        {
            name: "Junior Hacker",
            cost: 100,
            increase: 1.2,
            rps: 0.5,
            quantity: 0,
            unlocksAt: 1
        },
        {
            name: "Intermediate Hacker",
            cost: 300,
            increase: 1.4,
            rps: 1,
            quantity: 0,
            unlocksAt: 2
        },
        {
            name: "God Hacker",
            cost: 5000,
            increase: 5,
            rps: 5,
            quantity: 0,
            unlocksAt: 10
        }
    ]
    },
    mutations: {
        incrementRam: (state, increment) => {
            state.ram += increment;
            state.totalRam += increment;
        },
        levelUp: state => {
            state.player.level++;
            state.player.nextLevel *= state.player.increase;
        }

    },
    getters: {
        ramUntilLevelUp: state => {
            return Math.round(state.player.nextLevel - state.totalRam);
        }

    }
});