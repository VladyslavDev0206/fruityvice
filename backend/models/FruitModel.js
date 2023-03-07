import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Fruits = db.define('fruits', {
  genus:{
    type: DataTypes.STRING
  },
  name:{
    type: DataTypes.STRING
  },
  family:{
    type: DataTypes.STRING
  },
  order:{
    type: DataTypes.STRING
  },
  carbohydrates: {
    type: DataTypes.FLOAT
  },
  protein: {
    type: DataTypes.FLOAT
  },
  fat: {
    type: DataTypes.FLOAT
  },
  calories: {
    type: DataTypes.FLOAT
  },
  sugar: {
    type: DataTypes.FLOAT
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
},{
  freezeTableName:true
});

(async () => {
  await db.sync();
})();

export default Fruits;