import db from '../models';

const { Menudb } = db;

class MenuController {
  static async createMenu(_, { name, userId, imageUrl }) {
    let isExist = false;
    await Menudb.findOne({ name }, (err, res) => {
      if (res) {
        isExist = true;
      }
    });

    if (!isExist) {
      const menu = await new Menudb({ name, userId, imageUrl });
      menu.save();
      return menu;
    }
    // return 'Email already exist';
    throw new Error('Email is already taken');
  };

  static async getMenu() {
    const menu = await Menudb.find((err, menudata) => {
      if (err) {
        throw new Error('Menu not found');
      }
      return menudata;
    });
    return menu;
  }
}

export default MenuController;
