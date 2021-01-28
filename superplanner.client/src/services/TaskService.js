import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class TaskService {
  async getTasks(listId) {
    const res = await api.get('api/lists/' + listId + '/tasks')
    AppState.tasks[listId] = res.data
    logger.log(res)
  }

  async createTask(task) {
    const res = await api.post('api/tasks/', task)
    AppState.tasks[task.listId] = res.data
    this.getTasks(task.listId)
    return res.data
  }

  async deleteTask(taskId, listId) {
    await api.delete('api/tasks/' + taskId)
    this.getTasks(listId)
  }

  // REVIEW pulling in state.newTask from the Task component
  async editTask(task, listId) {
    const old = task.listId
    task.listId = listId
    await api.put('api/tasks/' + task.id, task)
    this.getTasks(old)
    this.getTasks(task.listId)
  }
}
export const taskService = new TaskService()
