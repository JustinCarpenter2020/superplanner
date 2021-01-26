import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Task = new Schema({
  body: { type: String, required: true },
  authorId: { type: String, required: true },
  listId: { type: String, ref: 'List', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)

Task.virtual('list', {
  localField: 'listId',
  ref: 'List',
  foreignField: '_id',
  justOne: true
})
export default Task
