import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';

import { baseURI } from "../../configs/baseURI";
import FruitsTable from "./FruitsTable";
import TopNavBar from "../Navbar/Navbar";
import { getFruits } from "../../store/actions";

const favoriteCheckbox = (name, checked, onSelect) => {
  return (
    <input type="checkbox" name={name} checked={checked} onChange={onSelect} />
  )
}

const Fruits = ({ favorite }) => {

  const [fruits, setFruits] = useState([]);
  const dispatch = useDispatch()
  const fruitsSelector = useSelector(state => state.fruitsReducer.fruits);

  useEffect(() => {
    dispatch(getFruits(favorite));
  }, []);

  useEffect(() => {
    let tempFruits = [...fruitsSelector];
    tempFruits = tempFruits.map((fruit, index) => {
      fruit.favorite = favoriteCheckbox(fruit.name, fruit.favorite, onSelect);
      return fruit;
    })
    setFruits(tempFruits);
  }, [fruitsSelector])

  const axiosFruit = axios.create();

  const onSelect = async (event) => {
    if (event.target.checked)
      await axiosFruit.post(baseURI + "addFavorite", {
        name: event.target.name
      });
    else await axiosFruit.post(baseURI + "removeFromFavorite", {
      name: event.target.name
    });
    dispatch(getFruits(favorite));
  }

  return (
    <>
      <TopNavBar />
      <FruitsTable fruits={fruits} favorite={favorite} />
    </>
  )
}

export default Fruits;