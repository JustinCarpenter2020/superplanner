import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class TaskService {
  async getTasks(listId) {
    const res = await api.get('api/lists/' + listId + '/tasks')
    AppState.tasks[listId] = res.data
    logger.log(res)
  }
}
export const taskService = new TaskService()
