import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ListService {
  async delete(id) {
    const list = await dbContext.Lists.findByIdAndDelete(id)
    if (!list) {
      throw new BadRequest('That list id is invalid or does not exist')
    }
    return 'successfully deleted'
  }

  async edit(id, body) {
    const newList = dbContext.Lists.findOneAndUpdate(id, body, { new: true })
    if (!newList) {
      throw new BadRequest('This list id does not exist')
    }
    return newList
  }

  async create(body) {
    return await dbContext.Lists.create(body)
  }

  async getAll(query) {
    return await dbContext.Lists.find(query).populate('author', 'name id')
  }
}

export const listService = new ListService()
