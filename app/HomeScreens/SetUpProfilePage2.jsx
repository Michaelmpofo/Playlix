import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import FindFriendsTab from '../../components/FindFriendsTab'
const SetUpProfilePage2 = () => {
  const Handshake = require('../../assets/images/homeScreenimages/handshake.png');
  const Rectangle= require('../../assets/images/homeScreenimages/Rectangle.png');
  return (
   
    <View style={styles.SetUpProfilePageContainer}>
       <View style={styles.infoContainer}>
     <View >
     <Link href='/HomeScreens/SetUpProfilePage'asChild>
      <TouchableOpacity>
      <AntDesign name="left" size={20} color="#0AE78A" style={styles.arrow} />
      </TouchableOpacity>
      </Link>
      <Text style={styles.txt}>
      Help others find you
            </Text>
            <Image source={Handshake}  style={styles.playlixImg}/>
        <Image source={Rectangle}  style={styles.Img}/>
        </View>
        <View style={styles.InfContainer}>
        <Text style={styles.text3}>Username </Text>
        </View>
        <View style={styles.InfContainer}>
        <Text style={styles.text1}>Name </Text>
        </View>
        </View>
      <Text style={styles.newtext}>
      Certain profile information is always public, but you can control who
follows your activity. Playlix does not learn your contacts when
recommending friends
            </Text>
            <Text style={styles.text}>
            See how your data is managed
            </Text>
            <View>
            <FindFriendsTab/>
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
      fontSize: 10,
      color: '#ffff',
      marginTop:340,
      marginLeft:19,
      marginRight:10,
      textAlign:'center',
      marginBottom:0,
      top:40,
    },
    text: {
      fontSize: 10,
      color: '#0AE78A',
      marginTop:10,
      marginBottom:-70,
      textAlign:'center',
      top:40,
    },
    text1: {
      fontSize: 20,
      color: '#ffff',
      marginTop:115,
      marginBottom:-210,
      textAlign:'left',
     
    },
    InfContainer: {
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#4A4A4A',
      
    },
    text3: {
      fontSize: 20,
      color: '#ffff',
      marginTop:100,
      marginBottom:-200,
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
      marginTop:0,
      marginBottom: 0,
      marginRight:15,
      marginLeft:280,
      BorderbottomColor:'#ffff',
     
    },
    playlixImg: {
      width: 71,
      height: 70,
      marginTop:410,
      marginBottom:-600,
      marginLeft:100,
      marginRight:80,
      top:40,
     
      }, Img: {
        width: 82,
        height: 88,
        marginTop:210,
        marginBottom:0,
        marginLeft:0,
        marginRight:0,
        alignSelf:'center',
       
        },

      arrow: {
  
        marginTop:-170,
        marginLeft:-40,
        marginRight:0,
        marginBottom:0,
        alignSelf:'left',
        
        
      },
      txt: {
          fontSize: 22,
          color: '#ffff',
          marginTop:-129,
          marginBottom:-70,
          textAlign:'left',
          fontWeight:'bold',
          marginRight:70,
          marginLeft:-30,
      },
     
  }
)

export default SetUpProfilePage2