import pokeService from '../services/poke.service.js';

export default {
	template: `<div>
                    poke
                    <input type="text" v-model="pokeMsg"></input>
                    <button @click="sendPoke">
                        poke your random roomate 
                    </button>
                    <div v-for="poke in pokesRecived">{{poke}}</div>
               </div>`,
	data() {
		return {
			user: pokeService.user,
			pokesRecived: pokeService.pokes,
			pokeMsg: ''
		};
	},
	methods: {
		sendPoke() {
			pokeService.sendPoke(this.pokeMsg);
		}
	},
	created() {
		pokeService.init();
	}
};
