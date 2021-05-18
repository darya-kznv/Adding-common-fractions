<template>
	<div class="fractions-app">
		<div class="container">
			<header class="header">
				<h1 class="header__title">Сalculating sum of common fractions</h1>
				<p class="header__descr">Integers from 1 to 99</p>
			</header>
			<div class="fractions-app__lists">
				<div class="fractions-list">
					<fraction
						v-for="(itemFraction, index) in listFractions"
						:key-fraction="index"
						class="fractions-list__item"
					>
						<span
							class="fraction__close"
							v-if="index >= 2"
							@click="deleteFraction"
						>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="9px">
							<path d="M2,8 L8,2" class="p1"/>
							<path d="M2,2 L8,8" class="p3"/>
						</svg>
					</span>
					</fraction>
				</div>
				<div class="fractions-app__result fraction-result">
					<span class="fraction-result__equal">=</span>
					{{ getResultAddFractions }}
				</div>
			</div>
			<button
				class="button button--blue fractions-app__button"
				:disabled="listFractions.length >= 5"
				@click="addNewFraction"
			>
				Add new element
			</button>
		</div>
	</div>
</template>

<script>
import Fraction from '../fraction/Fraction.vue'

export default {
	name: 'App',
	data() {
		return {}
	},
	components: {
		Fraction
	},
	computed: {
		listFractions() {
			return this.$store.state.listFractions;
		},
		getResultAddFractions() {
			return this.$store.getters.calcSumFractions;
		}
	},
	methods: {
		addNewFraction() {
			if (this.listFractions.length < 5) {
				this.$store.commit('addFraction', {
					dividend: null,
					divisor: null,
				});
			}
		},
		deleteFraction() {
			this.$store.commit('deleteFraction');
		}
	}
}
</script>

<style lang="scss">
@import "../../scss/general";
@import "../../components/app/app";
</style>
