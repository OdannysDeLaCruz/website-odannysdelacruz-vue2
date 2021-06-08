<template>
	<main id="app">
	    <header-component></header-component>		
	    <router-view/>
	    <footer-component></footer-component>
	</main>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'
export default {
	name: 'App',
	components: { HeaderComponent, FooterComponent }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}
html {
	font-size: 62.5%;
}
a {
	text-decoration: none;
}
:root {
	--text-color: #1a1a1a;
	--principal-color: #003380;
	--bg-color: #f9f9f9;
}
body {
	background: var(--bg-color);
}
main {
	position: relative;
	width: 100%;
	margin: auto;
}
.main-contenedor {
	position: relative;
	margin: auto;
	max-width: 1400px;
}
.main-contenedor-fluid {
	width: 100%;
	max-width: 1800px;
	margin: auto;
}
</style>
