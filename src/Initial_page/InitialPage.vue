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
                <StarryBackground :size="isMobile ? 4 : 0.5"
                :style="isMobile
                ? 'filter: blur(0.1px);'
                : 'filter: blur(0.3px);'
                "/>
                <div class="d-flex align-items-center justify-content-center" style="position: absolute; height: calc(100vh - 100px);">
                    <b-row style="width:80%; height:calc(80% - 100px);" align-v="center">
                        <b-col>
                            <b-row>
                                <span class="font_space"
                                style="color: white; font-weight: 500;"
                                :style="isMobile
                                ? 'font-size: 50px; letter-spacing: -3.5px;'
                                : 'font-size: 80px; letter-spacing: -5px;'
                                "> Three.js
                                </span>
                            </b-row>
                            <b-row>
                                <span class="font_space"
                                style="color: white; font-weight: 500;"
                                :style="isMobile
                                ? 'font-size: 50px; letter-spacing: -3.5px;'
                                : 'font-size: 80px; letter-spacing: -5px;'
                                "> Vamos falar sobre o futuro
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
                style="width:100vw; min-height:80vh; height:max-content;">
                    <b-row align-v="center" style="height:100%;" :cols="isMobile ? 1 : null">
                        <b-col class="" style="text-align: start;">
                            <span class="font_space"
                            style="color: black; font-weight: 500; letter-spacing: -1.5px;"
                            :style="isMobile
                            ? 'font-size:18px;'
                            : 'font-size:28px;'
                            ">
                                Three.js é um framework JavaScript que facilita a criação de gráficos 3D no navegador, simplificando o uso de WebGL. Ele permite desenvolver cenas tridimensionais interativas com iluminação, texturas e animações. Ideal para visualizações, jogos e projetos de realidade aumentada, Three.js transforma páginas da web em ambientes 3D imersivos, proporcionando experiências visuais ricas e impactantes.
                            </span>
                        </b-col>
                        <div v-if="isMobile" class="py-3"></div>
                        <b-col style="height:90%; min-height:300px;">
                            <!-- <img style="width:450px; border-radius: 30px;" -->
                            <img style="width:100%; height:100%; min-height:300px; object-fit:cover; border-radius:40px;"
                            src="@/assets/astronauta.jpg" alt="Astronalta em um satélite em órbita com a Terra">
                        </b-col>
                    </b-row>
                </div>
            </b-row>

            <!-- STAR BACKGROUND WITH MORE SPEED -->
            <StarryBackground :y_move="0.001" :size="isMobile ? 4 : 0.5"
            style="height:400px;"
            :style="isMobile
            ? 'filter: blur(0.1px);'
            : 'filter: blur(0.3px);'
            "/>

            <!-- INTERATIVE -->
            <b-row style="max-width:100%;" class="p-5">
                <div class="d-flex align-items-center justify-content-center"
                style="width:100vw; min-height:80vh;">
                    <b-row align-v="center" style="height:100%;"
                    :cols="isMobile ? 1 : null">
                        <b-col style="height:90%; border-radius:50px !important;"
                        :style="isMobile ? 'height:300px; width:100%;' : ''">
                            <div v-if="!isMobile" class="position-absolute d-flex justify-content-center p-5">
                                <span class="font_space"
                                style="color: white; font-weight: 500; letter-spacing: -1.5px; font-size:28px;"
                                > Clique no cubo e arraste </span>
                            </div>
                            <InterativeComponent style="cursor:pointer;"/>
                        </b-col>
                        <b-col class="py-5" style="text-align: start;">
                            <span class="font_space"
                            style="color: black; font-weight: 500; letter-spacing: -1.5px;"
                            :style="isMobile
                            ? 'font-size:18px;'
                            : 'font-size:28px;'
                            ">
                                A tecnologia 3D permite uma visualização fluida e interativa, tornando a navegação e a manipulação do objeto uma experiência imersiva. Com essa animação, você pode explorar como elementos básicos podem ser transformados em uma interface interativa e dinâmica na web.
                            </span>
                        </b-col>
                    </b-row>
                </div>
            </b-row>

            
            <StarryBackground :y_move="-0.001" :size="isMobile ? 4 : 0.5"
            style="height:400px;"
            :style="isMobile
            ? 'filter: blur(0.1px);'
            : 'filter: blur(0.3px);'
            "/>


            <!-- FOOTER -->
            <b-row align-v="center" style="height:60px; max-width:100%;">
                <span class="font_space"
                style="letter-spacing: -1px; font-size: 30px; font-weight:600;"
                :style="isMobile
                ? 'font-size:20px;'
                : 'font-size:30px;'
                "> © {{ date }} Estação Espacial 3D. Todos os direitos reservados. </span>
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
            date: new Date().getFullYear(),
            isMobile: window.innerWidth<1020,
        }
    },
    created(){
        window.addEventListener('resize', () => this.isMobile = window.innerWidth<1020 );
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