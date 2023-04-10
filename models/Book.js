import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose?.models?.Book || mongoose.model("Book", BookSchema)


