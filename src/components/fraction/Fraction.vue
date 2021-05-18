<template>
	<div class="fraction">
		<fraction-field
			class="fraction__fraction-field"
			:type-fraction="'dividend'"
			:key-fraction="keyFraction"
		></fraction-field>
		<fraction-field
			class="fraction__fraction-field"
			:type-fraction="'divisor'"
			:key-fraction="keyFraction"
		></fraction-field>
		<slot></slot>
	</div>
</template>
<script>

import FractionField from "../fraction-field/FractionField.vue";
export default {
	name: 'Fraction',
	props: ['keyFraction'],
	data() {
		return {}
	},
	components: {
		FractionField
	},
}
</script>
<style lang="scss" src="./fraction.scss"></style>
