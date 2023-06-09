<template>
	<div>
		<section class="main-contenedor content-resumen">
			<profile-component></profile-component>
			<resumen-component></resumen-component>
		</section>
		<projects-list></projects-list>
		<skills-component></skills-component>
	</div>
</template>

<script>
import ProfileComponent from '@/components/ProfileComponent'
import ResumenComponent from '@/components/ResumenComponent'
import SkillsComponent from '@/components/skills/SkillsComponent'
import ProjectsList from '@/components/projects/ProjectsList'
export default {
  	name: 'Home',
  	components: {
  		ProfileComponent,
  		ResumenComponent,
  		ProjectsList,
  		SkillsComponent
  	}
}
</script>
<style scoped>
/*--Inicio Main--*/
.content-resumen {
	display: grid;
	grid-template-columns: 1fr;
}
@media (min-width: 768px) {
	.content-resumen {
		grid-template-columns: 2fr 3fr;
	}
}
</style>
