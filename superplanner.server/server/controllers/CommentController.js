import { commentService } from '../services/CommentService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class CommentController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/', this.createComment)
      .put('/:id', this.editComment)
      .delete('/:id', this.deleteComment)
  }

  async createComment(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await commentService.createComment(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    try {
      req.body.authorId = req.userInfo.id
      res.send(await commentService.editComment(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      res.send(await commentService.deleteComment(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
