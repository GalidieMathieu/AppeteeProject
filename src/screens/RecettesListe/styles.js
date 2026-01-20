import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  avatar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fd7767',
    fontFamily: 'Poppins-Medium'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  carousel: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  recettePour: {
    flex: 0.5, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
  }
});

export default styles;
