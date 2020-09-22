<template>
  <div>
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <section>
      <v-container>
        <h1 v-text="headerInfo.mainTitle">
        </h1>
        <h3 v-text="headerInfo.subTitle">
        </h3>
        <v-main class="text_area">
          <v-textarea
                v-model="textInStage"
                class="textarea"
                placeholder="Ingrese su texto aqui"
                solo
              ></v-textarea>
          <NavBar accion="minusculas" />
        </v-main>
        <v-row class="content">
            De mayúsculas a minúsculas en 1 clic... Hay textos que aparecen
            totalmente en mayúsculas. Por lo general, los títulos, aunque
            también pueden estar todos los párrafos en mayúsculas, no a modo de
            GRITO, sino que tal vez para resaltar, dar RELIEVE a frases,
            párrafos e incluso a todo el texto. O tal vez quieras no seguir la
            norma ortográfica y que la primera palabra tampoco vaya en
            mayúscula, sino que todo el texto sea en minúsculas. Cambiar a mano
            letra por letra es un trabajo chino y evitable. MutateApp convierte
            de mayúsculas a minúsculas sin esfuerzos ni esperas.
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import NavBar from '~/components/NavBar.vue'

export default {
  name: 'HomePage',

  data() {
    return {
      mainTitle: process.env.appTitle,
      subTitle: process.env.appDescription,
      // textInStage: '',
      headerInfo: {
        mainTitle: 'Minúsculas',
        subTitle: 'Convertir el texto todo a minúsculas.'
      }
    }
  },
  head() {
    return {
      title: `Inicio | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage']),
    textInStage: {
      get() {
        return this.$store.state.textos.texto
      },
      set(value) {
        this.$store.commit('textos/setTexto', value)
      }
    }
  },
    fetch({ store, params }) {
    setPageData(store, { slug: 'inicio' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}

.text_area {
    padding-top: 10px !important;
}

.v-text-field__details {
  display: none !important;
}

</style>
