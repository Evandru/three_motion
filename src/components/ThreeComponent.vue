<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'ThreeComponent',
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Configurar cena, câmera e renderizador
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, this.$refs.threeContainer.clientWidth / this.$refs.threeContainer.clientHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(this.$refs.threeContainer.clientWidth, this.$refs.threeContainer.clientHeight);
      this.$refs.threeContainer.appendChild(this.renderer.domElement);

      // Criar um cubo
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.camera.position.z = 5;

      // Iniciar animação
      this.animate();
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style>
.three-container {
  width: 100%;
  height: 100vh;
}
</style>
