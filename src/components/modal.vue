<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const msg: any = ref<string>('');
const route: any = useRoute();


onMounted(() => {
  msg.value = JSON.parse(route.params.message) // Actualiza msg cuando el parámetro cambie

});
</script>
<template>
  <h3
    :style="msg.StatusCode == '00' ? 'background-color: green; color: white' : msg.StatusCode == '99' ? 'background-color: red; color: white' : 'background-color: red; color: white'">
    {{ msg.message }}</h3>
  <h4>{{ msg.StatusDescription }}</h4>
  <div>
    <ul v-if="Array.isArray(msg.errores)">
      <li v-for="(item, index) in msg.errores" :key="index">{{ item }}</li>
    </ul>
    <p v-else>{{ msg.errores }}</p>
  </div>
  <div class="flex-container" style="display: flex; justify-content: space-between; margin-top: 50px;">
    <span>{{ msg.Created }}</span>
    <span>{{ msg.envioCorreo ? 'Correo enviado' : "Correo no enviado" }}</span>
  </div>
  <div class="flex-container" style="display: block; margin-top: 50px;">
    <div>Dias restantes para el vencimiento de certificado: {{ msg.certificate_days_left }}</div>
    <div>Dias restantes para el vencimiento de la resolucion: {{ msg.resolution_days_left }}</div>
    <div>CUFE: {{ msg.cufe ?? msg.cude }}</div>
  </div>
</template>
<style scoped>
ul {
  padding: 0;
  margin: 0;
  text-align: justify;
}

li {
  margin-bottom: 10px;
}
</style>