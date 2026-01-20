import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  /* text: {
    fontSize: 28,
    color: '#fd7767',
    fontFamily: 'Poppins-Bold'
  }, */
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  logo: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  carousel: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  stylebutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearbutton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }


});

export default styles;

