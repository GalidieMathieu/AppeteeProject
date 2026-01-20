import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
/* import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' */

//TEMPLATE APP PAGES (NOT USED)
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';

//APPETEE PAGES (USED)
import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import SignUpScreen from '../screens/Authentification/SignUp/SignUpScreen';
import LogInScreen from '../screens/Authentification/LogIn/LogInScreen';
import ChooseRecipeScreen from '../screens/ChooseRecipe/ChooseRecipeScreen';
import RegimeScreen from '../screens/ProfilAlimentaire/Regime/RegimeScreen';
import IntolenceScreen from '../screens/ProfilAlimentaire/Intolerence/IntolerenceScreen';
import GoutScreen from '../screens/ProfilAlimentaire/Gout/GoutScreen';
import AccueilScreen from '../screens/Authentification/Accueil/AccueilScreen';
import ProfilUserScreen from '../screens/ProfilUser/ProfilUserScreen';
import RecettesListeScreen from '../screens/RecettesListe/RecettesListeScreen';
import RecetteScreen from '../screens/Recette/RecetteScreen';
import CalendrierScreen from '../screens/Premium/Calendrier/CalendrierScreen';
import FavorisScreen from '../screens/Premium/Favoris/FavorisScreen';
import ListeCourseScreen from '../screens/Premium/ListeCourse/ListeCourseScreen';
import SauvagardeScreen from '../screens/Premium/Sauvegarde/SauvagardeScreen';
import ParametresHomeScreen from '../screens/Parametres/ParametresHome/ParametresHome';


/* const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} */

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
    SignUp: SignUpScreen,
    ChooseRecipe : ChooseRecipeScreen,
    LogIn: LogInScreen,
    Regime: RegimeScreen,
    Intolerence: IntolenceScreen,
    Gout: GoutScreen,
    Accueil: AccueilScreen,
    ProfilUser: ProfilUserScreen,
    RecettesListe: RecettesListeScreen,
    Recette: RecetteScreen,
    Calendrier: CalendrierScreen,
    Favoris: FavorisScreen,
    ListeCourse: ListeCourseScreen,
    Sauvagarde: SauvagardeScreen,
    ParametresHome: ParametresHomeScreen,
    //DrawerContainer: DrawerContainer,

  },
  {
    initialRouteName: 'Gout',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 

/* const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      drawerContent={props=> DrawerContainer}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} */

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

/* export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} */
 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;