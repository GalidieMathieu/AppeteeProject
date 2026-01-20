import {Param} from './../../environement/envdev'
import { User,AuthApi, Configuration } from "../../API/index";
import {userStore} from '../Store/UserStore';

export class AuthService{
    configuration : Configuration = new Configuration(Param.confParam)
    authService = new AuthApi(this.configuration);

    async SignIn(user: User) : Promise<Boolean>{
        var isCreated = true;
        await this.authService.authCreateUserPost(user)
        .then(res => {
            userStore.setSessionKey(res.data);
            userStore.initUser(user);
            console.log(Param.confParam.apiKey);
            isCreated = true;
        })
        .catch(error=>{
            console.log(error);
            isCreated = true;
        });
        return new Promise(function(resolve){
            (isCreated)?resolve(true):resolve(false);
        });
    }

}