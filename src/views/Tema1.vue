<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Implementación de técnicas de negociación
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-down") La implementación de técnicas de negociación exige comprender que el desempeño del negociador no depende solo del dominio de tácticas puntuales, sino de la integración entre preparación, lectura del contexto, comunicación y conducta profesional. En consecuencia, el proceso de formación debe desarrollar competencias personales y sociales que permitan convertir la interacción comercial en una oportunidad para crear confianza y valor compartido.
      p.mb-4(data-aos="fade-down") Las habilidades que se necesitan dependen del entorno, el resultado deseado y las partes involucradas. A continuación, se presenta algunas habilidades clave de negociación que se aplican a muchas situaciones:
      .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
        .col-lg-7.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
          LineaTiempoD.color-acento-botones.especial
            .row(numero="1" titulo="Comunicación")
              .col-12.mb-4.mb-md-0
                p.mb-0 Las habilidades de comunicación esenciales incluyen la identificación de señales no verbales y la capacidad de expresarse de manera clara y atractiva. Además, es fundamental comprender el flujo natural de la conversación y solicitar retroalimentación de forma constante. Las habilidades de escucha activa también son cruciales para comprender a la otra parte; al establecer una comunicación clara y efectiva, se evitan malentendidos que podrían dificultar la llegada a un compromiso.
            .row(numero="2" titulo="Persuasión")
              .col-12.mb-4.mb-md-0
                p.mb-0 La capacidad de influir en los demás es una habilidad importante para la negociación. Puede ayudar a definir por qué la solución propuesta es beneficiosa para todas las partes y alentar a otros a apoyar su punto de vista.
            .row(numero="3" titulo="Planificación")
              .col-12.mb-4.mb-md-0
                p.mb-0 Para llegar a un acuerdo que beneficie a ambas partes, es crucial considerar cómo las consecuencias afectarán a todos a largo plazo. La capacidad de planificación es necesaria no solo para el proceso de negociación, sino también para decidir cómo se llevarán a cabo los términos.
            .row(numero="4" titulo="Elaboración de estrategias")
              .col-12.mb-4.mb-md-0
                p.mb-0 Los mejores negociadores entran en una discusión con al menos un plan de respaldo. Deben considerarse todos los posibles resultados y estar preparado para cada uno de estos escenarios.
        .col-lg-3.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/img02.png', alt='Imagen decorativa')
      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Desarrollo de habilidades personales y actitudes para la negociación
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img03.jpg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.c5.p-4
            .row
              .col.col-lg-auto.d-none.d-lg-block.mb-lg-4
                figure
                  img(src='@/assets/curso/temas/t1/img04.svg', alt='Imagen decorativa')
              .col.col-lg-12
                p.mb-4(data-aos="fade-down") El negociador comercial requiere habilidades personales que le permitan actuar con equilibrio ante la presión, claridad frente a los objetivos y flexibilidad en escenarios cambiantes. Estas habilidades no surgen de manera improvisada, se fortalecen mediante una preparación consciente, la práctica deliberada y la reflexión permanente sobre el propio estilo de interacción y toma de decisiones.
      .row.justify-content-center.mb-5
        .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img05.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") Entre las habilidades más relevantes se encuentran el autocontrol, la capacidad analítica, la escucha activa, la persuasión basada en argumentos y la planeación de alternativas. Desde la perspectiva de la negociación por principios, la preparación y la identificación de intereses son claves para evitar que la conversación se reduzca a posiciones rígidas o a decisiones impulsivas.
          p.mb-0(data-aos="fade-down") En ventas, estas habilidades permiten interpretar mejor las motivaciones del cliente, identificar oportunidades de acuerdo y proponer soluciones ajustadas a necesidades reales.  
      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .tarjeta.position-relative.p-4.pt-5(style="background-color: #FFE2C3;")
            div(style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px;")
              img(src='@/assets/curso/temas/bg/img01.svg', alt='Imagen decorativa')
            p.text-regular.text-center.mb-0.pt-3 Un vendedor que domina estas capacidades no se limita a defender una oferta, sino que guía el proceso hacia un acuerdo viable y sostenible.
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img06.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-2
          .tarjeta.tarjeta--c1.p-4
            .row
              p.mb-4(data-aos="fade-down") La seguridad personal, la apertura al diálogo y la disposición para construir soluciones conjuntas favorecen la creación de relaciones comerciales más estables. Por el contrario, la improvisación, la rigidez o la necesidad de ganar a toda costa debilitan la confianza y reducen la posibilidad de alcanzar acuerdos duraderos.
              p.mb-0(data-aos="fade-down") Consulte la siguiente tabla para identificar cómo las habilidades personales aportan al proceso de negociación y su aplicación directa en ventas:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span Tipos de habilidades
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Habilidad personal
                  th(data-aos="fade-down")(style= "width: 40%") Aporte al proceso de negociación
                  th(data-aos="fade-down")(style= "width: 40%") Aplicación en ventas
              tbody
                tr
                  td(data-aos="fade-down") Autocontrol.
                  td(data-aos="fade-down") Permite mantener estabilidad emocional y responder con criterio ante la presión.
                  td(data-aos="fade-down") Ayuda a manejar objeciones sin reaccionar de forma defensiva.
                tr
                  td(data-aos="fade-down") Análisis.
                  td(data-aos="fade-down") Facilita interpretar información, intereses y escenarios posibles.
                  td(data-aos="fade-down") Permite ajustar la propuesta al perfil y necesidad del cliente.
                tr
                  td(data-aos="fade-down") Escucha activa.
                  td(data-aos="fade-down") Mejora la comprensión de motivaciones y expectativas.
                  td(data-aos="fade-down") Favorece la identificación de necesidades de compra.
                tr
                  td(data-aos="fade-down") Persuasión ética.
                  td(data-aos="fade-down") Sustenta la influencia en argumentos de valor y no en manipulación.
                  td(data-aos="fade-down") Incrementa la credibilidad de la oferta comercial.
                tr
                  td(data-aos="fade-down") Planeación.
                  td(data-aos="fade-down") Ayuda a prever alternativas, límites y concesiones posibles.
                  td(data-aos="fade-down") Fortalece la preparación antes de presentar condiciones de venta.
      p(data-aos="fade-down") La tabla anterior indica que las habilidades personales sostienen el desempeño estratégico del negociador y permiten pasar de una lógica reactiva a una lógica de anticipación.
      p.mb-4(data-aos="fade-down") El proceso de negociación es subjetivo y depende del carácter de la persona negociadora. Para lograr un éxito en esta estrategia el negociador debe tener las siguientes habilidades personales y técnicas orientadas a la negociación, la cuales presenta el sitio <em>web</em> ISPROX:
      .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
        SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img07.svg' alt='AvatarTop')
            h4.text-center Autoconocimiento del problema
            p Es fundamental identificar el origen del problema o de la diferencia, así como reconocer las fortalezas y debilidades de la empresa, con el fin de encontrar puntos de encuentro que hagan viable la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img08.svg' alt='AvatarTop')
            h4.text-center Escucha activa
            p Consiste en escuchar atentamente a la contraparte, manteniendo silencio oportuno para comprender su propuesta y recopilar información relevante que contribuya a la construcción del acuerdo.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img09.svg' alt='AvatarTop')
            h4.text-center Empatía
            p Esta cualidad permite comprender cómo se siente la contraparte e identificar sus necesidades o intereses. A través de la observación de la postura corporal, el tono de voz y las expresiones faciales, es posible obtener información clave para la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img10.svg' alt='AvatarTop')
            h4.text-center Autocontrol
            p Implica la capacidad de observar y escuchar con atención, identificando tanto las emociones propias como las de la contraparte. El control de las reacciones personales favorece una actuación equilibrada y estratégica durante la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img11.svg' alt='AvatarTop')
            h4.text-center Paciencia
            p Es un elemento fundamental del proceso de negociación, ya que permite analizar la situación con mayor perspectiva. Estar preparado para la espera, que en ocasiones funciona como un factor de presión, ayuda a respetar el ritmo y el tiempo que requiere la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img12.svg' alt='AvatarTop')
            h4.text-center Comunicación asertiva
            p Se refiere a la capacidad de expresarse de manera clara y concreta, transmitiendo firmeza en los aportes, opiniones y posturas, sin excederse ni resultar ofensivo. Esta forma de comunicación facilita el entendimiento en las relaciones comerciales.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img13.svg' alt='AvatarTop')
            h4.text-center Visión amplia
            p Consiste en la disposición para recibir diversas propuestas que generan múltiples alternativas, permitiendo negociar y seleccionar la opción más adecuada de acuerdo con los objetivos e intereses establecidos.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img14.svg' alt='AvatarTop')
            h4.text-center Persuasión
            p Es la capacidad de argumentar de manera lógica y fundamentada para influir en la contraparte, generar confianza y proyectar una imagen sólida que facilite avances en la negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img15.svg' alt='AvatarTop')
            h4.text-center Flexibilidad
            p Reconoce que la contraparte también busca alcanzar beneficios, por lo que el negociador debe estar dispuesto a ceder en determinados momentos. Esta flexibilidad permite adaptarse a imprevistos y favorece la construcción de acuerdos equilibrados.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img16.svg' alt='AvatarTop')
            h4.text-center Tolerancia al riesgo
            p Implica mantener una actitud de calma y alerta moderada al asumir riesgos, entendiendo que estos forman parte natural del proceso de negociación.
          .tarjeta.tarjeta--bg01.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/t1/img17.svg' alt='AvatarTop')
            h4.text-center Capacidad para tomar decisiones
            p Esta habilidad se fortalece con la experiencia y resulta clave para cerrar acuerdos oportunamente, procurando obtener los mejores resultados posibles.
      .row.justify-content-center.mb-0
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img18.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") Para que el negociador tenga éxito, es necesario que fortalezca una serie de habilidades y actitudes que le permitan estar bajo presión, tener autocontrol, escuchar atentamente, tener capacidad de análisis para proponer, refutar, concertar, conciliar y ceder obteniendo los mejores resultados.
          .tarjeta.tarjeta--c3.p-4
            .col.col-lg-12
              p.mb-0(data-aos="fade-down") En síntesis, el desarrollo de habilidades personales y actitudes para la negociación constituye la base del desempeño comercial efectivo, su fortalecimiento incrementa la capacidad para actuar con seguridad, argumentar con claridad y construir acuerdos coherentes con los objetivos de venta y con las relaciones de largo plazo.
      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2 Habilidades para tratar con las personas en la negociación
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img19.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") La negociación ocurre entre personas que interpretan la realidad desde intereses, emociones, expectativas y experiencias distintas. Por esta razón, tratar con las personas de manera adecuada es una competencia central en cualquier proceso comercial, pues permite reducir tensiones, comprender percepciones y orientar la interacción hacia soluciones razonables.
          .cajon.c2.color-secundario.p-4
            p(data-aos="fade-down") Una de las ideas centrales de la negociación por principios consiste en separar a las personas del problema, este planteamiento reconoce que las relaciones pueden verse afectadas por malentendidos, prejuicios o reacciones emocionales, y que el negociador debe evitar personalizar el conflicto para concentrarse en los intereses y en las opciones de solución.
      p(data-aos="fade-down") En las ventas, esta habilidad se expresa en acciones concretas: escuchar sin interrumpir, formular preguntas que clarifiquen la necesidad, validar preocupaciones del cliente y responder con respeto incluso cuando la contraparte presenta desacuerdos. Además, la empatía estratégica permite identificar cómo percibe la otra parte la propuesta y qué condiciones necesita para avanzar hacia el cierre.
      p(data-aos="fade-down") El conjunto de habilidades blandas como inteligencia emocional, empatía y comunicación son fundamentales para gestionar el factor humano en un acuerdo. Se centra en comprender la percepción de la contraparte sobre el problema, gestionar las emociones y resolver conflictos para lograr resultados positivos y duraderos. 
      p.mb-4(data-aos="fade-down") Los componentes clave de las habilidades blandas son:
      .row.mb-4.justify-content-center
        .col.col-lg-12
          .row
            .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/img20.svg' alt='Imagen decorativa')
                .tarjeta.color-primario
                  .p-4
                    h4.text-center La percepción
                    p.mb-0 Implica comprender la perspectiva, intereses y miedos subyacentes de la contraparte, en lugar de centrarse solo en sus palabras.
            .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/img21.svg' alt='Imagen decorativa')
                .tarjeta.color-primario
                  .p-4
                    h4.text-center La emoción
                    p.mb-0 Requiere inteligencia emocional para mantener la calma bajo presión, empatía para reconocer los sentimientos del otro y autocontrol para evitar reacciones impulsivas.
            .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/t1/img22.svg' alt='Imagen decorativa')
                .tarjeta.color-primario
                  .p-4
                    h4.text-center La gestión de conflictos
                    p.mb-0 Utiliza técnicas como la comunicación efectiva y la escucha activa para transformar confrontaciones en colaboración, buscando soluciones que satisfagan a ambas partes.
      p.mb-4(data-aos="fade-down") Estas habilidades son parte del "método Harvard" de negociación, que busca separar a las personas del problema y enfocarse en intereses, no en posiciones.
      .row.justify-content-center.mb-4
        .col-lg-10.col-12.order-lg-2.order-2
          .tarjeta.tarjeta--c3.p-4
            .row.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/t1/img23.svg', alt='Imagen decorativa')
              .col-lg-10.col-12
                p.mb-0(data-aos="fade-down") También es importante reconocer que la relación con el cliente no se limita al momento de la transacción. La forma en que se gestionan las interacciones influye directamente en la confianza, la recomendación y la posibilidad de futuras negociaciones. Por ello, el trato interpersonal debe orientarse a la construcción de valor relacional, además del valor económico.
      p.mb-4(data-aos="fade-down") A partir de lo anterior, se presenta la esta tabla, que sintetiza las principales habilidades interpersonales presentes en la negociación, su descripción y el efecto esperado que generan en el desarrollo del proceso negociador y en la construcción de acuerdos sostenibles:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            span Habilidades interpersonales presentes en la negociación
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Habilidad interpersonal
                  th(data-aos="fade-down")(style= "width: 40%") Descripción
                  th(data-aos="fade-down")(style= "width: 40%") Efecto esperado en la negociación
              tbody
                tr
                  td(data-aos="fade-down") Empatía.
                  td(data-aos="fade-down") Comprender la perspectiva y la situación de la contraparte.
                  td(data-aos="fade-down") Reduce resistencia y mejora la conexión comunicativa.
                tr
                  td(data-aos="fade-down") Gestión emocional.
                  td(data-aos="fade-down") Reconocer emociones propias y ajenas para evitar escalamiento del conflicto.
                  td(data-aos="fade-down") Facilita conversaciones más estables y productivas.
                tr
                  td(data-aos="fade-down") Formulación de preguntas.
                  td(data-aos="fade-down") Indagar intereses, razones y condiciones del cliente.
                  td(data-aos="fade-down") Permite descubrir necesidades no explícitas.
                tr
                  td(data-aos="fade-down") Respeto relacional.
                  td(data-aos="fade-down") Reconocer a la otra parte como interlocutor legítimo.
                  td(data-aos="fade-down") Fortalece la confianza y la disposición a negociar. 
                tr
                  td(data-aos="fade-down") Manejo de conflictos.
                  td(data-aos="fade-down") Reconducir desacuerdos hacia alternativas de solución. 
                  td(data-aos="fade-down") Favorece acuerdos sostenibles y evita rupturas prematuras.
      p.mb-4(data-aos="fade-down") La tabla anterior evidencia que la negociación eficaz requiere habilidades blandas concretas y observables, no solo conocimientos conceptuales.
      p.mb-0(data-aos="fade-down") En consecuencia, tratar con las personas en la negociación implica comprender que cada interacción comercial tiene una dimensión humana que debe ser gestionada con inteligencia y respeto. Cuando esta dimensión se atiende de manera adecuada, aumenta la posibilidad de construir acuerdos duraderos y experiencias de compra satisfactorias.
      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3 Actitudes en la negociación
      p.mb-4(data-aos="fade-down") La actitud en la negociación es la disposición mental, emocional y comportamental que se evidencia en los gestos, tono y postura con la que una persona afronta el proceso, definiendo cómo interactúa con la contraparte y evalúa la situación. Las principales actitudes incluyen la colaborativa, competitiva, adaptativa y de respeto. 
      .titulo-tercer-nivel.mb-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/t1.svg')
        h4.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de actitudes en la negociación
      .row
        .col-12
          .px-0.py-4
            .row.align-items-center.bg03(data-aos="fade-down")
              .col-lg-4.d-none.d-lg-block.py-4.px-2
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/temas/t1/img24.png", alt="Imagen decorativa")
              .col-lg-8.px-0.py-4
                p Los tipos de actitudes en la negociación se definen de acuerdo con fines específicos, encontrando:
                SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img25.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Colaborativa
                    p Busca soluciones conjuntas que beneficien a las partes interesadas, enfocándose en intereses comunes.
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img26.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Competitiva
                    p Orientada a maximizar el resultado propio, tratando la negociación como una controversia donde uno debe ganar y el otro perder.
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img27.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Adaptativa o acomodaticia
                    p Se cede ante los intereses de la contraparte para mantener la relación o por falta de confianza, buscando evitar el conflicto.
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img28.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Respetuosa y empática
                    p Entiende que la otra parte tiene intereses legítimos, fomentando la confianza y una mejor comunicación.
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img29.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Propositiva
                    p Enfocada en buscar soluciones y crear opciones, evitando juicios prematuros.
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img30.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Segura y firme
                    p Demuestra confianza en uno mismo y en la propia preparación, evitando la "negociación blanda".
                  .tarjeta.tarjeta--slyder.p-4.py-2
                    .row.justify-content-center.mb-3
                      .col-6.col-lg-6
                        img(src="@/assets/curso/temas/t1/img31.svg", alt="Imagen decorativa").img100.m-auto
                    h4 Flexible
                    p Capacidad de adaptarse a cambios en el escenario y modificar el enfoque según sea necesario.
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img32.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") Una actitud colaborativa busca comprender intereses comunes y encontrar beneficios mutuos, mientras que una actitud estrictamente competitiva se concentra en maximizar el resultado propio. En entornos comerciales sostenibles, las actitudes colaborativas y estratégicamente firmes suelen ser más efectivas que las posturas rígidas o impositivas, porque combinan claridad en los objetivos con apertura al acuerdo.
          p.mb-0(data-aos="fade-down") También deben reconocerse las actitudes bloqueantes. El miedo al conflicto, la necesidad de agradar, la desconfianza excesiva o el individualismo extremo pueden afectar la calidad de la negociación y llevar al negociador a ceder sin criterio o a cerrar oportunidades de acuerdo. A continuación, se presentan los tipos de actitudes presentes en la negociación:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Tipos de actitudes necesarias en la negociación
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Tipo de actitud
                  th(data-aos="fade-down")(style= "width: 40%") Rasgos principales
                  th(data-aos="fade-down")(style= "width: 40%") Riesgo u oportunidad en ventas
              tbody
                tr
                  td(data-aos="fade-down") Colaborativa.
                  td(data-aos="fade-down") Busca soluciones de beneficio mutuo.
                  td(data-aos="fade-down") Favorece relaciones de largo plazo y fidelización.
                tr
                  td(data-aos="fade-down") Competitiva.
                  td(data-aos="fade-down") Prioriza el logro unilateral del resultado.
                  td(data-aos="fade-down") Puede cerrar acuerdos rápidos, pero deteriora la relación.
                tr
                  td(data-aos="fade-down") Flexible.
                  td(data-aos="fade-down") Se adapta a cambios del contexto y a nuevas opciones.
                  td(data-aos="fade-down") Permite ajustar la propuesta sin perder el objetivo.
                tr
                  td(data-aos="fade-down") Firme y segura.
                  td(data-aos="fade-down") Defiende criterios y límites con claridad.
                  td(data-aos="fade-down") Ayuda a evitar concesiones improcedentes.
                tr
                  td(data-aos="fade-down") Empática y respetuosa.
                  td(data-aos="fade-down") Reconoce intereses legítimos de la contraparte. 
                  td(data-aos="fade-down") Incrementa confianza y apertura al diálogo.
                tr
                  td(data-aos="fade-down") Bloqueante.
                  td(data-aos="fade-down") Surge desde miedo, desconfianza o necesidad de aprobación.
                  td(data-aos="fade-down") Debilita el control del proceso negociador. 
      p.mb-4(data-aos="fade-down") La revisión de estas actitudes permite entender que el éxito comercial no depende de adoptar una postura complaciente ni agresiva, sino de sostener una conducta profesional, orientada al análisis y al respeto.
      .titulo-tercer-nivel.mb-4(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/t1.svg')
        h4.titulo-tercer-nivel__text.mb-0.px-0.py-2 Actitudes bloqueantes a evitar
      p.mb-4(data-aos="fade-down") Las actitudes bloqueantes son aquellas que no se deben suscitar en medio de una negociación, porque su efecto sería la pérdida. Las más comunes son:
      .tarjeta--container.row.mb-5
        .col-lg.col-12.tarjeta.tarjeta--c1.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img33.svg', alt='Imagen decorativa')  
          h2.text-center Miedo al conflicto
          p Se manifiesta como la incapacidad de abordar desacuerdos o situaciones tensas por temor a generar confrontaciones. Esta actitud conduce a evitar temas clave, ceder de manera innecesaria o aceptar condiciones desfavorables, impidiendo que los problemas se traten de forma abierta y constructiva.
        .col-lg.col-12.tarjeta.tarjeta--c7.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='Imagen decorativa')
          h2.text-center Necesidad de agradar
          p Consiste en priorizar la aprobación de la contraparte por encima de los propios intereses y objetivos. Quien adopta esta actitud tiende a hacer concesiones excesivas, evita expresar desacuerdos y pierde capacidad de negociación, lo que debilita su posición y afecta el equilibrio del acuerdo.
        .col-lg.col-12.tarjeta.tarjeta--c3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img35.svg', alt='Imagen decorativa')
          h2.text-center Desconfianza
          p Se expresa mediante una postura defensiva constante, sospecha de las intenciones de la contraparte y resistencia a compartir información. Esta actitud dificulta la comunicación, limita la cooperación y genera un clima tenso que obstaculiza la construcción de acuerdos basados en la transparencia y el beneficio mutuo.
        .col-lg.col-12.tarjeta.tarjeta--c8.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t1/img36.svg', alt='Imagen decorativa')  
          h2.text-center Extremo individualismo
          p Ocurre cuando se ignoran las necesidades, intereses y expectativas de la contraparte, enfocándose únicamente en el beneficio propio. Esta postura rompe el principio de reciprocidad, genera resistencia y reduce la probabilidad de lograr acuerdos sostenibles y relaciones comerciales duraderas.
      .row.justify-content-center.mb-0
        .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img37.jpg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-1.order-2
          .row.align-items-center
            p Otras actitudes como la colaborativa, la competitiva, la adaptativa, la respetuosa, la propositiva, la segura y la flexible responden a una clasificación pertinente, ya que evidencian que la negociación puede orientarse tanto hacia la cooperación como hacia el enfrentamiento. En este sentido, el proceso de aprendizaje debe promover aquellas actitudes que contribuyan a la generación de valor y al mantenimiento de relaciones funcionales y sostenibles.
            .col.col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img38.svg', alt='Imagen decorativa')
            .col.col-lg-10
              p.mb-0(data-aos="fade-down") En conclusión, las actitudes en la negociación condicionan la manera como se construye el intercambio y se alcanzan los acuerdos. Formar negociadores con actitud colaborativa, firme, empática y flexible favorece procesos de venta más éticos, más estables y más alineados con la lógica de generación de valor.
      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4 Habilidades de comunicación
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img39.png', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") La comunicación es el medio a través del cual se expresan propuestas, se interpretan necesidades y se validan acuerdos. Por ello, constituye una habilidad estructural dentro de la negociación y, en particular, en los contextos de ventas donde la claridad, la escucha y la argumentación determinan la calidad de la interacción comercial.
          .cajon.c2.color-secundario.p-4
            p.mb-2(data-aos="fade-down") Una comunicación efectiva no consiste solo en hablar con fluidez, sino en construir mensajes comprensibles, oportunos y orientados al propósito del proceso. Esto incluye formular preguntas relevantes, explicar beneficios con precisión, verificar comprensión y atender señales verbales y no verbales del cliente.
      p(data-aos="fade-down") El método SPIN aporta una perspectiva útil porque organiza la conversación en torno a preguntas sobre situación, problema, implicación y necesidad. Este enfoque permite que el cliente participe activamente en la identificación de su problemática y perciba la propuesta comercial como respuesta pertinente a una necesidad real.
      p(data-aos="fade-down") Del mismo modo, la escucha activa es esencial para evitar respuestas genéricas o prematuras. Escuchar activamente implica atender el contenido, el contexto y la intención del mensaje, con el fin de responder de manera ajustada y generar confianza comunicativa.
      p.mb-4(data-aos="fade-down") La siguiente tabla ejemplifica un poco cada componente que hace parte dentro de la comunicación y relaciona su funcionalidad:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Tipos de actitudes necesarias en la negociación
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Componente comunicativo
                  th(data-aos="fade-down")(style= "width: 40%") Función dentro de la negociación
                  th(data-aos="fade-down")(style= "width: 40%") Ejemplo aplicado
              tbody
                tr
                  td(data-aos="fade-down") Escucha activa.
                  td(data-aos="fade-down") Comprender necesidades y objeciones con precisión. 
                  td(data-aos="fade-down") Identificar si la objeción es de precio, confianza o tiempo.
                tr
                  td(data-aos="fade-down") Preguntas estratégicas.
                  td(data-aos="fade-down") Guiar al cliente hacia el reconocimiento de su necesidad.
                  td(data-aos="fade-down") Aplicar preguntas SPIN para profundizar en el problema.
                tr
                  td(data-aos="fade-down") Argumentación basada en valor.
                  td(data-aos="fade-down") Explicar beneficios y pertinencia de la propuesta.
                  td(data-aos="fade-down") Mostrar cómo la oferta resuelve un problema específico.
                tr
                  td(data-aos="fade-down") Claridad del mensaje.
                  td(data-aos="fade-down") Evitar ambigüedades y malentendidos. 
                  td(data-aos="fade-down") Presentar condiciones, plazos y alcance sin tecnicismos innecesarios.
                tr
                  td(data-aos="fade-down") Retroalimentación.
                  td(data-aos="fade-down") Confirmar que la información fue comprendida.
                  td(data-aos="fade-down") Preguntar al cliente si la propuesta responde a su expectativa.
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img40.svg', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") La tabla evidencia que la comunicación es tanto un recurso técnico como una competencia relacional.
          p.mb-0(data-aos="fade-down") En síntesis, las habilidades de comunicación permiten que la negociación en ventas progrese desde la exploración de necesidades hasta la construcción de compromisos claros y viables. Sin una comunicación efectiva, incluso una propuesta técnicamente sólida puede fracasar debido a la falta de comprensión mutua, confianza o pertinencia frente a las expectativas del cliente.
      separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.5 Ética de la negociación
      p.mb-5(data-aos="fade-down") La ética de la negociación se refiere al conjunto de principios que orientan la conducta del negociador para distinguir entre prácticas aceptables y prácticas inadecuadas durante el proceso de acuerdo. En los entornos comerciales, esta dimensión es decisiva porque la rentabilidad de corto plazo no justifica acciones que deterioren la confianza, la reputación o la sostenibilidad de la relación con el cliente.
      .row.justify-content-center.mb-4
        .col.col-lg-10.col-12
          .tarjeta.position-relative.p-4.pt-5(style="background-color: #FFE2C3;")
            div(style="position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px;")
              img(src='@/assets/curso/temas/bg/img01.svg', alt='Imagen decorativa')
            p.text-regular.text-center.mb-0.pt-3 Negociar éticamente implica decir la verdad, evitar la manipulación de la información, cumplir los compromisos y reconocer a la contraparte como actor legítimo del proceso.
      .row.justify-content-center.mb-4
        .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img41.png', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          p.mb-4(data-aos="fade-down") Las prácticas poco éticas, como la tergiversación de datos, las promesas falsas o la presión emocional indebida, pueden generar una ventaja inmediata, pero suelen afectar la confianza y comprometer futuras oportunidades comerciales; por esta razón, la ética no debe asumirse como un complemento opcional, sino como parte estructural de la competencia negociadora.
          p.mb-4(data-aos="fade-down") En ventas, la ética también se expresa en la adecuación entre la necesidad del cliente y la solución ofrecida: un vendedor ético no induce decisiones inconvenientes para alcanzar metas de corto plazo, sino que construye propuestas coherentes con la situación real del comprador.
          p.mb-0(data-aos="fade-down") A continuación, se presenta la relación entre principio ético, conducta asociada e impacto esperado: 
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5.
            span Relación entre principio ético y conducta asociada
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Principio ético
                  th(data-aos="fade-down")(style= "width: 40%") Conducta asociada
                  th(data-aos="fade-down")(style= "width: 40%") Impacto esperado
              tbody
                tr
                  td(data-aos="fade-down") Honestidad.
                  td(data-aos="fade-down") Presentar información veraz y verificable.
                  td(data-aos="fade-down") Incrementa credibilidad y confianza.
                tr
                  td(data-aos="fade-down") Transparencia.
                  td(data-aos="fade-down") Explicar condiciones y límites de la oferta.
                  td(data-aos="fade-down") Reduce malentendidos y reclamos posteriores.
                tr
                  td(data-aos="fade-down") Responsabilidad.
                  td(data-aos="fade-down") Asumir consecuencias de lo acordado. 
                  td(data-aos="fade-down") Favorece cumplimiento y continuidad comercial.
                tr
                  td(data-aos="fade-down") Respeto.
                  td(data-aos="fade-down") Tratar a la contraparte con dignidad y legitimidad.
                  td(data-aos="fade-down") Mejora el clima de negociación.
                tr
                  td(data-aos="fade-down") Beneficio mutuo.
                  td(data-aos="fade-down") Buscar acuerdos equilibrados y sostenibles.
                  td(data-aos="fade-down") Fortalece relaciones de largo plazo.
      p.mb-4(data-aos="fade-down") La tabla muestra que la ética tiene efectos concretos sobre la calidad del acuerdo y sobre la reputación del negociador o de la organización.
      p.mb-0(data-aos="fade-down") En conclusión, la ética de la negociación garantiza que la gestión comercial se desarrolle dentro de parámetros de confianza, legitimidad y responsabilidad. Su incorporación al proceso formativo fortalece el perfil del aprendiz como negociador capaz de generar resultados, sin comprometer la integridad profesional.
      separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.6 Técnicas de negociación aplicadas
      .row.justify-content-center.mb-4
        .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/t1/img42.png', alt='Imagen decorativa')
        .col.col-lg-9.col-12.order-lg-1.order-2
          p.mb-4(data-aos="fade-down") Las técnicas de negociación aplicadas son procedimientos o enfoques que orientan la interacción entre las partes para facilitar acuerdos. No deben entenderse como recetas universales, sino como marcos de actuación que el negociador selecciona según el contexto, el tipo de cliente, la complejidad del problema y los objetivos del proceso comercial.
          .cajon.c2.color-secundario.p-4.mb-4
            p(data-aos="fade-down") Entre las técnicas más relevantes que se encuentran el método Harvard, el enfoque ganar-ganar, la empatía estratégica, el método SPIN, la estrategia cara a cara y el modelo AIDA. Estas técnicas aparecen en el documento base y, además, son desarrolladas por fuentes de referencia para el ámbito de ventas y negociación.
          .row.align-items-center.mb-4
            .col.col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img43.svg', alt='Imagen decorativa')
            .col.col-lg-10
              p.mb-0(data-aos="fade-down") El método Harvard propone separar personas y problema, enfocarse en intereses y generar opciones de beneficio mutuo. SPIN organiza preguntas para descubrir la necesidad del cliente. AIDA orienta la interacción hacia atención, interés, deseo y acción. Por su parte, la empatía estratégica y el enfoque ganar-ganar favorecen relaciones más colaborativas y decisiones con mayor valor compartido. 
          p.mb-4(data-aos="fade-down") La pertinencia de cada técnica depende del momento de la venta. Algunas sirven mejor para explorar necesidades, otras para responder objeciones y otras para facilitar el cierre.
          p.mb-0(data-aos="fade-down") El aprendizaje debe centrarse, entonces, en reconocer cuándo y cómo aplicar cada enfoque como lo muestra la siguiente tabla:
      .row.justify-content-center.mb-4(data-aos="flip-up")
        .col.col-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 6.
            span Caracterización de las técnicas de negociación
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(data-aos="fade-down")(style= "width: 20%") Técnica 
                  th(data-aos="fade-down")(style= "width: 40%") Propósito principal
                  th(data-aos="fade-down")(style= "width: 40%") Uso recomendado en ventas
              tbody
                tr
                  td(data-aos="fade-down") Método Harvard.
                  td(data-aos="fade-down") Construir acuerdos desde intereses y criterios objetivos.
                  td(data-aos="fade-down") Negociaciones complejas o de relación continua.
                tr
                  td(data-aos="fade-down") Ganar-ganar.
                  td(data-aos="fade-down") Buscar beneficios equilibrados para ambas partes.
                  td(data-aos="fade-down") Cierre de acuerdos donde importa la fidelización.
                tr
                  td(data-aos="fade-down") Empatía estratégica.
                  td(data-aos="fade-down") Comprender emociones y perspectivas para ajustar la interacción.
                  td(data-aos="fade-down") Manejo de resistencia, tensión o incertidumbre del cliente.
                tr
                  td(data-aos="fade-down") SPIN.
                  td(data-aos="fade-down") Guiar al cliente desde el problema hasta la necesidad de solución.
                  td(data-aos="fade-down") Ventas consultivas y exploración de necesidades.
                tr
                  td(data-aos="fade-down") Cara a cara.
                  td(data-aos="fade-down") Fortalecer relación, claridad y lectura del lenguaje corporal.
                  td(data-aos="fade-down") Negociaciones presenciales o de alto valor relacional.
                tr
                  td(data-aos="fade-down") AIDA.
                  td(data-aos="fade-down") Conducir al cliente desde la atención hasta la acción.
                  td(data-aos="fade-down") Presentaciones comerciales orientadas a conversión.
      p(data-aos="fade-down") La tabla sintetiza las técnicas más pertinentes para visualizar sus diferencias funcionales. Esto favorece un abordaje didáctico basado en comparación, análisis de casos y selección argumentada de estrategias.
      p(data-aos="fade-down") En resumen, las técnicas de negociación aplicadas dotan al proceso comercial de estructura, intencionalidad y flexibilidad. Su dominio fortalece el desempeño del vendedor al permitirle analizar mejor cada situación y elegir la forma de interacción más adecuada para generar acuerdos efectivos. 
      p.mb-4(data-aos="fade-down") Para finalizar esta primera temática, se relaciona la siguiente imagen que resume un poco el proceso de la negociación de inicio a fin:
      .row.justify-content-center.mb-0(data-aos="flip-up")
        .col-lg-10.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span Proceso de negociación
        .row.justify-content-center
          .col-10
            figure.desktop
              img(src='@/assets/curso/temas/t1/img44.svg', alt='Figura 1 que relaciona el proceso de negociación representado mediante dos personas que alcanzan un acuerdo. La imagen contiene las etapas de preparación, exploración de intereses, generación de opciones, negociación y cierre, junto con acciones clave como escuchar, entender, proponer, equilibrar y cerrar.')
        .col-12.mb-0
          figure.movil
            img(src='@/assets/curso/temas/t1/img45.svg', alt='Figura 1 que relaciona el proceso de negociación representado mediante dos personas que alcanzan un acuerdo. La imagen contiene las etapas de preparación, exploración de intereses, generación de opciones, negociación y cierre, junto con acciones clave como escuchar, entender, proponer, equilibrar y cerrar.')
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
