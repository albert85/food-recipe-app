import UserController from './UserController';
import MenuController from './MenuController';

const { createUser, getUser } = UserController;
const { createMenu, getMenu } = MenuController;

// Create an express server and a GraphQL endpoints
export default {
  Query: {
    description: () => 'user not listed',
    user: getUser,
    menu: getMenu,
  },
  Mutation: {
    registerUser: createUser,
    createMenu,
  },
};
