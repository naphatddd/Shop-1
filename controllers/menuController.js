const Menu = require("../models/menu");

exports.index = async (req, res, next) => {
  const menu = await Menu.find().populate("shop", "photo");
  res.status(200).json({
    data: menu,
  });
};
