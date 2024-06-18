<template>
  <div>
    <iframe :src=" `http://aristafe.com:81/storage/${route.params.url}`" frameborder="0"></iframe>
  </div>
</template>
<!-- 7535365/FES-FEGG643.pdf -->
<style>
.iframe-container iframe {
  width: 100vw; /* 100% del ancho de la ventana */
  height: 100vh; /* 100% del alto de la ventana */
  border: none; /* Elimina el borde del iframe */
}
</style>
