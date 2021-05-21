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
						:key="index"
						:key-fraction="index"
						class="fractions-list__item"
					>
						<span
							class="fraction__close"
							v-if="listFractions.length > 2"
							@click="deleteFraction(index)"
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
		return {

		}
	},
	components: {
		Fraction
	},
	computed: {
		listFractions() {
			return this.$store.state.listFractions;
		},
		getResultAddFractions() {
			let sum = 0;
			let checkCorrectFraction = this.listFractions.filter(item => item.dividend != null && item.divisor != null)

			checkCorrectFraction.forEach((item, index) => {
				sum += item.dividend / item.divisor;
			});

			return sum.toFixed(3);
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
		deleteFraction(index) {
			// this.$store.commit('deleteFraction');
			this.$store.commit('deleteFraction', {
				key: index
			});
		}
	}
}
</script>

<style lang="scss">
@import "../../scss/general";
@import "../../components/app/app";
</style>
