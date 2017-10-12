<template>
	<section>
		<pg-month-select :show="isShow" @picmonth="picmonth">
			<input type="text" style="width: 220px; height: 28px; line-height: 28px; padding: 0 5px; border: 1px solid #e1e1e1; color: #999;" readonly>
		</pg-month-select>
	</section>
</template>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>