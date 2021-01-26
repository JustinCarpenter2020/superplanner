import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { taskService } from '../services/TaskService'
import { commentService } from '../services/CommentService'
export class TaskController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id/comments', this.getComments)
      .post('/', this.createTask)
      .put('/:id', this.editTask)
      .delete('/:id', this.delete)
  }

  async getComments(req, res, next) {
    try {
      return res.send(await commentService.getComments({ taskId: req.params.id }))
    } catch (error) {
      next(error)
    }
  }

  async createTask(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await taskService.createTask(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await taskService.editTask(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      res.send(await taskService.deleteTask(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
