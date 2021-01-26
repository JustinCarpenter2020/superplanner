import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardService } from '../services/BoardService'
import { listService } from '../services/ListService'

export class BoardController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/', this.getAllBoards)
      .get('/:boardId', this.getOne)
      // added get lists to the board controller
      .get('/:id/lists', this.getLists)
      .post('/', this.createBoard)
      .put('/:id', this.editBoard)
      .delete('/:id', this.deleteBoard)
  }

  async getOne(req, res, next) {
    try {
      res.send(await boardService.getOne(req.params.boardId))
    } catch (error) {
      next(error)
    }
  }

  async getLists(req, res, next) {
    try {
      return res.send(await listService.getAll({ boardId: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async getAllBoards(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      const boards = await boardService.getAll(req.body.authorId)
      res.send(boards)
    } catch (error) {
      next(error)
    }
  }

  async createBoard(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await boardService.createBoard(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editBoard(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      req.body.id = req.params.id
      res.send(await boardService.editBoard(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteBoard(req, res, next) {
    try {
      res.send(await boardService.deleteBoard(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
