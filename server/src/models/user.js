import { Schema, model } from 'mongoose';

const schema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  imageUrl: {
    type: String,
  },
});

const userModel = model('user', schema);

export default userModel;
