import { observable, computed, action, makeAutoObservable } from 'mobx';
import { User } from '../../API';

export class AppVM {

  pseudo: string = '';
  password: string = '';
  email : string = '';
  isLoading : Boolean = false;
  user : User = {surname:this.pseudo, is_child: false};

  constructor() {
      makeAutoObservable(this);
    }

 setNewUser(){
    this.user.surname = this.pseudo;
    this.user.password_user = this.password;
    this.user.email = this.email;
 }
  setPseudo(pseudo: string) {
    this.pseudo = pseudo;
  }

  setPassword(password: string) {
    this.password = password;
  }
  setEmail(email: string) {
    this.email = email;
  }
  
  setLoading(isLoading : Boolean)
  {
      this.isLoading = isLoading;
  }

}