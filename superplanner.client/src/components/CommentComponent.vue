<template>
  <div class="CommentComponent">
    <p>{{ commentProp.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
