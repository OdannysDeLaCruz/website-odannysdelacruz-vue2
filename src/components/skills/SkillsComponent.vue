<template>
	<section class="main-contenedor-fluid" id="skills">
		<section class="main-contenedor content-skill">
			<article class="content-skill-introduction">
				<h1 class="content-skill-title">Skills & <br> Experience</h1>
				<p class="content-skill-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum itaque, labore, impedit voluptates corporis accusamus ab. Delectus, saepe! Similique id possimus numquam veniam magnam repellat hic, maiores praesentium, amet reprehenderit?</p>
			</article>
			<div class="content-skill-tech">
				<card-skill-component 
					v-for="(logo, index in logos"
					:key="index"
					:img="logo">
				</card-skill-component>
			</div>
		</section>
	</section>
</template>
<script>
import CardSkillComponent from "@/components/skills/CardSkillComponent"
export default {
	name: 'SkillsComponent',
	data() {
		return {
			logos: [
				'html5.png',
				'css.png',
				'js.png',
				'vue.png',
				'bootstrap.png',
				'php.png',
				'laravel.png',
				'mysql.png',
				'github.png',
			]
		}
	},
	components: { CardSkillComponent }
}
</script>
<style scoped>
.main-contenedor-fluid {
	background: #fff;
}
.content-skill {
	padding: 30px;
	max-width: 1200px;
	margin: auto;
}
.content-skill-introduction {
	text-align: justify;
}
.content-skill-title {
	font-size: 6.0rem;
	font-weight: 800;
	text-align: center;
	line-height: 60px;
	margin: 30px 0 60px;
}
.content-skill-paragraph {
	font-size: 1.8rem;
	margin-bottom: 60px;
}
.content-skill-tech {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr;
	/*display: flex;*/
	/*justify-content: center;*/
	/*flex-wrap: wrap;*/
}
@media (min-width: 768px) {
	.content-skill-tech {
		grid-template-columns: repeat(5, 1fr);
	}
}
</style>
