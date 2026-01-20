import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  logo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    color: '#fd7767',
    fontFamily: 'Poppins-Bold'
  },
  input: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginHorizontal: 40
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  styleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearButton: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  }

});

export default styles;
