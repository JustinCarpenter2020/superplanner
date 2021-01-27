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

  async deleteList(id) {
    await api.delete('api/lists/' + id)
    const listInd = AppState.lists.findIndex(l => l.id === id)
    AppState.lists.splice(listInd, 1)
  }
}
export const listService = new ListService()
