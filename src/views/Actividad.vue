<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer la comprensión de los principios, estrategias y técnicas que intervienen en la negociación y la gestión de ventas para favorecer la toma de decisiones en contextos comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza principalmente a la negociación estratégica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es un proceso planificado para alcanzar acuerdos beneficiosos para las partes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Busca imponer las condiciones de una parte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se basa únicamente en reducir precios.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Evita el análisis previo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La negociación estratégica requiere planificación y análisis para alcanzar acuerdos que generen beneficios para todas las partes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Durante una negociación, ¿qué habilidad permite comprender mejor las necesidades del cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hablar continuamente.', esCorrecta: false },
            { id: 'b', texto: 'Escuchar activamente.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Cambiar constantemente la propuesta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar responder preguntas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La escucha activa facilita comprender los intereses y necesidades del cliente para construir propuestas de valor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Qué significa la sigla M.A.A.N.?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Método de Acuerdos Administrativos Nacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Modelo de Análisis de Acuerdos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejor Alternativa a un Acuerdo Negociado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mecanismo de Acuerdos de Alto Nivel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El M.A.A.N. representa la mejor alternativa disponible cuando no es posible alcanzar un acuerdo satisfactorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Cuando un cliente expresa que el producto es costoso, la mejor respuesta consiste en:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Finalizar la negociación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Ofrecer un descuento inmediato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar únicamente el precio con la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Explicar el valor y los beneficios de la propuesta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Destacar los beneficios y el valor de la propuesta permite responder adecuadamente a este tipo de objeciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la finalidad principal de definir objetivos antes de negociar?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar el proceso hacia resultados claros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el diálogo con el cliente.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Eliminar las concesiones.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar el tiempo de negociación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Establecer objetivos claros permite orientar la negociación y evaluar el logro de los resultados esperados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué fase del proceso de negociación permite identificar intereses y necesidades de las partes?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cierre.', esCorrecta: false },
            { id: 'b', texto: 'Exploración.', esCorrecta: true },
            { id: 'c', texto: 'Seguimiento.', esCorrecta: false },
            { id: 'd', texto: 'Evaluación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Durante la exploración se recopila información que facilita comprender las expectativas de las partes involucradas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué técnica de cierre resume los beneficios antes de solicitar la decisión del cliente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cierre consultivo.', esCorrecta: false },
            { id: 'b', texto: 'Cierre por alternativa.', esCorrecta: false },
            { id: 'c', texto: 'Cierre por resumen.', esCorrecta: true },
            { id: 'd', texto: 'Cierre prematuro.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El cierre por resumen destaca los beneficios acordados para facilitar la decisión final del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué actitud fortalece una negociación ética?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Manipular información.', esCorrecta: false },
            { id: 'b', texto: 'Presionar al cliente.', esCorrecta: false },
            { id: 'c', texto: 'Omitir datos importantes.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Actuar con transparencia y respeto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La transparencia y el respeto fortalecen la confianza y favorecen relaciones comerciales duraderas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es uno de los elementos clave de la negociación estratégica?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La preparación previa.', esCorrecta: true },
            { id: 'b', texto: 'La improvisación.', esCorrecta: false },
            { id: 'c', texto: 'La presión comercial.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La competencia entre vendedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Una adecuada preparación permite analizar la información y afrontar la negociación con mayor seguridad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué permite el conocimiento del M.A.A.N.?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aceptar cualquier propuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comparar una oferta con la mejor alternativa disponible.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Evitar analizar riesgos.', esCorrecta: false },
            { id: 'd', texto: 'Negociar sin preparación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Comparar las propuestas con el M.A.A.N. facilita tomar decisiones estratégicas durante la negociación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Si un cliente afirma que no necesita el producto, el negociador debe:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Cancelar la negociación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Cambiar inmediatamente de producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar la necesidad y demostrar el valor de la solución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Insistir sin escuchar al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Identificar las necesidades reales del cliente permite presentar soluciones acordes con sus expectativas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué documento formaliza los compromisos alcanzados durante una negociación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La orden de compra.', esCorrecta: false },
            { id: 'b', texto: 'La propuesta verbal.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El cronograma de actividades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El contrato o acuerdo comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los contratos y acuerdos comerciales brindan seguridad jurídica y formalizan los compromisos asumidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué característica debe tener un objetivo de negociación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ser específico y medible.', esCorrecta: true },
            { id: 'b', texto: 'Ser ambiguo.', esCorrecta: false },
            { id: 'c', texto: 'Cambiar constantemente.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Basarse únicamente en el precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los objetivos específicos y medibles facilitan orientar y evaluar el proceso de negociación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Cuál es una causa frecuente de las objeciones en ventas?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exceso de promociones.', esCorrecta: false },
            {
              id: 'b',
              texto: 'El cliente no percibe suficiente valor en la propuesta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El vendedor conoce muy bien el producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cliente ya tomó la decisión de comprar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las objeciones suelen surgir cuando el cliente necesita mayor información para reconocer el valor de la propuesta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué elemento fortalece el poder negociador?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La improvisación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La presión sobre la contraparte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contar con alternativas disponibles.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Reducir la comunicación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Disponer de alternativas fortalece la posición del negociador y favorece decisiones más objetivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es una condición comercial que suele negociarse con el cliente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El uniforme del vendedor.', esCorrecta: false },
            { id: 'b', texto: 'El horario de la empresa.', esCorrecta: false },
            { id: 'c', texto: 'La misión organizacional.', esCorrecta: false },
            {
              id: 'd',
              texto: 'El plazo de entrega del producto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Aspectos como los plazos de entrega hacen parte de las condiciones comerciales que pueden acordarse entre las partes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué busca la generación de opciones durante una negociación?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Construir alternativas de solución para alcanzar acuerdos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar todas las propuestas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la participación del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Finalizar rápidamente la negociación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Generar diferentes alternativas aumenta las posibilidades de lograr acuerdos beneficiosos para ambas partes.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Cuál es uno de los propósitos del manejo de objeciones?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convencer al cliente mediante presión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resolver dudas y fortalecer la confianza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar responder preguntas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el precio del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Resolver las objeciones permite fortalecer la confianza del cliente y facilitar el avance de la negociación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué efecto tiene aplicar adecuadamente el M.A.A.N.?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reduce la preparación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Obliga a aceptar cualquier acuerdo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Favorece decisiones informadas y estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina todas las alternativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Aplicar el M.A.A.N. permite evaluar objetivamente las propuestas antes de tomar una decisión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante considerar los costos de envío y distribución durante una negociación comercial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplazan el contrato comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque eliminan las objeciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque solo interesan al proveedor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque influyen en el costo final y en las condiciones del acuerdo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    // parrafo: {
    //   tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
    //   titulo: 'Completar frases',
    //   introduccion:
    //     '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
    //   instruccion:
    //     'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
    //   imagen: '@/assets/actividad/imagen1.png',
    //   barajarPreguntas: true,
    //   textos: [
    //     {
    //       id: 1,
    //       texto:
    //         'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
    //       respuesta: 'presupuesto',
    //     },
    //     {
    //       id: 2,
    //       texto:
    //         'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
    //       respuesta: 'disciplina',
    //     },
    //     {
    //       id: 3,
    //       texto:
    //         'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
    //       respuesta: 'planifica',
    //     },
    //     {
    //       id: 4,
    //       texto:
    //         'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
    //       respuesta: 'discrecional',
    //     },
    //     {
    //       id: 5,
    //       texto:
    //         'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
    //       respuesta: 'recursos',
    //     },
    //     {
    //       id: 6,
    //       texto:
    //         'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
    //       respuesta: 'resultados',
    //     },
    //     {
    //       id: 7,
    //       texto:
    //         'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
    //       respuesta: 'utilidad',
    //     },
    //     {
    //       id: 8,
    //       texto:
    //         'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
    //       respuesta: 'estrés',
    //     },
    //     {
    //       id: 9,
    //       texto:
    //         'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
    //       respuesta: 'disciplina',
    //     },
    //     {
    //       id: 10,
    //       texto:
    //         'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
    //       respuesta: 'emergencia',
    //     },
    //   ],
    // },
  }),
}
</script>
