import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
import './API/index';
import axios from 'axios';
import { observer } from 'mobx-react';
import { RecetteService } from './src/Service/RecetteService';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {appStore} from './src/Store/RecipesStore';

import { Recipes,Configuration, DietApi, IngredientsApi, RecipesApi, UserApi } from './API/index';
import {Param} from './environement/envdev'

//import { sha256 } from 'react-native-sha256';
import CarouselCards from './src/components/Carousel/CarouselCards'


export default function App() {
  return (
     <AppContainer />
  );
}

/* 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarouselCards />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
}); 

 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
/*
@observer
export default class App extends React.Component {
  recetteService = new RecetteService();   

// make the GET request to fetch data from the URL then using promise function to handle response.
  componentDidMount() {
    //this.recetteService.getService();
    this.recetteService.setService({nom:"je suis un tets",id:20})
    
    sha256("Je suis un petitca").then( hash => {
      console.log(hash);   
  })
  }


  render() {
   return (
    <View style={styles.container}>
    <FlatList
      data = {appStore.Recettes}
      renderItem={({item}) => <Text style={styles.item}>{item.nom.toString()}</Text>}
    /> 
    </View>   
    )
  }  

 
} */