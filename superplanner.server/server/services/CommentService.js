import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentService {
  async deleteComment(id) {
    const comment = await dbContext.Comments.findByIdAndDelete(id)
    if (!comment) {
      throw new BadRequest('Could not delete')
    }
    return 'Successfully delorted'
  }

  async editComment(id, body) {
    const newComment = await dbContext.Comments.findByIdAndUpdate(id, body, { new: true })
    if (!newComment) {
      throw new BadRequest('This is not your comment or this is an invalid Id')
    }
    return newComment
  }

  async createComment(body) {
    return await dbContext.Comments.create(body)
  }

  async getComments(query) {
    return await dbContext.Comments.find(query).populate('author', 'name id')
  }
}
export const commentService = new CommentService()
