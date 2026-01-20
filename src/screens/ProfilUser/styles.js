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
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontSize: 29,
    color: '#fd7767',
    fontFamily: 'Poppins-Regular',
  },
  categorie: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color:"#707070",
  },
  parrainage:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { 
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    margin: 2,
    padding: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color:"#707070",
  },
  code: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color:"#fd7767",
    textDecorationLine:'underline',
  },


  cardOmbre: {
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { 
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    margin: 4,
    padding: 20,
  },
});

export default styles;
