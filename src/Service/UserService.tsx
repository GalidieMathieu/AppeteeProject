import { makeAutoObservable, observable, action } from "mobx"
import { User,Recipes,DietApi, Configuration, Diet, UserApi } from "../../API/index";
import {userStore} from '../Store/StoreAppetee';
import {Param} from '../../environement/envdev'

export class UserService {   
    configuration :Configuration = new Configuration(Param.confParam);
    userApi = new UserApi(this.configuration);

    async createUser() : Promise<Boolean>{
      console.log("createUser");
      console.log(userStore.user);

      var isCreated : Boolean = false;
      const user : User = userStore.user;
      if(user.surname != ''){
        console.log(user.diets);
        await this.userApi.userPost(user).then(res => {
          console.log(res.data);
          isCreated = true;
        })
        .catch(error=>{
          console.log(error);
          isCreated = true;
        });
      }
      return new Promise(function(resolve){
        (isCreated)?resolve(true):resolve(false);
    });
    }
}

