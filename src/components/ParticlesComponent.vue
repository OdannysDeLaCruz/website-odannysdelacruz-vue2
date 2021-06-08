<template>
	<canvas class="foto-perfil-particulas" :width="width" :height="height" style="width: 100%; height: 100%;"></canvas>
</template>
<script>
import Particles from 'particlesjs'
export default {
	name: 'ParticlesComponent',
	props: {
		width: Number,
		height: Number,
		selector: String,
		color: String,
		connectParticles: Boolean,
		maxParticles: Number,
		speed: {
			type: Number,
			default: 1
		},
		minDistance: Number
	},
	mounted() {
	    this.createParticles()
	},
	methods: {
	    createParticles() {
	        Particles.init({
	            selector: this.selector,
	            color: this.color,
	            connectParticles: this.connectParticles,
	            maxParticles: this.maxParticles,
	            speed: this.speed,
	            minDistance: this.minDistance,
	        });
	    }
  	}
}
	
</script>
<style scoped>
.foto-perfil-particulas {
    position: absolute; 
    display: block;
    top: 0;
    left: 0;
    z-index: 3;
}
.particulas-fondo {
    z-index: 0;
}
.particulas-frente {
    z-index: 3;
}
.foto-perfil-texto {
    position: absolute;
    z-index: 4;
    top: -25px;
    left: 0;
    font-size: 40px;
    color: #fff;
    font-weight: 700;
}
</style>