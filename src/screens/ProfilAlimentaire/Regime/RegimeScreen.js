import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Image, Text, Input, Button, ButtonGroup } from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import {dietStore} from '../../../Store/DietStore'
import { DietService } from '../../../Service/DietService';
import { observer } from 'mobx-react';
import {SelectionVM} from '../../../Vm/SelectionVm';

@observer
export default class RegimeScreen extends React.Component {

  dietService = new DietService();
  vm = new SelectionVM();

  constructor(props){
    super(props);
  }

  async componentDidMount() {
    await this.dietService.getAllDiets();
    this.vm.updateDietNames();
    console.log("componentDidMount");
    console.log(this.vm.dietNames);
  }

  intolerenceChoice = ()=>{
    const { navigation } = this.props;
    this.vm.updateUser();
    navigation.navigate('Intolerence');
  }

  render() {
    const { navigation } = this.props;
    //ici tu avais const data = [....] un tableau de string de régime 
    //const { selectedIndex } = this.state
    
    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Régime alimentaire</Text>
        </View>

        <View style={styles.regimeButton}>
          <ButtonGroup
            //onPress={this.updateIndex}
            // selectedIndex={selectedIndex}
            selectedButtonStyle={{backgroundColor: 'red'}}
            buttons={this.vm.dietNames}
            onPress = {(value) =>{this.vm.updateSelectedDiet(value)}}
            containerStyle={{ width: 250, height: 350 }}
            textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 20 }}
            vertical
          />
          <Text style={styles.notlistedtext}>Mon régime n'est pas dans la liste ?</Text>
        </View>

        <View style={styles.nextButton}>
          <ViewIngredientsButton
            title="Suivant"
            onPress={this.intolerenceChoice}
          />
        </View>
      </View>
    );
  }
}

RegimeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
