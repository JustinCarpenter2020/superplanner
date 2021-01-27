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

  async deleteBoard(id) {
    await api.delete('api/boards/' + id)
    const boardInd = AppState.boards.findIndex(b => b.id === id)
    AppState.boards.splice(boardInd, 1)
  }
}
export const boardService = new BoardService()
