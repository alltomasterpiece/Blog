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
                  placeholder="Ingrese su texto aqui"
                  rows="15"
                  solo
                ></v-textarea>
            <NavBar accion="mayusculaspunto" />
          </v-main>
        <v-row>
          <p>
            <br />
            Por regla ortográfica, siempre va mayúsculas después de puntos.
            Dicho de otro modo, la palabra que sigue tras un punto debe
            escribirse en mayúscula. ¿Para qué sirve esta opción de conversión?
            Si tienes un texto que, por defecto, está todo en minúsculas o todo
            en mayúsculas, al dar clic en 'Convertir' podrás hacer que aparezcan
            las mayúsculas después de puntos, tal como corresponde, en modo
            instantáneo. Y no sólo después de cada punto, sino que además
            funciona si el texto contiene puntos suspensivos (...), ya que las
            palabras que vienen luego de ellos también van en mayúsculas.
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
      heroTitle: process.env.appTitle,
      heroDescription: process.env.appDescription,
      // textInStage: '',
      headerInfo: {
        mainTitle: 'Mayúscula después de puntos',
        subTitle: 'Convertir el texto a mayúsculas sólo después de puntos'
      },
      featureImage: '/uploads/minusculas-mayusculas-hero.jpg'
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
    this.headerInfo.mainTitle = 'Mayúsculas despues de puntos'
    this.headerInfo.subTitle =
      'Convertir el texto a mayúsculas despues de puntos'
    // this.$store.commit('textos/setTexto', this.textInStage)
    this.$store.commit('textos/toSentenceCase')
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
