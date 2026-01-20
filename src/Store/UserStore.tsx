import {makeAutoObservable, action } from 'mobx';
import { User,Configuration, Diet, IngredientsApi, RecipesApi, UserApi, Authentification, DietUser } from '../../API/index';
import { Param } from '../../environement/envdev';

class UserStore {

user : User ={surname : ''}
auth : Authentification = {session_cookie : Param.sessionKey , user_id : 0}

 constructor() {
    makeAutoObservable(this);
  }

  initUser(user : User) {
    this.user = user;
  }
  setDietUser(dietUser : DietUser[]){
    this.user.diets = dietUser;
  }
  setSessionKey(auth : Authentification){
     // Param.confParam.apiKey = auth.session_cookie;
    //  Param.sessionKey = auth.session_cookie;
    //  this.auth = auth;
  }

}

export const userStore: UserStore = new UserStore(); 