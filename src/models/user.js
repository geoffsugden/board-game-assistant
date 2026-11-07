import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      select: false,
    },
    firstName: {
      type: String,
      trim: true,
      maxlength: 100,
      select: false,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 100,
      select: false,
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: /^\+[1-9]\d{1,14}$/,
      select: false,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    alias: {
      type: String,
      trim: true,
      maxlength: 40,
      default: null,
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true },
)

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    if (returnedObject._id) {
      returnedObject.id = returnedObject._id.toString()
    }

    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.email
    delete returnedObject.firstName
    delete returnedObject.lastName
    delete returnedObject.phoneNumber
    delete returnedObject.passwordHash

    return returnedObject
  },
})

export default mongoose.model('User', userSchema)
