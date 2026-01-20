import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../components/ClearButton/ClearButton';

export default class RecetteScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal:40}}>
        
        <View style={{flex: 0.5, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.text}>Recette</Text>
        </View>
        
      </View>
    );
  }
}

RecetteScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
