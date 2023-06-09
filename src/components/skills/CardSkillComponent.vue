<template>
	<div class="skill-card">
		<img class="skill-card-img" :src="'/assets/images/'+img" alt="">
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
	padding: 15px;
	border-radius: 10px;
	border: 1px solid var(--principal-color);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	transition: all ease .4s;
}
.skill-card-img {
	object-fit: contain;
	width: 100%;
	height: 100%;
	transition: ease all .4s;
}
</style>