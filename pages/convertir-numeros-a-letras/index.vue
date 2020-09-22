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

        <v-main class="text_area">
          <v-textarea
            v-model="textInStage"
            class="textarea"
            placeholder="Ingrese su número"
            rows="15"
            solo
          ></v-textarea>
          <NavBar accion="numerosletras" />
          </v-main>
        <v-row class="content">
          <p>
            <br />
            Pasar 1, 2 o 3 a palabras no tiene mayor dificultad: son apenas 3-4
            letras. Pero si necesitas convertir números como 1827600, para
            evitar pérdidas de tiempo y posibles errores, mejor acudir a
            MutateApp. La transformación se hace en forma automática y al
            instante. Convertir de enormes números a letras puede ser un lío y
            una demora innecesaria. Para pasar números como 2345459 (dos
            millones trescientos cuarenta y cinco mil cuatrocientos cincuenta y
            nueve), simplemente copia la cifra, pégala y haz clic en 'Convertir'
            para obtenerla por escrito.
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
        mainTitle: 'Números a Letras',
        subTitle: 'Convertir números Letras.'
      },
      featureImage: '/uploads/numeros-aletras-hero.jpg'
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

    this.$store.commit('textos/deNumeroALetras')
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
