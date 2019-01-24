import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
  },
  userId: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const menuModel = model('menu', schema);

export default menuModel;
