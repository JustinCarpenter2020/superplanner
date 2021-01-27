<template>
  <div class="col-4">
    <div class="ListComponent">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            {{ listProp.title }}
          </h4>
          <p class="card-text">
            Text
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: { listProp: { type: Object, required: true } },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.card{
  height: 100%;
}
</style>
