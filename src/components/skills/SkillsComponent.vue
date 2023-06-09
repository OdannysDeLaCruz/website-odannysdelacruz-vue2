<template>
	<section class="main-contenedor-fluid" id="skills">
		<section class="main-contenedor content-skill content">
			<article class="content-skill-introduction">
				<h1 class="subtitle">Skills</h1>
				<p class="paragraph text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum itaque, labore, impedit voluptates corporis accusamus ab. Delectus, saepe! Similique id possimus numquam veniam magnam repellat hic, maiores praesentium, amet reprehenderit?</p>
			</article>
			<div class="content-skill-tech">
				<card-skill-component 
					v-for="(skill, index) in skills"
					:key="index"
					:img="skill.href">
				</card-skill-component>
			</div>
		</section>
	</section>
</template>
<script>
import CardSkillComponent from "@/components/skills/CardSkillComponent"
import api from "@/api"
export default {
	name: 'SkillsComponent',
	data() {
		return {
			skills: []
		}
	},
	components: { CardSkillComponent },
	created() {
		api.getSkills()
		.then(data => this.skills = data)
	}
}
</script>
<style scoped>
.main-contenedor-fluid {
	background: #fff;
}
.content-skill-introduction {
	text-align: justify;
}
.content-skill-tech {
	margin-top: 40px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	transition: ease all .4s;
}
/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {
	.content-skill-tech {
		grid-template-columns: repeat(3, 1fr);
	}
}
@media (min-width: 768px) {
	.content-skill-tech {
		grid-template-columns: repeat(4, 1fr);
	}
}
/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
	.content-skill-tech {
		grid-template-columns: repeat(5, 1fr);
	}
}
</style>
