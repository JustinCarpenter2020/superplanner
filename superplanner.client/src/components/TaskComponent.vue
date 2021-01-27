<template>
  <div class="TaskComponent">
    <p>{{ taskProp.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskComponent',
  props: { taskProp: { type: Object, required: true } },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
