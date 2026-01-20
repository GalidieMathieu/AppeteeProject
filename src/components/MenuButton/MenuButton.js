import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types';
import styles from './styles';

export default class MenuButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.btnClickContain}
        underlayColor="rgba(128, 128, 128, 0.1)"
      >
        <View style={styles.btnContainer}>
          <Icon name={this.props.name} type={this.props.type} />
          <Text style={styles.btnText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
};
