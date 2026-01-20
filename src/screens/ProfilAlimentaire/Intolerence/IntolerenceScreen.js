import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Image, Text, Input, Button, ButtonGroup } from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import {SelectionVM} from '../../../Vm/SelectionVm';
import { IngredientsService } from '../../../Service/IngredientService';
import { observer } from 'mobx-react';

@observer
export default class IntolerenceScreen extends React.Component {

  vm = new SelectionVM();
  ingredientService = new IngredientsService();

  constructor(props){
    super(props);
  }
  async componentDidMount() {
    await this.ingredientService.getAllingredients();
    this.vm.updateIngredients();
  }

  ingredientDislikeChoice = ()=>{
    const { navigation } = this.props;
    this.vm.updateUser();
    navigation.navigate('Gout');
  } 

  render() {
    const { navigation } = this.props;
    const buttons = ['Arachides', 'Blé', 'Fruits de mer', 'Sésame', 'Lait', 'Noix', 'Oeuf', 'Soja', 'Moutarde']//'sans allergie/intolérence'
    //const { selectedIndex } = this.state
    
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Allergie/Intolérence</Text>
        </View>

        <View style={styles.allergieGroup}>
          <ButtonGroup
            //onPress={this.updateIndex}
            // selectedIndex={selectedIndex}
            buttons={this.vm.intolerence}
            onPress = {(value) =>{this.vm.updateSelectedIntolerence(value)}}
            containerStyle={{ width: 250, height: 350 }}
            textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 15 }}
            vertical
          />
          <Text style={styles.notlistedtext}>Mon allergie/intolérence n'est pas dans la liste ?</Text>
        </View>

        <View style={styles.nextButton}>
          <ViewIngredientsButton
            title="Suivant"
            onPress={this.ingredientDislikeChoice}
          />
        </View>
      </View>
    );
  }
}

IntolerenceScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
