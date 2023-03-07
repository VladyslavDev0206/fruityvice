import Fruits from "../models/FruitModel.js";
// import sendMail from "../utils/sendMail.js";

// method: GET
// get all fruits
export const getFruits = async (req, res) => {
  try {
    const fruits = await Fruits.findAll({});
    res.json({fruits: fruits});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: error});
  }
}

export const addFavorite = async (req, res) => {
  try {
    let fruit = await Fruits.findOne({
      where: {name: req.body.name}
    });
    fruit.favorite = true;
    await fruit.save();
    res.status(200).json({message: req.body.name + " is added to favorites list"});
  } catch (error) {
    res.status(500).json({message: error});
    console.log(error);
  }
}

export const removeFavorite = async(req, res) => {
  try {
    let fruit = await Fruits.findOne({
      where: {name: req.body.name}
    });
    fruit.favorite = false;
    await fruit.save();
    res.status(200).json({message: req.body.name + " is removed from favorites list"});
  } catch (error) {
    res.status(500).json({message: error});
    console.log(error);
  }
}

export const getFavorites = async(req, res) => {
  try {
    let fruits = await Fruits.findAll();
    fruits = fruits.filter((fruit) => fruit.favorite);
    res.status(200).json({fruits : fruits});
  } catch (error) {
    res.status(500).json({message:error});
    console.log(error);
  }
}