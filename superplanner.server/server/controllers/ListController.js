import { listService } from '../services/ListService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { taskService } from '../services/TaskService'
export class ListController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // send id with on a post request in router
      .get('/:id/tasks', this.getTasks)
      .post('/', this.createList)
      .put('/:id', this.editList)
      .delete('/:id', this.deleteList)
  }

  async getTasks(req, res, next) {
    try {
      return res.send(await taskService.getTasks({ listId: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async getLists(req, res, next) {
    try {
      const lists = await listService.getAll(req.params.boardId)
      res.send(lists)
    } catch (error) {
      next(error)
    }
  }

  async createList(req, res, next) {
    try {
      // set the authorId both so we have it and so the user can't overwrite it
      req.body.authorId = req.userInfo.id
      // sets the board id appended to the url as the id
      res.send(await listService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editList(req, res, next) {
    try {
      // safe check the authorId again
      req.body.authorId = req.userInfo.id
      res.send(await listService.edit(req.params._id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteList(req, res, next) {
    try {
      res.send(await listService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
