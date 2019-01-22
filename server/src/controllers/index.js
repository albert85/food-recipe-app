import db from '../models';

const { Userdb } = db;

// Create an express server and a GraphQL endpoints
export default {
  Query: {
    description: () => 'user not listed',
    user: async () => {
      const user = await Userdb.find((err, userdata) => {
        if (err) {
          throw new Error('User not found');
        }
        return userdata;
      });
      return user;
    },
  },
  Mutation: {
    registerUser: async (_, {
      email, password, firstName, lastName, imageUrl,
    }) => {
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
    },
  },
};
