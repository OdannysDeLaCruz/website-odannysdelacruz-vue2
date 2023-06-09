<template>
    <section class="foto-perfil">
        <particles-component class="particulas-fondo" :width="569" :height="657" selector=".particulas-fondo" color="#ffffff" :connectParticles="true" :maxParticles="40" :speed="2" :minDistance="70"></particles-component>
        <div class="foto-perfil-contenedor">
            <h1 class="foto-perfil-texto">Hola!</h1>
            <figure class="foto-perfil-img">
                <img src="/assets/images/perfil.png" alt="Foto de Odannys De La Cruz | Frontend web developer">
            </figure>  
            <button class="foto-perfil-button">
                <a class="foto-perfil-link" href="portafolio.html">VER PORTAFOLIO &#62;</a>
            </button>  
        </div>
        <particles-component class="particulas-frente" :width="689" :height="526" selector=".particulas-frente" color="#ffffff" :connectParticles="true" :maxParticles="30" :speed="1" :minDistance="60"></particles-component>
    </section>
</template>

<script>
import ParticlesComponent from '@/components/ParticlesComponent'
export default {
    name: 'ProfileComponent',
    components: {
        ParticlesComponent
    }
}
</script>

<style scoped>
.foto-perfil {
    background: var(--principal-color);
    height: auto;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
    top: 0;
    position: relative;
}
.foto-perfil-contenedor {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px;
    margin-top: 100px;
}
.foto-perfil-texto {
    position: absolute;
    z-index: 4;
    top: -25px;
    left: 0;
    font-size: 4.0rem;
    color: #fff;
    font-weight: 700;
}
.foto-perfil-img {
    width: 200px;
}
.foto-perfil-img > img {
    position: relative;
    width: 100%;
    transform: rotate(-5deg);
    z-index: 3;
}
.foto-perfil-button {
    position: relative;
    z-index: 4;
    border: none;
    background: none;
    margin-top: 20px;
}
.foto-perfil-link {
    position: relative;
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 600;
    padding: 15px 40px;
    background: var(--bg-color);
    color: var(--principal-color);
    border-radius: 125px;
    height: 20px;
    top: 0px;
    opacity: 1;

    animation: aparecer 3s;
    animation: mover_boton 3s infinite alternate;
}
@keyframes aparecer {
    from {
        top: -50px;
        opacity: 0;
    }
    to {
        top: 0px;
        opacity: 1;
    }
}
@keyframes mover_boton {
    from { top: 0px; }
    to { top: 8px; }
}
@media (min-width: 768px) {
    .foto-perfil {
        height: 100vh;
        max-height: 900px;
    }
}
@media (min-width: 992px) {
    .foto-perfil-img {
        width: 250px;
    }
}
@media (min-width: 1200px) {
    .foto-perfil-img {
        width: 300px;
    }
}
</style>
