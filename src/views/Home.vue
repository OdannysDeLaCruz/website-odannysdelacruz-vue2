<template>
	<div>
		<section class="main-contenedor content-resumen">
			<profile-component></profile-component>
			<resumen-component></resumen-component>
		</section>
		<skills-component></skills-component>
	</div>
</template>

<script>
import ProfileComponent from '@/components/ProfileComponent'
import ResumenComponent from '@/components/ResumenComponent'
import SkillsComponent from '@/components/skills/SkillsComponent'
export default {
  	name: 'Home',
  	components: {
  		ProfileComponent,
  		ResumenComponent,
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
