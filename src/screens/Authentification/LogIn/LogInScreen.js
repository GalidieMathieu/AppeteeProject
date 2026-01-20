import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../../components/ClearButton/ClearButton';

export default class LogInScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image
            source={require('../../../../assets/logo_couleurs_avec_marge.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={styles.title}>
          <Text style={styles.text}>Connexion</Text>
        </View>

        <View style={styles.input}>
          <View >
            <Input
              //style={styles.body}
              placeholder="Pseudo ou email"
            //onChangeText={text => this.setState({ phone: text })}
            //value={this.state.phone}
            //placeholderTextColor={AppStyles.color.grey}
            //underlineColorAndroid="transparent"
            />
          </View>
          <View >
            <Input
              //style={styles.body}
              placeholder="Mot de passe"
            //onChangeText={text => this.setState({ email: text })}
            //value={this.state.email}
            //placeholderTextColor={AppStyles.color.grey}
            //underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.mdpOublie}>
            <ClearButton
              title="Mot de passe oublié ?"
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            />
          </View>
        </View>

        {/* <Button style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}
         // containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
         // style={styles.facebookText}
         //onPress={() => this.onRegister()}
        >
          Sign Up
        </Button> */}
        {/* <Button
        title="Créer mon compte"
        /> */}

        <View style={styles.buttons}>
          <View style={styles.styleButton}>
            <ViewIngredientsButton
              title="Se connecter"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
          <View style={styles.clearButton}>
            <Text> Pas de compte ?</Text>
            <ClearButton
              title="S'inscrire"
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

/*LogInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
}; */
