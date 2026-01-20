import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Text, Avatar } from 'react-native-elements';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import CarouselCardsRecettes from '../../components/CarouselRecettes/CarouselCardsRecettes'


export default class RecettesListeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.avatar}>
          <Avatar
            size="medium"
            title="CD"
            rounded
            onPress={() => {
              navigation.navigate('ProfilUser');
            }}
            overlayContainerStyle={{ backgroundColor: 'grey' }}
          />
        </View>

        <View style={styles.recettesPour}>
          <Text style={styles.title}>Recettes pour...</Text>
        </View>

        <View style={styles.carousel}>
          <SafeAreaView style={styles.container}>
            <CarouselCardsRecettes />
          </SafeAreaView>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            title="Trouver ma recette"
            onPress={() => {
              navigation.navigate('Recette');
            }}
          />
        </View>

      </View>
    );
  }
}

RecettesListeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
