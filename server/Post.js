import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    author: { type: 'string', required: true },
    title: { type: 'string', required: true },
    content: { type: 'string', required: true },
    date: { type: 'date' },
    picture: { type: 'string' }
});

export default mongoose.model('Post', Post);