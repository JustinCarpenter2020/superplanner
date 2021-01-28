<template>
  <div class="CommentComponent">
    <p>
      {{ commentProp.authorName }} {{ commentProp.body }}
      <span class="text-right"><i @click="deleteComment" class="fas fa-times-circle text-danger pointer"></i></span>
    </p>
  </div>
</template>

<script>
import { commentService } from '../services/CommentService'
import { logger } from '../utils/Logger'
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup(props) {
    return {
      async deleteComment() {
        logger.log(props.commentProp)
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
