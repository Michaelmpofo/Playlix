import { View, Text,StyleSheet,Image, } from 'react-native'
import React from 'react'


const LibraryCard = ({label,img}) => {
  return (
   <View style= {styles.libraryCardContainer}>
      <Image source = {img} style = {styles.libraryCardImg}/>
            <Text>{label}</Text>

    </View>
  )
}

export default LibraryCard
const styles = StyleSheet.create({
 libraryCardImg:{
  width: "100%",
   height: "100%",
   borderRadius: 10,
   resizeMode:"cover",
  boarderRadius: 13,
  marginLeft: 10,
  
  
},
libraryCardContainer:{
  flex: 1,
  flexDflexDirection: 'row',
  

}

 })



