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
            placeholder="Ingrese su número Romano aqui"
            rows="15"
            solo
          ></v-textarea>
            <NavBar accion="romanosanumeros" />
        </v-main>
        <v-row>
          <p>
            <br />
            Pasar de números romanos a números comunes no tiene ninguna ciencia.
            I es 1, V es 5, X es 10, L es 50, D es 500, M es 1000... Así, 515
            sería DXV. En otros casos, la memoria no falla. Por ejemplo, la
            mayoría sabemos que el siglo 19 y el siglo 21 equivalen a siglo XIX
            y siglo XXI, respectivamente. Pero en otros casos, la conversión no
            resulta tan sencilla ni depende de la memoria. En vez de andar
            pensando cómo pasar de números romanos a números, acude a MutateApp
            para convertir en forma automática e instantánea. Copia el número
            romano a convertir, pega y convierte a número común en 1 clic. El
            número romano más grande que se puede convertir es MMMCMXCIX (3999).
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
        mainTitle: 'Números Romanos a Números',
        subTitle: 'Convertir números romanos a números.'
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

    this.$store.commit('textos/toArabicNumbers')
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
