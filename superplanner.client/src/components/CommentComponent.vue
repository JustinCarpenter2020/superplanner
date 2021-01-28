<template>
  <div class="CommentComponent">
    <p>
      {{ commentProp.body }}
      <span class="text-right"><i @click="deleteComment" class="fas fa-times-circle text-danger pointer"></i></span>
    </p>
  </div>
</template>

<script>
import { commentService } from '../services/CommentService'
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup(props) {
    return {
      async deleteComment() {
        await commentService.deleteComment(props.commentProp.id, props.commentProp.taskId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pointer{
  cursor: pointer;
}
</style>
