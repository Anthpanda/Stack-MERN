import {
    Schema,
    model
} from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('User', userSchema)