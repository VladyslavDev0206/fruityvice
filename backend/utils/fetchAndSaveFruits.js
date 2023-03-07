import axios from "axios";
import baseURI from "../config/BaseUrl.js";
import Fruits from "../models/FruitModel.js";
import sendMail from "../utils/sendMail.js";

const fetchAndSaveFruits = async () =>{
  try {
    const axiosFruits = axios.create();
    const response = await axiosFruits.get(baseURI + "api/fruit/all");
    const fruits = response.data;
    let newFruitsCount = 0;
    let newFruitsString = '';
    // iterate the fruits fetched
    fruits.forEach(async fruit => {
      const existingFruit = await Fruits.findAll({
        where: {name: fruit.name}
      });
      // if there is not the same fruit
      // save it
      if(!existingFruit.length){
        let newFruit = new Fruits({
          genus: fruit.genus,
          name: fruit.name,
          family: fruit.family,
          order: fruit.order,
          carbohydrates: fruit.nutritions.carbohydrates,
          protein: fruit.nutritions.protein,
          fat: fruit.nutritions.fat,
          calories: fruit.nutritions.calories,
          sugar: fruit.nutritions.sugar,
        })
        newFruit.save();
        newFruitsCount ++;
        newFruitsString += ' ' + fruit.name;
      }
    });
    // send mail about new fruits
    if(newFruitsCount)
      sendMail(newFruitsString);
  } catch (error) {
    console.log(error);
  }
}

export default fetchAndSaveFruits;