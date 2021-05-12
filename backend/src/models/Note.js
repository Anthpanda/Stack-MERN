import {
    Schema,
    model
} from 'mongoose';

const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String
}, {
    timestamps: true,
    versionKey: false
})

export default model('Note',noteSchema)