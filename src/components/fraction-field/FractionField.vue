<template>
	<div class="fraction-field">
		<input
			type="text"
			class="fraction-field__input"
			@input="changeValueFraction"
			v-model="setFractionValue"
			:class="[
				{ 'fraction-field__input--filled': fractionValue },
				{ 'fraction-field__input--error': isFractionError },
			]"
		/>
	</div>
</template>
<script>

const checkFraction = /^([1-2]?[1-9]|[1-9][0-9])$/;

export default {
	name: 'FractionField',
	props: ['typeFraction', 'keyFraction'],
	data() {
		return {
			fractionValue: null,
		}
	},
	computed: {
		isFractionValid() {
			return checkFraction.test(this.fractionValue);
		},
		isFractionError() {
			return !this.isFractionValid && this.fractionValue
		},
		setFractionValue: {
			get() {
				return this.$store.state.listFractions[this.keyFraction][this.typeFraction]
			},
			set(val) {
				this.fractionValue = val
			}
		}
	},
	methods: {
		changeValueFraction() {
			let data = null;

			if (this.isFractionValid) data = this.fractionValue

			this.$store.commit('setValueFraction', {
				index: this.keyFraction,
				type: this.typeFraction,
				data: data
			})
		}
	}
}
</script>
<style lang="scss" src="./fraction-field.scss"></style>
