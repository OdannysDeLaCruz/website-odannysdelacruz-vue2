<template>
	<section class="main-contenedor">
		<header class="header">
	        <nav class="header-nav">
	            <ul class="header-nav-ul">
	                <li class="header-nav-li"><router-link class="header-nav-links" to="/">Home</router-link></li>
	                <!-- <li class="header-nav-li"><router-link class="header-nav-links sin-permiso" to="/skills">Skills</router-link></li> -->
	                <li class="header-nav-li"><a class="header-nav-links sin-permiso" href="#skills">Skills</a></li>
	                <li class="header-nav-li"><router-link class="header-nav-links" to="/projects">Projects</router-link></li>
	                <li class="header-nav-li"><router-link class="header-nav-links" to="/contact">Contact</router-link></li>
	                <li class="header-nav-li"><router-link class="header-nav-links" to="/blog">Blog</router-link></li>
	            </ul>
	        </nav>
	    </header>
	</section>
</template>
<script>
	export default {
		name: 'HeaderComponent'
	}
</script>
<style scoped>
.header {
	background:  linear-gradient(to bottom, var(--principal-color), var(--principal-color), transparent);
	position: absolute;
	z-index: 10;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	width: 100%;
}
.header-nav {
	position: sticky;
	width: 100%;
	top: 0px;
	right: 0px;
	left: 0px;
}
.header-nav-ul {
	margin: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
.header-nav-li {
	width: 50%;
	padding: 5px 0;
	text-align: center;
}
.header-nav-links {
	text-decoration: none;
	color: white;
	font-size: 14px;
	text-transform: uppercase;
	font-weight: 500;
}
.header-nav-links:hover {
	text-decoration: underline;
	color: #fff;
}
.header-nav-link-volver {
	color: #fff;
	font-size: 14px;
	font-weight: 400;
}
.header-nav-link-volver:hover {
	color: #fff;
	text-decoration: underline;
}

@media (min-width: 576px) {
	.header-nav-ul {
		justify-content: space-around;
	}
	.header-nav-li {
		width: auto;
		padding: 5px 0;
		text-align: center;
	}
}
@media (min-width: 768px) {
	.header {
		background: transparent;
		padding: 20px 20px;
	}
	.header-nav-ul {
		justify-content: flex-end;
	}
	.header-nav-li {
		width: auto;
		margin-left: 10px;
		text-align: center;
	}
	.header-nav-links {
		color: var(--text-color);
		font-size: 16px;
		font-weight: 700;
	}
	.header-nav-links:hover {
		text-decoration: underline;
		color: var(--text-color);
	}
}
</style>