import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { Icon } from 'react-native-elements'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.57)

const CarouselCardItemRecettes = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        //source={require(item.imgSource)}
        source={require('../../../assets/etape1.png')}
        style={styles.image}
      />
      <Text style={styles.header}>{item.title}</Text>
      <View style={styles.time}>
        <Icon name='schedule' color='#707070' />
        <Text style={styles.timeText}>&emsp;15 min</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: ITEM_WIDTH,
    paddingBottom: 30,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
  },
  header: {
    color: "#fd7767",
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 20,
    paddingLeft: 20,
  },
  time: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  timeText: {
    fontFamily: 'Poppins-Regular',
    color:"#707070",
    fontSize: 15,
  },
})

export default CarouselCardItemRecettes