<template>
	<section class="main-contenedor-fluid">
		<section class="main-contenedor content-projects content">
			<article class="content-projects-introduction">
				<h1 class="subtitle">Projects</h1>
				<p class="paragraph text-center">En esta lísta encontrarás los proyectos desarrollados por mí, incluye proyectos desarrollados para clíentes como parte de un equipo ó como <i>desarrollador freelance</i>, támbien están listados algúnos de mís <strong><i>mejóres proyectos personales.</i></strong></p>
				<p class="paragraph text-center">En mi flujo de desarrollo en el lado <strong><i>Frontend</i></strong> normalmente uso <i>HTML</i> sin motor de platilla, <i>SCSS</i> (en algunos casos con Bootstrap) y para la parte interactiva <i>VanillaJS &amp; ES6 con algunas herramientas para mejorar el desempeño como (Webpack, Babel, Npm, NodeJS y Git). He desarrollado varios proyectos en el lado <strong><i>Backend</i></strong></i> usando tecnologías como <i>PHP, Laravel y MySql.</i> </p>
				<p class="paragraph text-center">Aquí podras revisar los resultados finales de cada proyecto dando click en su respectivo enlace. <strong><i>Si lo que buscas es ver como está construido puedes verlos todos en mi <a target="_blank" href="https://github.com/odannysdelacruz">repositorio de GitHub</a></i></strong></p>
			</article>
			<div class="projects-list">
				<project-card
					v-for="(project, index) in projectsImages"
					:key="index"
					:href="project.href"
					:name="project.name"
					:link="project.link">				
				</project-card>
			</div>
		</section>
	</section>
</template>
<script>
import ProjectCard from "@/components/projects/ProjectCard"
import api from '@/api'
export default {
	name: 'ProjectComponent',
	components: {
		ProjectCard
	},
	data() {
		return {
			projectsImages: []
		}
	},
	created() {
		api.getProjects()
		.then(data => this.projectsImages = data)
	}
}
</script>
<style scoped>
.main-contenedor-fluid {
	background: #fff;
}
.content-projects {
	padding-top: 40px;
	max-width: 750px;
	margin: auto;
}
.content-projects-introduction {
	text-align: justify;
}
.projects-list {
    margin-top: 40px;
    display: grid;
    grid-row-gap: 15px;
    grid-column-gap: 5px;
    grid-template-columns: 1fr 1fr;
}
@media (min-width: 576px) {
	.projects-list {
	    grid-gap: 15px;
	    grid-template-columns: 1fr 1fr 1fr;
	}
}
@media (min-width: 768px) {
	.projects-list {
	    grid-gap: 15px;
	    grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}
</style>
</style>