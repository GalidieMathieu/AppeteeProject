import { makeAutoObservable, observable, action } from "mobx"
import { Recipes,DietApi, Configuration, Diet } from "../../API/index";
import {appStore} from '../Store/RecipesStore';
import {Param} from './../../environement/envdev'

export class RecetteService {   
    configuration :Configuration = new Configuration(Param.confParam);
    ingredient = new DietApi(this.configuration); 
    getService(){
    this.ingredient.dietGet().then(res => {
        appStore.setRecette(res.data);  
        console.log(appStore.Recettes);
      })
    }
    setService(diet : Diet){
      this.ingredient.dietDietIdGet(1).then(res => {
        appStore.setTest(res.data);
        console.log("post");
        console.log(appStore.test);
      }
      )
    }
}

