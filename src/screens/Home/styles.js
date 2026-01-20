import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    flexDirection: 'row',
  },
  titleGrey: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#707070",
  },
  titleRose: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: "#fd7767",
  },
  sousTitre: {
    flex: 1,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: "#FD7767"
  },
  listeConvives: {
    flex: 1,
    flexDirection: 'column',
  },
  sousSousTitre: {
    fontSize: 14,
    fontFamily: "Poppins-ExtraBold",
    color: "#DDDDDD"
  },
  stylebutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  personnesManger: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

export default styles;
