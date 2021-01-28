<template>
  <div class="col-4">
    <div class="ListComponent">
      <div class="card mt-3 align-self-stretch">
        <div class="card-body">
          <h4 class="card-title">
            <span class="text-right"><div class="dropdown">
              <button class="btn btn-outline grey dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >
                <i class="fas fa-align-justify"></i>
              </button>
              <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                <div @click="deleteList" class="dropdown-item text-danger" href="#">Delete List</div>
              </div>
            </div></span>
            {{ listProp.title }}
          </h4>
        </div>
        <TaskComponent v-for="task in state.tasks" :key="task.id" :task-prop="task" />
        <form type="submit" @submit.prevent="createTask">
          <div class="form-group">
            <input type="text"
                   class="form-control"
                   name=""
                   id=""
                   v-model="state.newTask.body"
                   aria-describedby="helpId"
                   placeholder="Create New Task"
            >
            <button type="submit" class="btn btn-success">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { listService } from '../services/ListService'
import { AppState } from '../AppState'
import { taskService } from '../services/TaskService'
import { logger } from '../utils/Logger'
export default {
  name: 'ListComponent',
  props: { listProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      // REVIEW APPSTATE.TASKS
      tasks: computed(() => AppState.tasks[props.listProp.id]),
      // editComment: { id: props.commentProp.id }
      newTask: { listId: props.listProp.id }
    })
    onMounted(async() => {
      try {
        await taskService.getTasks(props.listProp.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      async deleteList() {
        try {
          listService.deleteList(props.listProp.id)
        } catch (error) {
          logger.error(error)
        }
      },
      async createTask() {
        try {
          await taskService.createTask(state.newTask)
          state.newTask = { listId: state.props.listProp.id }
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
.card{
  height: 100%;
  background: #f5f5f5;
  display: flex;
   justify-content: space-between;
}

.dropdown-toggle::after {
    content: none;
}

.dropdown-menu{
  cursor: pointer;
}

.grey{
  background-color: #707070;
}
</style>
