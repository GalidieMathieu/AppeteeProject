import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { Image, Text, Input, Button, ButtonGroup, CheckBox } from 'react-native-elements';
import { ProgressBar, Colors } from 'react-native-paper';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import { SelectionVM } from '../../../Vm/SelectionVm';
import { UserService } from '../../../Service/UserService';
import { observer } from 'mobx-react';
//import { Paragraph, Dialog, Portal } from 'react-native-paper';

@observer
export default class GoutScreen extends React.Component {
  vm = new SelectionVM();
  userService = new UserService();

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.vm.updateIngredients();
    console.log(this.vm.ingredientsName);
  }

  finishingCreationUser = async () => {
    const { navigation } = this.props;
    this.vm.updateUser();
    let isSuccess = false;

    await this.userService.createUser().then(value => {
      console.log("userService")
      console.log(value)
      isSuccess = value;
    });
    if (isSuccess == true) {
      navigation.navigate('Home');
    }

  }




  render() {
    const { navigation } = this.props;
    const buttons = ['Huitre', 'Poisson', 'Coriandre', 'Choux de Bruxelles', 'Boudin', 'Abats', 'Foie', "J'aime tout"]
    //const { selectedIndex } = this.state

    //dialog
    /* const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);*/

    return (
      <View style={styles.container}>

        <View style={styles.title}>
          <Text style={styles.titleText}>Je n'aime pas</Text>
        </View>

        {/* <View style={styles.goutButton}>
          <ButtonGroup
            //onPress={this.updateIndex}
            // selectedIndex={selectedIndex}
            //buttons = {button...}
            buttons={this.vm.mostDislikedIngredientsName}
            onPress = {(value) =>{this.vm.updateMostDislikedIngredients(value)}}
            containerStyle={{ width: 250, height: 350 }}
            textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 20 }}
            vertical
          />
          <Text style={styles.notlistedtext}>Un ingrédient n'est pas dans la liste ?</Text>
        </View> */}

        <View style={styles.goutButton}>
          <ScrollView>
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
            <CheckBox
              center
              title='Ingrédient 1'
              checked
            />
          </ScrollView>
        </View>

        <View style={styles.buttonGroup}>
          <View>
            <ViewIngredientsButton
              title="Plus d'aliments"
            //onPress={showDialog}
            />
            {/* <Portal>
              <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>This is simple dialog</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal> */}
          </View>

          <ViewIngredientsButton
            title="Suivant"
            onPress={this.finishingCreationUser}
          />
        </View>
      </View>
    );
  }
}

GoutScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
