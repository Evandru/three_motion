<template>
    <div class="initial_page" style="max-width:100%;">
        <b-col>


            <!-- NAVBAR -->
            <b-row align-v="center" style="height:60px; max-width:100%;">
                <span class="font_space"
                style="letter-spacing: -1px; font-size: 30px; font-weight:600;"
                > Estação Espacial </span>
            </b-row>


            <!-- STARRY BACKGROUND -->
            <b-row style="height: calc(100vh - 100px); max-width:100%;">
                <StarryBackground style="filter: blur(0.3px)"/>
                <div class="d-flex align-items-center justify-content-center" style="position: absolute; height: calc(100vh - 100px);">
                    <b-row style="width:80%; height:calc(80% - 100px);" align-v="center">
                        <b-col>
                            <b-row>
                                <span class="font_space"
                                style="color: white; font-size:80px; font-weight: 500; letter-spacing: -5px;"
                                > Three.js
                                </span>
                            </b-row>
                            <b-row>
                                <span class="font_space"
                                style="color: white; font-size:80px; font-weight: 500; letter-spacing: -5px;"
                                > Vamos falar sobre o futuro
                                </span>
                            </b-row>
                            <b-row style="height:50px;"></b-row>
                        </b-col>
                    </b-row>
                </div>
            </b-row>


            <!-- ABOUT -->
            <b-row style="max-width:100%;" class="p-5">
                <div class="d-flex align-items-center justify-content-center"
                style="width:100vw; height:80vh;">
                    <b-row align-v="center" style="height:100%;">
                        <b-col class="mx-4">
                            <span class="font_space"
                            style="color: black; font-size:28px; font-weight: 500; letter-spacing: -1.5px;">
                                Three.js é um framework JavaScript que facilita a criação de gráficos 3D no navegador, simplificando o uso de WebGL. Ele permite desenvolver cenas tridimensionais interativas com iluminação, texturas e animações. Ideal para visualizações, jogos e projetos de realidade aumentada, Three.js transforma páginas da web em ambientes 3D imersivos, proporcionando experiências visuais ricas e impactantes.
                            </span>
                        </b-col>
                        <b-col class="" style="height:90%;">
                            <!-- <img style="width:450px; border-radius: 30px;" -->
                            <img style="width:100%; height:100%; object-fit:cover; border-radius:40px;"
                            src="@/assets/astronauta.jpg" alt="Astronalta em um satélite em órbita com a Terra">
                        </b-col>
                    </b-row>
                </div>
            </b-row>

            <!-- STAR BACKGROUND WITH MORE SPEED -->
            <StarryBackground :y_move="0.001" 
            style="height:400px; filter: blur(0.3px)"/>

            <!-- INTERATIVE -->
            <b-row style="max-width:100%;" class="p-5">
                <div class="d-flex align-items-center justify-content-center"
                style="width:100vw; height:80vh;">
                    <b-row align-v="center" style="height:100%;">
                        <b-col style="height:90%; border-radius:50px !important;">
                            <InterativeComponent style="cursor:pointer;"/>
                        </b-col>
                        <b-col class="mx-4">
                            <span class="font_space"
                            style="color: black; font-size:28px; font-weight: 500; letter-spacing: -1.5px;">
                                A tecnologia 3D permite uma visualização fluida e interativa, tornando a navegação e a manipulação do objeto uma experiência imersiva. Com essa animação, você pode explorar como elementos básicos podem ser transformados em uma interface interativa e dinâmica na web.
                            </span>
                        </b-col>
                    </b-row>
                </div>
            </b-row>

            
            <StarryBackground :y_move="-0.001"
            style="height:400px; filter: blur(0.3px)"/>


            <!-- FOOTER -->
            <b-row align-v="center" style="height:60px; max-width:100%;">
                <span class="font_space"
                style="letter-spacing: -1px; font-size: 30px; font-weight:600;"
                > © {{ date }} Estação Espacial 3D. Todos os direitos reservados. </span>
            </b-row>


        </b-col>
    </div>
</template>

<script>
import StarryBackground from '@/components/StarryBackground.vue'
import InterativeComponent from '@/components/InterativeComponent.vue'
export default {
    name: 'InitialPage',
    components:{
        StarryBackground,
        InterativeComponent,
    },
    data(){
        return{
            date: new Date().getFullYear()
        }
    },
}
</script>

<style scoped>
.initial_page{
    color:black;
    width: 100%;
    height: 100%;
}
</style>