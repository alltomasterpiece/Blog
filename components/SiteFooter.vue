<template>
  <v-footer>
    <v-card-text class="text-center">
      {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - Todos los
    Derechos reservados
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>


