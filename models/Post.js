import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
}, {
  timestamps: true, // auto create createdAt & updatedAt
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
