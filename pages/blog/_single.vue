<template>
  <div>
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <span
        v-if="author && $siteConfig.posts.displayAuthor"
        class="author-wrapper"
      >
        <strong>Autor:</strong> {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        <strong>Publicado:</strong> {{ date }}
      </span>
    </site-hero>
    <v-main :one-column-constrained="true">
      <template v-slot:default>
        <v-container>
          <markdown :markdown="$store.state.content" />
            <v-card-title>
              Articulos relacionado
            </v-card-title>
            <!-- Related Posts -->
            <posts-grid :number="3" :category="category" :exclude="slug" />

        </v-container>
      </template>
      <template v-slot:sidebar>
        <post-sidebar />
      </template>
    </v-main>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import PostSidebar from '~/components/PostSidebar'
export default {
  components: {
    Markdown,
    PostSidebar
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'category',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'post', slug: params.single })
  }
}
</script>
<style scoped lang="scss">
.edit-post {
  margin-bottom: 20px;
}

</style>
