import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const SearchCard = ({label,img,text}) => {
  return (
    <View style={styles.searchCardListContainer}>
          <Text style={{ color: "white" }}>{label}</Text>
          <View
            style={{
              position: "absolute",
              zIndex:10,
              height: 20,
              width: 104,
              marginRight:10,
              marginBottom:10 ,
              backgroundColor: "#000000",
              bottom:0,
              right: 0,
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            <Text style={styles.textStyle}>{text}</Text>
          </View>
          <Image
            source={img}
            style={{ width: "100%", height: "100%", borderRadius: 10, resizeMode:"cover" }}
          />
        </View>
  )
}

export default SearchCard
const styles = StyleSheet.create({
  searchCardListContainer: {
    marginLeft: 15,
    marginBottom:10,
    position: "relative",
    height:141.69,
    width:160,
    alignItems:'center'
  },
  headingText: {
    fontSize: 22,
    color: "#fff",
    marginTop: 10,
  },
   textStyle:{
    fontSize:13,
    color:'#0AE78A',
   }
});