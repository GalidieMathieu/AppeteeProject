import { AxiosPromise } from "axios";
import { DietApi, Configuration, Diet } from "../../API/index";
import { dietStore } from "../Store/DietStore";
import {appStore} from '../Store/RecipesStore';
import {Param} from './../../environement/envdev'

export class DietService {   
    configuration :Configuration = new Configuration(Param.confParam);
    dietService = new DietApi(this.configuration); 
    async getAllDiets() : Promise<Boolean>{
      console.log(this.configuration);
        await this.dietService.dietGet().then(res => {
            dietStore.setDiet(res.data);  
            console.log(dietStore.diets);
          }).catch(error=>{
            console.log(error);
            //isCreated = true;
          });;
        return new Promise(function(resolve){
            resolve(true);
        });
    }
    setService(diet : Diet){
      this.dietService.dietDietIdGet(1).then(res => {
        appStore.setTest(res.data);
        console.log("post");
        console.log(appStore.test);
      }
      )
    }
}

