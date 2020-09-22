<template >
  <v-overlay :value="0">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
    name: 'Loading'
}
</script>