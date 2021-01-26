import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardService {
  async getBoards() {
    const res = await api.get('api/boards')
    AppState.boards = res.data
  }

  async getOne(id) {
    const res = await api.get('api/boards/' + id)
    AppState.activeBoard = res.data
    logger.log(AppState.activeBoard)
  }

  async createBoard(board) {
    const res = await api.post('api/boards/', board)
    AppState.boards.push(res.data)
    return res.data.id
  }
}
export const boardService = new BoardService()
