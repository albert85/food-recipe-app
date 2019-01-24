import db from '../models';

const { Userdb } = db;

class UserControler {
  static async createUser(_, {
    email, password, firstName, lastName, imageUrl,
  }) {
    let isExist = false;
    await Userdb.findOne({ email }, (err, res) => {
      if (res) {
        isExist = true;
      }
    });

    if (!isExist) {
      // return 'Email already exist';
      const user = await new Userdb({
        firstName, lastName, email, password, imageUrl,
      });
      user.save();
      return user;
    }
    throw new Error('Email is already taken');
  }

  static async getUser() {
    const user = await Userdb.find((err, userdata) => {
      if (err) {
        throw new Error('User not found');
      }
      return userdata;
    });
    return user;
  }
}

export default UserControler;
