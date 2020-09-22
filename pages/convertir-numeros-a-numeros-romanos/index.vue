<template>
  <div class="page-wrapper">
    <site-hero
      :title="headerInfo.mainTitle"
      :subtitle="headerInfo.subTitle"
      :image="featureImage"
    >
    </site-hero>
    <section class="section">
      <v-container>
        <h1 v-text="headerInfo.mainTitle">
        </h1>
        <h2 v-text="headerInfo.subTitle">
        </h2>

        <v-main>
          <v-textarea
            v-model="textInStage"
            class="textarea"
            placeholder="Ingrese su número aqui"
            rows="15"
            solo
          ></v-textarea>
          <NavBar accion="romanos" />
        </v-main>
        <v-row>
          <p>
            <br />
            Pasar de números a números romanos a veces es fácil. Casi todos
            saben que el siglo 20 se escribe siglo XX. Ahora, ¿a qué no
            recuerdas cómo pasar 64 a números romanos? ¿Y 267 o 1325? La
            numeración romana, un sistema que data desde tiempos de la Antigua
            Roma, aún hoy se usa en ciertos contextos, aunque por estas
            latitudes no estamos tan familiarizados con estos números. Es
            comprensible no saber cómo hacer la conversión. Aparte, no es
            necesario. Convierte de números a números romanos automáticamente
            con MutateApp. ¿Cuál es el número más grande que se puede convertir
            a números romanos? A saber: 3999.
          </p>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'HomePage',
  layout: 'homepage',
  components: { NavBar },
  data() {
    return {
      mainTitle: process.env.appTitle,
      subTitle: process.env.appDescription,
      // textInStage: '',
      headerInfo: {
        mainTitle: 'Números a Números Romanos',
        subTitle: 'Convertir números a números romanos.'
      },
      featureImage: '/uploads/numeros-romanos-hero.jpg'
    }
  },

  computed: {
    textInStage: {
      get() {
        return this.$store.state.textos.texto
      },
      set(value) {
        this.$store.commit('textos/setTexto', value)
      }
    }
  },
  async asyncData(ctx) {},
  async fetch(ctx) {},
  mounted() {
    // this.$store.commit('textos/setTexto', this.textInStage)

    this.$store.commit('textos/toRomanNumbers')
    this.textInStage = this.$store.state.textos.texto
  },
  head() {
    return {
      title: this.headerInfo.mainTitle + ' - ' + this.headerInfo.subTitle,
      meta: [
        {
          hid: 'description',
          id: 'description',
          name: 'description',
          content: this.headerInfo.subTitle || 'Falta seo description'
          // this.selectedCat.description.replace(/(<([^>]+)>)/gi, '')
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.headerInfo.mainTitle || this.selectedCat.name
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.headerInfo.subTitle || 'Falta seo description'
          // this.selectedCat.description.replace(/(<([^>]+)>)/gi, '')
        }
      ]
    }
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.posts {
  padding: 2em 1em;
}

.categories {
  background-color: #f5f5f5;
}
</style>
