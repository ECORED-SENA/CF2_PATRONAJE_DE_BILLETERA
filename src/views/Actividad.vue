<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con la interfaz, herramientas básicas y comandos esenciales del <i>software</i> Rhinoceros  aplicados al modelado digital de billeteras.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal ventaja del software Rhinoceros en el diseño asistido por computador?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la edición, análisis y traducción de curvas, superficies y sólidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear modelos tridimensionales con gran precisión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permitir el uso exclusivo de archivos STL.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser compatible solo con sistemas Windows.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Dónde se encuentra la barra de menús en la interfaz de Rhinoceros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la parte superior de la ventana principal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En el lado derecho de la pantalla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Flotando junto al Gumball.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dentro del menú de capas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes afirmaciones describe correctamente el widget <i>Gumball</i>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite mover, rotar y escalar objetos con controles visuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Permite crear superficies curvas automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo sirve para escalar objetos en 2D.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es una herramienta para gestionar capas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal de las ventanas de vista (<i>viewports</i>) en Rhinoceros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir trabajar con el modelo desde diferentes perspectivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar archivos automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Activar comandos de edición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el color de los objetos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta permite crear una transición suave entre dos curvas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empalmar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reflejar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descomponer.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agrupar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué ocurre al usar el comando Descomponer?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se separa un objeto complejo en elementos individuales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se agrupan todos los objetos seleccionados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se rotan los objetos automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se guarda una copia del objeto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál comando permite combinar curvas con puntos extremos coincidentes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Unir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Copiar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reflejar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Partir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Para qué se utiliza la barra de comandos en Rhinoceros?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para escribir manualmente los comandos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para abrir la documentación del <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para rotar automáticamente los objetos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para controlar el zoom y el desplazamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es la utilidad del comando Reflejar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear una copia simétrica respecto a un eje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar partes de una curva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descomponer objetos sólidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Activar el historial de modificaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué opción es recomendable para el diseño de billeteras en Rhinoceros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Seleccionar “Objeto pequeño - milímetros” como plantilla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Usar siempre pulgadas como unidad de medida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar exclusivamente en la vista perspectiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el uso del mouse para mayor precisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La barra de herramientas de Rhinoceros permite acceso directo a los comandos mediante íconos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El comando Mover elimina el objeto original al crear una copia.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El uso del <i>mouse</i> no influye en la navegación del entorno de Rhinoceros.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las ayudas de modelado como <i>Ortho</i> y <i>Grid Snap</i> ayudan a mejorar la precisión del diseño.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El comando Partir conserva todas las secciones del objeto después del corte.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
