import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 28,
    color: '#fd7767',
    fontFamily: 'Poppins-Bold'
  },
  regimeButton: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notlistedtext: {
    fontSize: 12,
    color: '#B2B2B2',
    fontFamily: 'Poppins-LightItalic',
    textDecorationLine: 'underline',
  },
  nextButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedButtonStyle: {
    backgroundColor: '#DC143C',
}
});

export default styles;
