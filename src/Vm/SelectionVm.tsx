import { observable, computed, action,makeAutoObservable } from 'mobx';
import { Diet, DietUser, Ingredients, User } from '../../API';
import { dietStore } from '../Store/DietStore';
import { ingredientsStore } from '../Store/IngredientStore';
import { userStore } from '../Store/UserStore';

export class SelectionVM {

  dietNames: String[] = [];
  ingredientsName : String[] = [];
  intolerence : String[] = ['Arachides', 'Blé', 'Fruits de mer', 'Sésame', 'Lait', 'Noix', 'Oeuf', 'Soja', 'Moutarde'];
  mostDislikedIngredientsName : String [] = ['Huitre', 'Poisson', 'Coriandre', 'Choux de Bruxelles', 'Boudin', 'Abats', 'Foie', "J'aime tout"];

  dietSelected: DietUser[] = [];
  dislikedIngredientSelected:Ingredients[] = [];
  isLoading : Boolean = false;

  constructor() {
      makeAutoObservable(this);
    }

  //---------------------------- Updates Names ----------------------------
  updateDietNames(){
    var items: String[] = [];
    dietStore.diets.forEach(diet=>{
      items.push(diet.nom);
    });
    this.dietNames = items;
    console.log("updateDietNames");
    console.log(this.dietNames);
  }

  updateIngredientsNames(){
    var items: String[] = [];
    ingredientsStore.ingredients.forEach(ingredient=>{
      items.push(ingredient.nom);
    });
    this.ingredientsName = items;
  }

  //---------------------------- Update Selections ----------------------------

  /*
  //DietSelection onClik event | selectedIndex : the selected position in the list
  */
  updateSelectedDiet(selectedIndex: number){
    if(Array.isArray(dietStore.diets) && dietStore.diets.length){
      const diet:Diet = dietStore.diets[selectedIndex];
      console.log("---------updateSelectedDiet------")
      console.log(diet)
      const dietUser = dietStore.dietUser.find((dietUser): dietUser is DietUser => dietUser.id_diet.id == diet.id)
      console.log(dietUser)
      if (dietUser)
      {
        const index = this.dietSelected.indexOf(dietUser);
      
      
        if(index > -1)
        {
            this.dietSelected.splice(index,1);
        }
        else{
            this.dietSelected.push(dietUser);
        }
      }
    }
    console.log("---------updateSelectedDiet------")
    console.log(this.dietSelected)
  }

  /*
  //update Selected Intolerence onClik event | selectedIndex : the selected position in the list
  */
  updateSelectedIntolerence(selectedIndex:number){
    const selectedIndredient  = this.intolerence[selectedIndex];
    console.log(selectedIndredient)
    if(Array.isArray(ingredientsStore.ingredients))
    {
      if(selectedIndredient == 'Fruits de mer' || selectedIndredient == 'Arachides'){
        const ingredients = ingredientsStore.ingredients.filter((ingredient): ingredient is Ingredients => ingredient.ingredient_type == selectedIndredient);
        if(Array.isArray(ingredients) && ingredients.length){
          this.dislikedIngredientSelected.push(...ingredients);
        }
      }
      else{
        const ingredientFind  = ingredientsStore.ingredients.find((ingredient): ingredient is Ingredients => ingredient.nom == selectedIndredient);
        if(ingredientFind){
          this.dislikedIngredientSelected.push(ingredientFind);
        }
      }
    }
    console.log( this.dislikedIngredientSelected);
  }

  /*
  //update Selected Intolerence onClik event | selectedIndex : the selected position in the list
  */
  updateMostDislikedIngredients( selectedIndex : number){
    const selectedIndredientName  = this.mostDislikedIngredientsName[selectedIndex];
    this.updateSelectedIngredient(selectedIndredientName)
  }

  updateDislikedIngredients( selectedIndex : number){
    const selectedIndredientName  = this.ingredientsName[selectedIndex];
    this.updateSelectedIngredient(selectedIndredientName)
  }

  updateSelectedIngredient(selectedIndredientName :String ){
    if(Array.isArray(ingredientsStore.ingredients) && ingredientsStore.ingredients.length){
      const ingredientFind  = ingredientsStore.ingredients.find(ingredient => ingredient.nom == selectedIndredientName);
        if(ingredientFind){
          const index = this.dislikedIngredientSelected.indexOf(ingredientFind);
          if(index > -1)
          {
            this.dislikedIngredientSelected.splice(index,1);
          }
          else{
            this.dislikedIngredientSelected.push(ingredientFind);
          }
        }
    }
    console.log( this.dislikedIngredientSelected);
  }


  //---------------------------- General Update ----------------------------

  /*
  update Selected Intolerence onClik event | selectedIndex : the selected position in the list
  */
  updateIngredients(){
    console.log("update updateIngredients");
    console.log(userStore.user.diets);
    this.dietSelected = (userStore.user.diets)?userStore.user.diets:[];
    this.dislikedIngredientSelected = (Array.isArray(userStore.user.disliked_ingredient) && userStore.user.disliked_ingredient.length)? userStore.user.disliked_ingredient:[];
    this.updateIngredientsNames();
  }


  //User
  updateUser(){ 
    console.log("update User");
    userStore.setDietUser(this.dietSelected);
    console.log(userStore.user);
    userStore.user.disliked_ingredient = this.dislikedIngredientSelected;
  }

}