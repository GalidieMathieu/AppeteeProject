import {makeAutoObservable, action } from 'mobx';
import { Recipes,Configuration, Diet, IngredientsApi, RecipesApi, UserApi } from '../../API/index';

class RecetteStore {

 Recettes: Diet[] = [];
 test : Diet = { nom:"",id:5};

 constructor(Recettes: Diet[]) {
    makeAutoObservable(this);
    this.Recettes = Recettes;
  }

  setRecette(RecetteForSet: Diet[]) {
    this.Recettes = RecetteForSet;
  }

  setTest(test: Diet){
    this.test = test;
  }

}

export const appStore: RecetteStore = new RecetteStore([],); 