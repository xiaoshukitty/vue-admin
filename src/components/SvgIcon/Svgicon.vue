<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      default: 'product-category',
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 40px;
  height: 40px;
  fill: currentColor;
  overflow: hidden;
}
</style>
