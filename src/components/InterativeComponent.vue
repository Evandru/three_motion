<template>
    <div ref="InterativeContainer" class="interative-container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'InterativeComponent',
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
        const container = this.$refs.InterativeContainer;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // Cria a cena
        const scene = new THREE.Scene();

        // Configura a câmera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        // Configura o renderizador
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        // Cria um cubo
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x105080 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Adiciona a borda preta ao cubo
        const edgesGeometry = new THREE.EdgesGeometry(geometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        cube.add(edges);


        // Variáveis para interatividade
        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };

        // Função para rodar a cena
        function animate() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        }

        animate();

        // Função para manipular os eventos de mouse ou toque
        function onMouseMove(event) {
            const deltaMove = {
                x: event.clientX - previousMousePosition.x,
                y: event.clientY - previousMousePosition.y
            };

            if (isDragging) {
                const deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 1),
                        toRadians(deltaMove.x * 1),
                        0,
                        'XYZ'
                    ));

                cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
            }

            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        }

        // Função para converter graus em radianos
        function toRadians(angle) {
            return angle * (Math.PI / 180);
        }

        // Eventos do mouse
        renderer.domElement.addEventListener('mousedown', (event) => { event
            isDragging = true;
        });

        renderer.domElement.addEventListener('mousemove', onMouseMove);

        renderer.domElement.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Ajusta o renderizador ao redimensionar a janela
        window.addEventListener('resize', () => {
            const newContainer = this.$refs.InterativeContainer;
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
.interative-container {
  background: black;
  height: 100%;
  width: 100%;
}
</style>
