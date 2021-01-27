import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class ListService {
  async getLists(id) {
    const res = await api.get('api/boards/' + id + '/lists')
    AppState.lists = res.data
    logger.log(AppState.lists)
  }

  async createList(list) {
    const res = await api.post('api/lists/', list)
    AppState.lists.push(res.data)
    return res.send
  }
}
export const listService = new ListService()
