import {makeAutoObservable, action } from 'mobx';
import { Recipes,Configuration, Diet, IngredientsApi, RecipesApi, UserApi, DietUser } from '../../API/index';

class DietStore {

 diets: Diet[] = [];
 dietUser : DietUser[] = [];

 constructor() {
    makeAutoObservable(this);
  }

  setDiet(diets: Diet[]) {
    this.diets = diets;
    diets.forEach(diets => this.dietUser.push({id_diet : diets, allergy : false}))

    console.log("dietUser Log")
    console.log(this.dietUser)
  }

}

export const dietStore: DietStore = new DietStore(); 