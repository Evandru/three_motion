<template>
    <div style="position:absolute; z-index:999;">
        <b-form @submit.prevent="$emit('confirm')">
        <b-col class="login-container" >
            <b-row class="m-0" align-h="center"><span class="login-title">Watch the space</span></b-row>
            <b-row class="m-0" align-h="center">
                <b-form-group
                label="E-mail"
                label-for="inputEmail"
                description="Insert your generic e-mail"
                class="my-0 login-input"
                >
                <b-form-input
                    id="inputEmail"
                    v-model="email"
                    type="email" class="my-2"
                    required
                ></b-form-input>
                </b-form-group>
            </b-row>
            <b-row class="m-0" align-h="center">
                <b-form-group
                label="Password"
                label-for="inputPassword"
                description="Insert your generic password"
                class="my-0 login-input"
                >
                <b-form-input
                    id="inputEmail"
                    type="password" class="my-2"
                    v-model="password"
                    required
                ></b-form-input>
                </b-form-group>
            </b-row>
            <b-row class="m-0 mt-3">
                <b-button type="submit" style="border-radius:10px; font-size:18px; padding:8px 10px;" variant="outline-light"
                >Entrar</b-button>
            </b-row>
            
        </b-col>
        </b-form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login-container{
    width:500px;
    background-color: #ab77c030;
    backdrop-filter: blur(1px);
    padding:30px 30px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px #ab77c070;
}
.login-title{
    color: white;
    font-size:28px;
    font-weight: 900;
    letter-spacing: -1px;
}
.login-input{
    text-align: start;
    color: white;
    padding: 10px 0px;
}
* /deep/ .text-muted{
    color: #FFFFFF90 !important;
}
</style>