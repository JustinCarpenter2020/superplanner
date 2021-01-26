import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardService {
  async getOne(id) {
    const Board = await dbContext.Boards.findById(id)
    if (!Board) {
      throw new BadRequest('This is an invalid id or this board does not belong to you')
    }
    return Board
  }

  async getAll(id) {
    return await dbContext.Boards.find({ authorId: id }).populate('author', 'name id')
  }

  async createBoard(body) {
    return await dbContext.Boards.create(body)
  }

  async editBoard(id, body) {
    const newBoard = await dbContext.Boards.findOneAndUpdate(id, body, { new: true })
    if (!newBoard) {
      throw new BadRequest('No board exists with that Id')
    }
    return newBoard
  }

  async deleteBoard(id) {
    const newBoard = await dbContext.Boards.findByIdAndDelete(id)
    if (!newBoard) {
      throw new BadRequest('No board exists with that id')
    }
    return 'successfully Delorted'
  }
}

export const boardService = new BoardService()
