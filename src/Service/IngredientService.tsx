import { DietApi, Configuration, Diet, IngredientsApi } from "../../API/index";
import { ingredientsStore } from "../Store/IngredientStore";
import {appStore} from '../Store/RecipesStore';
import {Param} from './../../environement/envdev'

export class IngredientsService {  

    configuration :Configuration = new Configuration(Param.confParam);
    ingredientService = new IngredientsApi(this.configuration);

    async getAllingredients() : Promise<Boolean>{
        await this.ingredientService.ingredientsGet().then(res => {
            ingredientsStore.setIngredients(res.data);  
            console.log(ingredientsStore.ingredients);
          }).catch(error=>{
            console.log(error);
            //isCreated = true;
          });
        return new Promise(function(resolve){
            resolve(true);
        });
    }
}

