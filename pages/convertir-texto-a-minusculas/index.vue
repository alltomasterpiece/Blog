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
        <v-main>
          <v-textarea
            v-model="textInStage"
            class="textarea"
            placeholder="Ingrese su texto aqui"
            rows="15"
            solo
          ></v-textarea>
          <NavBar accion="minusculas" />
        </v-main>
        <v-row>
          <p>
            <br />
            De mayúsculas a minúsculas en 1 clic... Hay textos que aparecen
            totalmente en mayúsculas. Por lo general, los títulos, aunque
            también pueden estar todos los párrafos en mayúsculas, no a modo de
            GRITO, sino que tal vez para resaltar, dar RELIEVE a frases,
            párrafos e incluso a todo el texto. O tal vez quieras no seguir la
            norma ortográfica y que la primera palabra tampoco vaya en
            mayúscula, sino que todo el texto sea en minúsculas. Cambiar a mano
            letra por letra es un trabajo chino y evitable. MutateApp convierte
            de mayúsculas a minúsculas sin esfuerzos ni esperas.
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
      featureImage: '/uploads/minusculas-mayusculas-hero.jpg',
      // textInStage: '',
      headerInfo: {
        mainTitle: 'Minúsculas',
        subTitle: 'Convertir el texto todo a minúsculas.'
      }
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
    this.headerInfo.mainTitle = 'Minusculas'
    this.headerInfo.subTitle = 'Convertir el texto todo a minúsculas'
    // this.$store.commit('textos/setTexto', this.textInStage)
    this.$store.commit('textos/toLowerCase')
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
