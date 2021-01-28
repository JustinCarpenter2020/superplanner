import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema({
  body: { type: String, required: true },
  authorId: { type: String, required: true },
  taskId: { type: String, ref: 'Task', required: true },
  authorName: { type: String, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

Comment.virtual('task', {
  localField: 'taskId',
  ref: 'Task',
  foreignField: '_id',
  justOne: true
})
Comment.virtual('author', {
  localField: 'authorName',
  ref: 'Account',
  foreignField: 'name',
  justOne: true
})
export default Comment
