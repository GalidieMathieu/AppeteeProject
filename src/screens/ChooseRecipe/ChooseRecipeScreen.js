import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../data/dataArrays';
import MenuImage from '../../components/MenuImage/MenuImage';
import DrawerActions from 'react-navigation';
import { getCategoryName } from '../../data/MockDataAPI';
import { SearchBar, ListItem, Avatar } from 'react-native-elements'
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton'; 

export default class ChooseRecipeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'choose recipe',
      headerLeft: (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      )
    });
  
    constructor(props) {  
      super(props);
    }
  
    onPressRecipe = item => {
      this.props.navigation.navigate('Recipe', { item });
    };
  
    //searchbar
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
    //searchbar
  
    renderRecipes = ({ item }) => (
      <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    );
  
   
    render() {
      return (
        <View>
          <Text style={{fontSize:30, fontFamily:"Poppins-SemiBold"}}>Salut *username*, on prépare pour qui ? </Text> 
          
        
        </View>
      );
    }
  }
  

