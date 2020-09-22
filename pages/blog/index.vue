<template>
  <div>
    <site-hero title="Blog" image="/uploads/home-hero.jpg">
    </site-hero>

    <main-section theme="one-column" class="post_page">
      <v-container>
        <!-- All Posts -->
        <posts-grid />
      </v-container>
    </main-section>
  </div>
</template>
<script>


export default {
  name: 'Blog',

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

