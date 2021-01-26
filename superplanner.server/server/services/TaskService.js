import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TaskService {
  async deleteTask(id) {
    const task = await dbContext.Tasks.findByIdAndDelete(id)
    if (!task) {
      throw new BadRequest('Could not delete')
    }
    return 'Successfully delorted'
  }

  async editTask(id, body) {
    const newTask = await dbContext.Tasks.findOneAndUpdate(id, body, { new: true })
    if (!newTask) {
      throw new BadRequest('This is an invalid id, or you are not the owner')
    }
    return newTask
  }

  async createTask(body) {
    return await dbContext.Tasks.create(body)
  }

  async getTasks(query) {
    return await dbContext.Tasks.find(query).populate('author', 'name id')
  }
}
export const taskService = new TaskService()
