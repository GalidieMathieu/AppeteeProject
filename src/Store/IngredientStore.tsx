import {makeAutoObservable, action } from 'mobx';
import { Ingredients } from '../../API/index';

class IngredientsStore {

 ingredients: Ingredients[] = [];

 constructor() {
    makeAutoObservable(this);
  }

  setIngredients(ingredients: Ingredients[]) {
    this.ingredients = ingredients;
  }

}

export const ingredientsStore: IngredientsStore = new IngredientsStore(); 