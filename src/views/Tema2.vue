<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de venta y negociación hasta el cierre
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Técnicas de negociación en ventas
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Técnicas en ventas efectivas
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Manejo de objeciones
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Negociación estratégica
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Cierre de ventas
    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Definición de objetivos: establecer metas claras
    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.7 Mejor Alternativa a un Acuerdo Negociado - M.A.A.N.
    separador
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.8 Contratos y acuerdos comerciales
    separador
    #t_2_9.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.9 Condiciones comerciales de la negociación
    separador
    #t_2_10.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.10 Costos de envío y distribución en el proceso de venta
</template>

<script>
export default {
  name: 'Tema2',
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
