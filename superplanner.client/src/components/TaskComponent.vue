<template>
  <div class="TaskComponent">
    <p>{{ taskProp.body }} <span class="text-right"><i @click="deleteTask" class="far fa-times-circle text-danger"></i></span></p>
  </div>
  <div>
    <CommentComponent v-for="comment in state.comments" :key="comment.id" :comment-prop="comment" />
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
      comments: computed(() => AppState.comments[props.taskProp.id])
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
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
