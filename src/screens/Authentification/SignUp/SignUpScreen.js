import React from 'react';
import { View,TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../../components/MenuButton/MenuButton';
import { Image, Text, Input, Button } from 'react-native-elements';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import ClearButton from '../../../components/ClearButton/ClearButton';
import { extendObservable,observer } from 'mobx-react';
import {AppVM} from '../../../Vm/testLogin';
import { AuthService } from '../../../Service/AuthService';

@observer
export default class SignUpScreen extends React.Component {

  vm = new AppVM();
  authService = new AuthService();
  constructor(props){
    super(props);
  }

  onPressSignIn = async ()=>{
    const { navigation } = this.props;
    this.vm.setLoading(true);
    this.vm.setNewUser();
    let isSuccess = false;
    
    await this.authService.SignIn(this.vm.user).then(value=>{
      console.log("this.authService")
      console.log(value)
      isSuccess = value;
    });
    if(isSuccess== true){
      navigation.navigate('Regime');
    }
    
    
    
  } 
  
  /*
  onChange(event = {}){
    console.log(event)
    const name = event.target && event.target.name;
    const value = event
    console.log("onChange")
    console.log(value)
    console.log(name)
    switch(value){
      case 'Pseudo' :this.vm.setPseudo(value); break;
      case 'password' : this.vm.setPassword(value);break;
      case 'email': this.vm.setEmail(value);break;
    }
  }*/
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

        <View style={styles.title}>
          <Text style={styles.text}>Inscription</Text>
        </View>
        
        <View style={styles.input}>
          <View >
            <Input
              //style={styles.body}
              placeholder="Pseudo"
              name="Pseudo"
              onChangeText = {text=>this.vm.setPseudo(text)}
              value = {this.vm.pseudo}
              //onChangeText={text => this.setState({ fullname: text })}
              //value={this.state.fullname}
              //placeholderTextColor={AppStyles.color.grey}
              //underlineColorAndroid="transparent"
            />
          </View>
          <View >
            <Input
              //style={styles.body}
              placeholder="Email"
              name="email"
              onChangeText = {(value) => this.vm.setEmail(value)}
              value = {this.vm.email}
              fluid
              //onChangeText={text => this.setState({ phone: text })}
              //value={this.state.phone}
              //placeholderTextColor={AppStyles.color.grey}
              //underlineColorAndroid="transparent"
            />
          </View>
          <View >
            <Input
              //style={styles.body}
              placeholder="Password"
              name="password"
              onChangeText = {(value) => this.vm.setPassword(value)}
              value = {this.vm.password}
              secureTextEntry={true}
              fluid
              //onChangeText={text => this.setState({ email: text })}
              //value={this.state.email}
              //placeholderTextColor={AppStyles.color.grey}
              //underlineColorAndroid="transparent"
            />
          </View>
          <View>
            <Input
              //style={styles.body}
              label="FACULTATIF"
              placeholder="Code de parrainage"
              onChangeText = {this.onChange}
              value = {this.vm.password}
              //secureTextEntry={true}
            // onChangeText={text => this.setState({ password: text })}
              //value={this.state.password}
              //placeholderTextColor={AppStyles.color.grey}
              //underlineColorAndroid="transparent"
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
              title="Créer mon compte"
              onPress={this.onPressSignIn}
            />
          </View>

          <View style={styles.clearButton}>
            <Text> Déja un compte ?</Text>
            <ClearButton 
              title="Se connecter"  
              onPress= {this.onSubmit}
              
              /* () => {
                navigation.navigate('LogIn');
              } */
            />

          </View>
        </View>

      </View>
    );
  }
}


SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
}; 
