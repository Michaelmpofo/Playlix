import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import Done from '../../components/Done';
const SetUpProfilePage4 = () => {
  return (
   
    <View style={styles.SetUpProfilePageContainer}>
       <View style={styles.infoContainer}>
     <View >
     <Link href='/HomeScreens/SetUpProfilePage3'asChild>
      <TouchableOpacity>
      <AntDesign name="left" size={20} color="#0AE78A" style={styles.arrow} />
      </TouchableOpacity>
      </Link>
      <Text style={styles.txt}>
      Choose who can follow you

            </Text>
           
        </View>
        <View style={styles.InfContainer}>
        <Text style={styles.text2}>
        Everyone
            </Text>
            <Entypo name="circle" size={21} color="grey" style={styles.tickImage}/>

            </View>
            <View style={styles.InfContainer}>
            <Text style={styles.text2}>
            People you approve
            </Text>
            <Entypo name="circle" size={21} color="grey" style={styles.tickImage}/>
            </View>
            <Text style={styles.text}>
            FRIEND RECOMMENDATIONS
            </Text>
            <Text style={styles.text2}>
            Contacts on Playlix
            </Text>
            <View style={styles.InfContainer}>
            <Text style={styles.text3}>
            Allow Playlix to periodically check the
contacts on your device to recommend new
friends
            </Text>
            </View>
            <Text style={styles.text2}>
            Allowing Finding by Apple ID
            </Text>
            <Text style={styles.text3}>
            People who have the email address or phone
number you use for your Apple ID in their
contacts may see you as a recommended
friend
            </Text>
           
        </View>

            
            <View>
          <Done/>
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
    tickImage: {
      position: 'absolute',
      top: -50,
      marginRight: 0,
      bottom:0,

      marginLeft:294,
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
        width: 40,
        height: 40,
        marginTop:10,
        marginBottom:0,
        marginLeft:25,
        marginRight:0,
        alignSelf:'left',
        top:0,
       
       
        },

      arrow: {
        marginTop:0,
        marginLeft:-31,
        marginRight:0,
        alignSelf:'left',
        top:-155,
        bottom:0,
        left:55,
      },
      txt: {
          fontSize: 22,
          color: '#ffff',
          marginTop:-10,
          top:-130,
          textAlign:'left',
          fontWeight:'bold',
          marginRight:180,
          marginLeft:-10,
          bottom:0,
          left:35,
          marginBottom:-45,
          
      },
      text: {
        fontSize: 11,
        color: '#616161',
        marginTop:0,
        top:-50,
        textAlign:'left',
        fontWeight:'bold',
        marginRight:0,
        marginLeft:20,
        bottom:0,
        left:10,
        
    },
    text2: {
      fontSize: 17,
      color: '#ffff',
      marginTop:0,
      marginBottom:50,
      textAlign:'left',
      fontWeight:'bold',
      marginRight:20,
      marginLeft:20,
      bottom:0,
      left:10,
      top:-50,
  },
  text3: {
    fontSize: 10,
    color: '#ffff',
    marginTop:0,
    textAlign:'left',
    marginRight:130,
    marginLeft:20,
    bottom:0,
    left:10,
    top:-100,
},
InfContainer: {
  flexDirection: 'row',
  width: '100%',
  paddingVertical: 0,
  borderBottomWidth: 1,
  
},
 
     
  }
)

export default SetUpProfilePage4;