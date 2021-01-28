<template>
  <div class="TaskComponent">
    <p>{{ taskProp.body }} <span class="text-right"><i @click="deleteTask" class="far fa-times-circle text-danger"></i></span></p>
  </div>
  <div>
    <CommentComponent v-for="comment in state.comments" :key="comment.id" :comment-prop="comment" />
  </div>
  <div class="form-group">
    <form type="submit" @submit.prevent="createComment">
      <input type="text"
             class="form-control"
             name=""
             id=""
             v-model="state.newComment.body"
             aria-describedby="helpId"
             placeholder="new comment"
      >
      <button type="submit" class="btn btn-primary">
        create
      </button>
    </form>
  </div>
</template>

<script>
import { taskService } from '../services/TaskService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { reactive, computed, onMounted } from 'vue'
import { commentService } from '../services/CommentService'
export default {
  name: 'TaskComponent',
  props: { taskProp: { type: Object, required: true } },
  setup(props) {
    // REVIEW this is the start
    const state = reactive({
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments[props.taskProp.id]),
      newComment: { taskId: props.taskProp.id }
    })
    onMounted(async() => {
      try {
        await commentService.getComments(props.taskProp.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      deleteTask() {
        taskService.deleteTask(props.taskProp.id, props.taskProp.listId)
      },
      createComment() {
        commentService.createComment(state.newComment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
