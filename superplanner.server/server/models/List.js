import mongoose from 'mongoose'
const Schema = mongoose.Schema

const List = new Schema({
  title: { type: String, required: true },
  authorId: { type: String, required: true },
  boardId: { type: String, ref: 'board', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } })

List.virtual('board', {
  localField: 'boardId',
  ref: 'Board',
  foreignField: '_id',
  justOne: true
})
export default List
