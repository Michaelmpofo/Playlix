import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const playlix1  = require('../assets/images/playlix1.png')
const GetPlayLix = () => {
  return (
    
        <View style={styles.GetPlayLixContainer}>
            <View style = {styles.infoContainer}>
            <View style = {styles.inContainer}>  
        <Image source={playlix1}  style={styles.playlixImg}/>
    <Text style = {styles.mainText}>One</Text>
            
            </View>    
         </View>
         
         </View>
    
    
  )
}

export default GetPlayLix
const styles =StyleSheet.create({
    GetPlayLixContainer:{
      position:'absolute',
      backgroundColor :'#fff',
      bottom:0,
      marginLeft: 30,
      marginRight: 0,
      marginBottom:209,
      padding: 15,
      borderColor: '#fff',
      flex:1,
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:17,
      height:80,
      width:85,
      
    },
    playlixImg: {
        width: 81,
        height: 40,
        marginRight:-25,
        marginLeft:-35,
        },

    infoContainer: {
        flex: 1,
        flexDirection:'row',
      },
      inContainer: {
        flex: 1,
        flexDirection:'row',
      },
      mainText: {
        fontSize: 21,
        fontWeight: 'bold',
        color:'black',
        marginRight:8,
        marginBottom:0,
        marginTop:7,
      },
      
})