import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { Image, Text } from 'react-native-elements';

export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../../assets/logo_couleurs_avec_marge.png')}
          style={{width: 150, height: 150}}
        />
        <View style={styles.parrainage}>
          <Text style={{fontSize: 40, fontFamily: "Poppins-SemiBold"}}>25</Text>
          <Text style={{fontFamily: "Poppins-Regular"}}>Code de parrainage</Text>
          <Text style={{fontSize: 20, fontFamily: "Poppins-SemiBold", textDecorationLine: "underline"}}>XDFBH568NFI9NEO</Text>
        </View>

        <View style={styles.screens}>
          <MenuButton
            title="Préparer une recette"
            name="silverware-fork-knife"
            type="material-community"
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Débloquer des fonctionnalités"
            name="plus"
            type="material-community"
            onPress={() => {
              navigation.navigate('Categories');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Liste de course"
            //name= "format-list-checkbox"
            name="lock"
            type="material-community"
            onPress={() => {
              navigation.navigate('ListeCourse');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="A déguster plus tard"
            //name= "update"
            name="lock"
            type="material-community"
            onPress={() => {
              navigation.navigate('Sauvagarde');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Favoris"
            //name= "heart-outline"
            name="lock"
            type="material-community"
            onPress={() => {
              navigation.navigate('Favoris');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Calendrier"
            //name= "calendar-month-outline"
            name="lock"
            type="material-community"
            onPress={() => {
              navigation.navigate('Calendrier');
              navigation.closeDrawer();
            }}
          />
        </View>

        <View style={styles.parametres}>
          <MenuButton
            title="Paramètres"
            name="cog-outline"
            type="material-community"
            onPress={() => {
              navigation.navigate('ParametresHome');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
