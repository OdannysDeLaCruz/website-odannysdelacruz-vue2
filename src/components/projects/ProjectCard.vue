<template>
	<figure class="portafolio_content_img">
        <a target="_blank" class="portafolio_link" :href="link" title="Ver proyecto Innova Inc Soluciones">
            <img class="portafolio_img" :src="'/assets/images/projects/'+href" :alt="'Logo ' + name">
            <figcaption class="portafolio_nombre"><i>{{name}}</i></figcaption>
        </a>
    </figure>
</template>
<script>
	export default {
		name: 'ProjectCard',
        props: {
            name: {
                type: String,
                default: 'Project'
            },
            href: String,
            link: String
        }
	}
</script>
<style scoped>
.portafolio_content_img {
    width: 170px;
    transition: ease 1s all;
}
.portafolio_link {
    color: var(--text-color);
}
.portafolio_img {
    width: 100%;
}
.portafolio_nombre {
    text-align: center;
    margin-top: 10px;
    font-size: 1.6rem;
}
</style>