<template>
  <div class="BoardComponenet col-4">
    <div class="card mt-5">
      <div class="card-body">
        <h4 class="card-title">
          {{ boardProp.title }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardComponenet',
  props: { boardProp: { type: Object, required: true } },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
