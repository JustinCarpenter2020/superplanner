import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Comment = new Schema({
  body: { type: String, required: true },
  authorId: { type: String, required: true },
  taskId: { type: String, ref: 'Task', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

Comment.virtual('task', {
  localField: 'taskId',
  ref: 'Task',
  foreignField: '_id',
  justOne: true
})
export default Comment
