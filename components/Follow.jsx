import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Link } from 'expo-router'


const Follow= () => {
    const [isPressed, setIsPressed] = useState(false);
  return (
   
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      {isPressed ? (
      <View style={styles.FollowContainer2}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText2}>FOLLOWED </Text>
            </View>
         </View>
        ) : (
            <View style={styles.FollowContainer}>
           <View style = {styles.infoContainer}>
            <Text style = {styles.mainText}>FOLLOW </Text>
            </View>
         </View>

        )}
         </TouchableOpacity>
        );
    };
   
        


export default Follow
const styles =StyleSheet.create({
  FollowContainer:{
      
      backgroundColor :'#0AE78A',
      bottom:0,
      marginLeft: 45,
      marginRight: 0,
      marginBottom:0,
      padding: 12,
      borderColor: '#0AE78A',
      alignItems: 'left',
      justifyContent: 'left',
      borderRadius:20,
     
      
      width: 100,
        height: 30,
        marginTop:10,
        marginBottom:0,
        marginLeft:25,
        marginRight:0,
        alignSelf:'left',
        top:-10,
     
    },
    FollowContainer2:{
      
        backgroundColor :'#616161',
        bottom:0,
        marginLeft: 45,
        marginRight: 0,
        marginBottom:0,
        padding: 12,
        borderColor: '#0AE78A',
        alignItems: 'left',
        justifyContent: 'left',
        borderRadius:20,
       
        
        width: 100,
          height: 30,
          marginTop:10,
          marginBottom:0,
          marginLeft:25,
          marginRight:0,
          alignSelf:'left',
          top:-10,
       
      },
    infoContainer: {
        flex: 1,
        flexDirection:'row',
        
      },
      mainText: {
        fontSize: 15,
        marginLeft: 11,
        color:'white',
        marginBottom:-20,
        marginTop:0,
        paddingTop:1,
        top:-7,
        
        
        
      },
      mainText2: {
        fontSize: 14,
        marginLeft: 0,
        marginRight:0,
        color:'white',
        marginBottom:-20,
        marginTop:0,
        paddingTop:1,
        top:-7,
        
        
        
      },
})