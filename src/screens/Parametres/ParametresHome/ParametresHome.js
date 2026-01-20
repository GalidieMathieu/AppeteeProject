import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../../components/ClearButton/ClearButton';

export default class ParametresHomeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', marginHorizontal:40}}>
        <View style={{flex: 0.5, justifyContent: 'flex-start', alignItems: 'center'}}>
          <Text style={styles.text}>Paramètres</Text>
        </View>

        <View style={styles.infoContainer}>
        <ViewIngredientsButton 
          title="Déconnexion"
          onPress={() => {
            navigation.navigate('Accueil');
          }}
        />
      </View>

      </View>
    );
  }
}

ParametresHomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
