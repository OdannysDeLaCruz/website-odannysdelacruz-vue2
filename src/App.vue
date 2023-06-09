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
h1, h2, h3, h4, h5,
p, article, img {
	transition: all ease .4s;
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
.subtitle {
	font-size: 4.0rem;
	font-weight: 800;
	text-align: center;
	margin: 0px 0 30px;
	line-height: 40px;
    color: var(--text-color);
}
.paragraph {
	font-size: 1.8rem;
	margin-bottom: 30px;
    line-height: calc(1.9rem * 1.6);
    font-weight: 300;
    color: var(--text-color);
}
.text-center {
    text-align: center;
}
.text-justify {
	text-align: justify;
}
.content {
	padding: 40px 30px;
	max-width: 1200px;
	margin: auto;
}
@media (min-width: 768px) {
	.subtitle {
		font-size: 6.0rem;
		line-height: 60px;
	}
}
</style>
