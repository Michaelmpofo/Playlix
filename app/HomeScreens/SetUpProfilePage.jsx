import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import GetStarted from '../../components/GetStarted.jsx'
import { Link } from 'expo-router'


const SetUpProfilePage = () => {
  return (
   
    <View style={styles.SetUpProfilePageContainer}>
     <View >
        <Link href="/HomeScreens/AccountPage" asChild>
        <TouchableOpacity>
        <Text style={styles.text2}>Not Now</Text>
        </TouchableOpacity>
        </Link>
      
        </View>
      <Text style={styles.newtext}>
      Music + Friends
            </Text>
            <Text style={styles.text}>
            See what your friends are listening to and 
            find the best new music together
            </Text>
            <View>
            <GetStarted/>
            </View>
           
            </View>
   
    
  )
}


const styles = StyleSheet.create({
     SetUpProfilePageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#000000',
      width : '100%',
      height : '100%',
      borderBlockEndColor:'#4A4A4A',
    },
  
    newtext: {
      fontSize: 31,
      color: '#ffff',
      marginTop:450,
      marginLeft:19,
      marginRight:120,
      fontWeight:'bold',
     
    },
    text: {
      fontSize: 15,
      color: '#ffff',
      marginTop:10,
      marginBottom:-30,
      marginLeft:20,
      marginRight:90,
      textAlign:'left',
    },
    textnew: {
      fontSize: 15,
      color: '#0AE78A',
      marginTop:20,
      marginLeft:0,
      marginRight:220,
      textAlign:'left',
     
     
    },
    txtnew: {
      fontSize: 18,
      color: '#ffff',
      marginTop:-200,
      marginBottom:300,
      marginLeft:0,
      marginRight:280,
      textAlign:'left',
     
     
    },
    text2: {
      fontSize: 15,
      color: '#0AE78A',
      marginTop:-80,
      marginBottom: 70,
      marginRight:15,
      marginLeft:280
    },
  }
)
export default SetUpProfilePage