<template>
  <div class="TaskComponent">
    <p>{{ taskProp.body }} <span class="text-right"><i @click="deleteTask" class="far fa-times-circle text-danger"></i></span></p>
  </div>
</template>

<script>
import { taskService } from '../services/TaskService'
export default {
  name: 'TaskComponent',
  props: { taskProp: { type: Object, required: true } },
  setup(props) {
    return {
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
