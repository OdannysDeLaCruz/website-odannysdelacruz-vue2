<template>
	<div class="skill-card">
		<img class="skill-card-img" :src="'/assets/'+img" alt="">
	</div>
</template>
<script>
	export default {
		name: 'nameComponent',
		props: ['img']
	}
</script>
<style scoped>
.skill-card {
	background: #fff;
	padding: 10px;
	border-radius: 10px;
	border: 1px solid var(--principal-color);
	display: flex;
	justify-content: center;
	align-items: center;
}
.skill-card-img {
	width: 100px;
}
</style>