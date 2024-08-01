import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import RedeemCodeBar from '../../components/RedeemCodeBar'
import TunesCard from '../../components/tunesCard'
import Camerabutton from '../../components/Camerabutton'
import { Link } from 'expo-router'


  
const RedeemCodePage = () => {
  return (
    <View style={styles.RedeemCodePageContainer}>
     <RedeemCodeBar/>
      <TunesCard/>
      <Text style={styles.newtext}>
            Redeem your gift card using
            the camera on your device.
            </Text>
            <Text style={styles.text}>
            This requires a gift card with a box around the
            code, as shown here.
            </Text>
            <View>
            
            </View>
            <View>
              <Link href='/HomeScreens/EnterCodePage'asChild>
              
            <Text style={styles.textnew}>
           You can use your code manually
            </Text>
           
              </Link>
            </View>
            <View>
            <TouchableOpacity>
            <Text style={styles.txtnew}>
           Terms and Conditions {'>'}
            </Text>
            </TouchableOpacity>
            </View>

            

            
     </View>
    
  )
}

export default RedeemCodePage
const styles = StyleSheet.create({
    RedeemCodePageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#000000',
      width : '100%',
      height : '100%',
    },
    newtext: {
      fontSize: 24,
      color: '#ffff',
      marginTop:-450,
      marginLeft:20,
      marginRight:40,
      fontWeight:'bold',
     
    },
    text: {
      fontSize: 15,
      color: '#ffff',
      marginTop:20,
      marginLeft:10,
      marginRight:30,
      textAlign:'center',
     
     
    },
    textnew: {
      fontSize: 15,
      color: '#0AE78A',
      marginTop:230,
      marginLeft:10,
      marginRight:30,
      textAlign:'center',
     
     
    },
    txtnew: {
      fontSize: 15,
      color: '#656566',
      marginTop:20,
      marginLeft:10,
      marginRight:30,
      textAlign:'center',
     
     
    },
  }
)