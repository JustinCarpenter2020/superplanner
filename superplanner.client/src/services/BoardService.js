import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardService {
  async getBoards() {
    const res = await api.get('api/boards')
    AppState.boards = res.data
  }
}
export const boardService = new BoardService()
