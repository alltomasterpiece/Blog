<template>
  <section>
    <v-row >
      <v-col sm="12" xs="12" md="4">
          <v-btn color="success" @click="convertirTexto">
            <v-icon>mdi-play</v-icon>
              CONVERTIR
          </v-btn>

          <v-btn class="btn_copy" @click="copyResult">
            <v-icon>mdi-content-copy</v-icon>
              COPIAR
          </v-btn>

          <v-btn color="error" @click="limpioText">
            <v-icon>mdi-eraser-variant</v-icon>
              BORRAR
          </v-btn>

      </v-col>
      <v-col sm="12" xs="12" md="8">
          <nuxt-link
            name="Texto a Mayúsculas"
            to="/convertir-texto-a-mayusculas"
            class="link"
          >
          <v-btn class="btn_link">
            MAYÚSCULAS
            </v-btn>
          </nuxt-link>

          <nuxt-link
            name="Texto a Minúsculas"
            to="/convertir-texto-a-minusculas"
            class="link"
          >
          <v-btn class="btn_link">
            minúsculas
          </v-btn>
          </nuxt-link>

          <nuxt-link
            name="Texto a Mayuscula luego de punto"
            to="/convertir-texto-a-mayusculas-despues-de-puntos"
            class="link"
          >
          <v-btn class="btn_link">
            Mayuscula luego de punto
          </v-btn>
          </nuxt-link>

          <nuxt-link
            name="Numeros a numeros romanos"
            to="/convertir-numeros-a-numeros-romanos"
            class="link"
          >
          <v-btn class="btn_link">
            Números a numeros Romanos
          </v-btn>
          </nuxt-link>

          <nuxt-link
            name="Numeros Romanos a numeros"
            to="/convertir-numeros-romanos-a-numeros"
            class="link"
          >
          <v-btn class="btn_link">
            Números Romanos a números
          </v-btn>
          </nuxt-link>
          <nuxt-link
            name="Numeros a Letras"
            to="/convertir-numeros-a-letras"
            class="link"
          >
          <v-btn class="btn_link">
            Números a Letras
          </v-btn>
          </nuxt-link>

      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    accion: {
      type: String,
      required: true
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
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('active')
          $target.classList.toggle('active')
        })
      })
    }
  },
  methods: {
    limpioText() {
      this.$store.commit('textos/setTexto', '')
    },
    convertirTexto() {
      const opcion = this.accion
      switch (opcion) {
        case 'mayusculas':
          this.cambioTextMayusculas()
          break
        case 'minusculas':
          // code block
          this.cambioTextMinusculas()
          break
        case 'mayusculaspunto':
          // code block
          this.cambioTextMayusPunto()
          break
        case 'romanos':
          // code block
          this.cambioNumeroARomanos()
          break
        case 'romanosanumeros':
          // code block
          this.cambioRomanosANumeros()
          break
        case 'numerosletras':
          // code block
          this.cambioNumerosALetras()
          break
        default:
          // code block
          this.cambioTextMayusculas()
      }
    },
    cambioTextMayusculas() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/toUpperCase')
      this.textInStage = this.$store.state.textos.texto
    },
    cambioTextMinusculas() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/toLowerCase')
      this.textInStage = this.$store.state.textos.texto
    },
    cambioTextMayusPunto() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/toSentenceCase')
      this.textInStage = this.$store.state.textos.texto
    },
    cambioNumeroARomanos() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/toRomanNumbers')
      this.textInStage = this.$store.state.textos.texto
    },
    cambioRomanosANumeros() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/toArabicNumbers')
      this.textInStage = this.$store.state.textos.texto
    },
    cambioNumerosALetras() {
      this.$store.commit('textos/setTexto', this.textInStage)
      this.$store.commit('textos/deNumeroALetras')
      this.textInStage = this.$store.state.textos.texto
    },

    async copyResult() {
      try {
        await this.$copyText(this.textInStage)
      } catch (e) {
        console(e)
      }
    }
  }
}
</script>
<style scoped>
.btn_copy{
  color: white;
  background-color: #50087f !important;
}

.editor_buttons {
  text-align: left !important;
}
.btn_link{
  color: white !important;
  background-color: #363636 !important;
}
.link{
  text-decoration: none !important;
}
.v-btn:not(.v-btn--round).v-size--default{
  padding: 0 13.6px;
  margin-bottom: 8px;
}
</style>