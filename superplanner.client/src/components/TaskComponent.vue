<template>
  <div class="TaskComponent">
    <p>
      {{ taskProp.body }}
      <span class="text-right"><i @click="deleteTask" class="far fa-times-circle text-danger"></i></span>
      <span>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
          >
            Move
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button class="dropdown-item"
                    :id="list.id"
                    v-for="list in state.lists "
                    :key="list.id"
                    @click="editTask(list.id)"
                    href="#"
            > {{ list.title }}</button>
            <div>
            </div></div></div></span>
    </p>
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
      lists: computed(() => AppState.lists),
      comments: computed(() => AppState.comments[props.taskProp.id]),
      newComment: { taskId: props.taskProp.id },
      editTask: { }
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
      async createComment() {
        try {
          await commentService.createComment(state.newComment)
        } catch (error) {
          logger.error(error)
        }
      },
      async editTask() {
        try {
          logger.log(state.editTask)
          await taskService.editTask()
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.dropdown-item{
  cursor: pointer;
}
</style>
