const commentSchema = new mongoose.Schema({
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  detail:      {type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);