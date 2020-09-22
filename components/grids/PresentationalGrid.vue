<template>
  <div :class="`grid grid-theme-${theme || 'blocks'}`">
    <intersection-observer v-if="items.length === 0" @view="$emit('atEnd')" />
    <div class="card_place">
      <div
        class="single_post"
        v-for="(item, index) in itemsComputed"
        :key="item.title ? item.title : index"
        :class="`column items`"
        :style="`width: ${100 / perRow}%`"
      >
        <slot :item="item"></slot>
      </div>
    </div>
    <div v-if="bottomLoader" class="loading-posts">
      <loading-spinner />
    </div>
    <intersection-observer @view="$emit('atEnd')" />
  </div>
</template>

<script>
import { range } from 'lodash'
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    },
    bottomLoader: { type: Boolean, default: false },
    theme: {
      type: String,
      default: 'boxes'
    },
    perRow: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      placeholders: range(this.perRow).fill({})
    }
  },
  computed: {
    itemsComputed() {
      return this.items.length ? this.items : this.placeholders
    }
  }
}
</script>
<style lang="scss" scoped>
.grid {
  min-height: 150px;
}
.column {
  flex-basis: auto;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100% !important;
  }
}
.card {
  @media (min-width: 768px) {
    height: 100%;
  }
  .media-content {
    overflow-x: initial;
  }
}
.card_place{
  display: flex;
  flex-wrap: wrap;
}
.single_post{
  padding: 20px 20px;
}
</style>
<style lang="scss">
.loading-posts .spinner-wrapper {
  margin: 30px auto 0 auto;
}

</style>
