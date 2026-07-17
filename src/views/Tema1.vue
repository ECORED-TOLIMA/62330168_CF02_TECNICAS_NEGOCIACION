<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Implementación de técnicas de negociación
    
      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Desarrollo de habilidades personales y actitudes para la negociación
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Habilidades para tratar con las personas en la negociación
      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Actitudes en la negociación
      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Habilidades de comunicación
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Ética de la negociación
      separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.6 Técnicas de negociación aplicadas
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
