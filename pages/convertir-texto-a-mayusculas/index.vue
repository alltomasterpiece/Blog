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
          <NavBar accion="mayusculas" />
        </v-main>
        <v-row>
          <p>
            <br />
            ¿Tienes mucho texto para convertir de minúsculas a mayúsculas? Ya
            sea para títulos, así como para párrafos y hojas enteras, quizá te
            interese que el texto aparezca todo en mayúsculas. Ponerse a hacerlo
            letra por letra, manualmente, no tiene sentido. Dedica ese tiempo a
            otra cosa. Acude a MutateApp para convertir de minúsculas a
            mayúsculas en modo automático. No importa la cantidad, así sea una
            frase, cuatro párrafos o 10 hojas. Sólo tienes que copiar el texto,
            pegarlo y clic en 'Convertir'. Al instante, en menos de 1 segundo,
            queda pronto. El mutante del texto siempre está a disposición para
            dar una mano y cumplir en lo que dura 1 clic.
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
        mainTitle: 'Mayúsculas',
        subTitle: 'Convertir el texto todo a mayúsculas.'
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
    // this.$store.commit('textos/setTexto', this.textInStage)
    this.$store.commit('textos/toUpperCase')
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
