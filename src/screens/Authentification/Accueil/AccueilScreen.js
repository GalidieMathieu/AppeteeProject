import React from 'react';
import {
  FlatList,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { getIngredientName, getCategoryName, getCategoryById } from '../../../data/MockDataAPI';
import MenuButton from '../../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../../components/ClearButton/ClearButton';
import CarouselCards from '../../../components/Carousel/CarouselCards'



export default class AccueilScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image
            source={require('../../../../assets/logo_couleurs_avec_marge.png')}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <View style={styles.carousel}>
          <SafeAreaView style={styles.container}>
            <CarouselCards />
          </SafeAreaView>
        </View>

        <View style={styles.buttons}>
          <View style={styles.stylebutton}>
            <ViewIngredientsButton
              title="S'inscrire"
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            />
          </View>

          <View style={styles.clearbutton}>
            <ClearButton
              title="Se connecter"
              onPress={() => {
                navigation.navigate('LogIn');
              }}
            />
          </View>
        </View>

      </View>
    );
  }
}