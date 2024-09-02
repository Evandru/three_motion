<template>
  <div ref="starryContainer" class="starry-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'StarryBackground',
  props:{
    size: Number,
    x_move: Number,
    y_move: Number,
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      const container = this.$refs.starryContainer;
      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 1;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      const starTexture = loader.load('/star.png');
      // const starTexture = loader.load('/threejs_playground/star.png');

      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        size: this.size || 0.5,
        map: starTexture,
        alphaTest: 0.5,
        transparent: true,
      });
      
      const starVertices = [];
      for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(2000);
        const y = THREE.MathUtils.randFloatSpread(2000);
        const z = THREE.MathUtils.randFloatSpread(2000);
        starVertices.push(x, y, z);
      }
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      const animate = () => {
        requestAnimationFrame(animate);

        stars.rotation.x += this.x_move || 0.00025;
        stars.rotation.y += this.y_move || 0.00025;

        renderer.render(scene, camera);
      };

      animate();

      window.addEventListener('resize', () => {
        const newContainer = this.$refs.starryContainer;
        const newWidth = newContainer.clientWidth;
        const newHeight = newContainer.clientHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
      });
    }
  }
};
</script>

<style>
.starry-container {
  background: black;
  height: 100%;
  width: 100%;
}
</style>
