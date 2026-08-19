<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo articula dos dimensiones inseparables en el contexto comercial: la negociación y la venta. La primera aporta método, análisis y criterio relacional; la segunda orienta estos recursos hacia la generación de valor para el cliente y el logro de resultados organizacionales sostenibles.
    p A lo largo de su desarrollo, se evidencia que el desempeño exitoso del negociador en ventas depende de la integración de habilidades personales, actitudes adecuadas, comunicación efectiva, comportamiento ético, manejo de objeciones, definición de objetivos claros, técnicas de cierre y conocimiento del M.A.A.N. En conjunto, estos elementos permiten conducir procesos de negociación con preparación, flexibilidad y un enfoque orientado al beneficio mutuo.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que integra los principales aspectos de la negociación como estrategia de ventas. El mapa relaciona las competencias del negociador, las estrategias de negociación, la gestión del proceso de ventas y la formalización de acuerdos comerciales. Asimismo, reúne contenidos asociados con la comunicación, la ética, las técnicas de negociación y venta, el manejo de objeciones, el M.A.A.N., la definición de objetivos y las condiciones comerciales. En conjunto, estos elementos permiten comprender el desarrollo de negociaciones orientadas a generar acuerdos y resultados comerciales sostenibles.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
