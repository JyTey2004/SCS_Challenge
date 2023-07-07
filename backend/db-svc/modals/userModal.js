const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        },
    password: {
        type: String,
        required: true
        },
    email: {
        type: String,
        required: true
        },
    healthInfo: [
        {
            type: Object
        }
    ],
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      return next();
    } catch (err) {
      return next(err);
    }
})

userSchema.methods.comparePassword = async function (password) {
    if (!password) throw new Error('Password is required');
    try {
        const result = await bcrypt.compare(password, this.password)
        return result;
    } catch (err) {
        console.log('Error in comparePassword method', err.message);
    }
}

userSchema.statics.uniqueEmail = async function (email) {
    if (!email) throw new Error('Email is required')
    try {
        const user = await this.findOne({email: email})
        if (user) return false

        return true;
    }
    catch (err) {
        console.log('Error in uniqueEmail method', err)
        return false
    }
}


const User = mongoose.model('User', userSchema);

module.exports = User;