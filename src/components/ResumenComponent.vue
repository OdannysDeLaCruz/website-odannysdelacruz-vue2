<template>
	<section class="perfil-info">
        <div class="perfil-info-contenedor">
            <h1 class="perfil-info-nombre">Soy Odannys</h1>
            <h2 class="perfil-info-cargo">Frontend Web Developer</h2>
            <p class="perfil-info-resumen paragraph">
                Fullstack Web Developer con base en Colombia, escribo código desde el 2015 (4 años resolviendo problemas con código como autodidacta + 2 años como profesional freelance), me gusta el desarrollo de software en general, pero me apasiona el desarrollo web, interfaces límpias y escribír código que funcione, actualmente soy freelance y me encuentro estudiando en <a target="_blank" href="https://platzi.com/p/odannysdelacruz/">Platzi.com</a>, en mi flujo de trabajo desarrollo con tecnologias como <strong>Html5, Css3 (Bootstrap), Js (Jquery, React, Webpack, Node, Npm), Git y Github, Php (Laravel), Mysql, Heroku y mucho mas.</strong>
            </p>

            <div class="perfil-info-redes">
                <p>Encuentrame en:</p>
                <ul class="perfil-info-redes-ul">
                    <li>
                        <a class="perfil-info-redes-link" target="_blank" href="https://github.com/odannysdelacruz">
                            <img src="/assets/icons/git.svg" alt="">
                        </a>
                    </li>
                    <li>
                        <a class="perfil-info-redes-link" target="_blank" href="https://www.linkedin.com/in/odannys-de-la-cruz-827a90135/">
                            <img src="/assets/icons/in.svg">
                        </a>
                    </li>
                    <li>
                        <a class="perfil-info-redes-link" target="_blank" href="https://www.instagram.com/odannys.codes/">
                            <img src="/assets/icons/instagram.svg">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
	export default {
		name: 'ResumenComponent'
	}
</script>
<style scoped>
.perfil-info {
	position: relative;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.perfil-info-contenedor {
	padding: 25px;
	margin-top: 30px;
}
.perfil-info-nombre {
	font-size: 6.0rem;
	margin: 0px;
	font-weight: 800;
	color: var(--text-color);
}
.perfil-info-cargo {
	font-size: 2.3rem;
	padding: 5px 10px;
	margin: 5px 0 40px 0;
	font-weight: 400;
	color: #fff;
	background: var(--principal-color);
}
.perfil-info-resumen {
	font-size: 1.6rem;
	color: var(--text-color);
	line-height: 25px;
}
.perfil-info-redes {
	margin-top: 30px;
	font-size: 1.6rem;
}
.perfil-info-redes > p {
	font-weight: 500;
	margin-bottom: 15px;
}
.perfil-info-redes-ul {
	list-style: none;
	display: flex;
}
.perfil-info-redes-ul > li {
	margin-right: 15px;
}
.perfil-info-redes-link > img {
	width: 25px;
	color: red;
}
@media (min-width: 768px) {
	.foto-perfil {
		height: 100vh;
	}
	.perfil-info {
		height: 100vh;
		max-height: 900px;
		padding-bottom: 0px;
		justify-content: center;
	}
	.perfil-info-contenedor {
		margin-top: 50px;
	}
}
@media (min-width: 1200px) {
    .perfil-info-nombre {
        font-size: 8.0rem;
    }
    .perfil-info-cargo {
        font-size: 3.0rem;
    }
}
</style>