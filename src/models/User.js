const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        min: 7,
        required: true,
    },
    role: {
        type: String,
        default: 'customer'
    },
    phone: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

userSchema.index({ name: 'text'})

module.exports = model('User', userSchema)