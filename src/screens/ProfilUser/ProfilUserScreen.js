import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Avatar } from 'react-native-elements'
import { Chip } from 'react-native-paper';
//import MenuButton from '../../../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../components/ClearButton/ClearButton'

export default class ProfilUserScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView>

          <View style={styles.avatar}>
            <Avatar
              size="xlarge"
              title="CD"
              rounded
              onPress={() => {
                navigation.navigate('ProfilUser');
              }}
              overlayContainerStyle={{ backgroundColor: 'grey' }}
            />
          </View>

          <View style={styles.cardOmbre}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.username}>Username</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.categorie}>Régime alimentaire</Text>
              <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>vegan</Chip>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <Text style={styles.categorie}>Allergie/Intolérence</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: "wrap" }}>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>gluten</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>lactose</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>noisette</Chip>
              </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
              <Text style={styles.categorie}>Goûts</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: "wrap" }}>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>épinard</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>chips</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>patate</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>épinard</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>chips</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>patate</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>épinard</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>chips</Chip>
                <Chip textStyle={{color:"white", fontFamily: "Poppins-Regular", fontSize: 12}} style={{backgroundColor:"#fd7767"}}>patate</Chip>
              </View>
            </View>
          </View>

          <View style={styles.parrainage}>
            <Text style={styles.text}>Code de parrainage</Text>
            <Text style={styles.code}> XDFBH568NFI9NEO</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>


          </View>



        </ScrollView>
      </SafeAreaView>

    );
  }
}

ProfilUserScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
