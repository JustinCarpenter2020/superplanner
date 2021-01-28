import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentService {
  async getComments(taskId) {
    const res = await api.get('/api/tasks/' + taskId + '/comments')
    AppState.comments[taskId] = res.data
    logger.log(res.data)
  }

  async createComment(comment) {
    const res = await api.post('api/comments/', comment)
    AppState.comments[comment.taskId] = res.data
    this.getComments(comment.taskId)
    return res.data
  }

  async deleteComment(commentId, taskId) {
    await api.delete('api/comments/' + commentId)
    this.getComments(taskId)
  }
}
export const commentService = new CommentService()
