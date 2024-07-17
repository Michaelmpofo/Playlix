import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import PlanHeader from '../../components/PlanHeader'
import OneIndividualPlan from '../../components/OneIndividualPlan'
import OneFamilyPlan from '../../components/OneFamilyPlan'
import SubscribeBar from '../../components/SubscribeBar'


const PlaylixOnePage = () => {
  const Playlixlogo = require('../../assets/images/homeScreenimages/Playlixlogo.png');
  return (
    <View style={styles.PlaylixOnePageContainer}>
    <View style={styles.MiniPlansPageContainer}>
     <PlanHeader/>
     
     <Image source={Playlixlogo}  style={styles.playlixImg}/>
     <Text style={styles.text}>One</Text>
     
      <Text style={styles.newtext}>
      Enjoy millions of songs, over 200 games,
Apple Original shows and movies, and more.
Save when you bundle them together.
</Text>
<View style={styles.info}>
      <OneIndividualPlan/>
      <OneFamilyPlan/>
      </View>
      <View style = {styles.infoContainer}>
      <View style = {styles.infContainer}>
      <SubscribeBar/>
      <Text style = {styles.newPlan}>
      Plan automatically renews monthly until cancelled
      </Text>
      </View>
      
     
      </View>
      
     
    </View>
    </View>
  )
}

export default PlaylixOnePage

const styles = StyleSheet.create({
    PlaylixOnePageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#000000',
      width : '100%',
      height : '100%',
    },
    infoContainer: {
      flex: 1,
      flexDirection:'row',
    },
    info: {
      flex: 1,
      flexDirection:'row',
      marginBottom:0,
      marginTop:30,
      position:'relative',
    },
    infContainer: {
      flex: 1,
      flexDirection:'column',
      marginRight:-70,
      marginLeft:90,
    },
    MiniPlansPageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#1C1C1E',
      width : '100%',
      height : '100%',
      borderTopEndRadius:'30',
      borderTopStartRadius:'30',
      borderTopCurve:'round',
      borderTopWidth:1,
      marginTop:50,
     
    },

 
    
    newPlan: {
      fontSize: 10,
      color: '#ffff',
      marginTop:-260,
      marginBottom:0,
      marginLeft:-10,
      marginRight:0,
      
    },
    text: {
      fontSize: 39,
      color: '#ffff',
      marginTop:215,
      marginBottom:0,
      marginLeft:50,
      marginRight:0,
      textAlign:'center',
     
     
     
    },
    playlixImg: {
      width: 151,
      height: 70,
      marginTop:245,
      marginBottom:-273,
      marginLeft:0,
      marginRight:80,
     
      },
    newtext: {
      fontSize: 15,
      color: '#BCBCBE',
      marginTop:20,
      marginBottom:650,
      marginLeft:25,
      marginRight:30,
    
      textAlign:'center',
      fontWeight:'bold',
     
     
    },
     
     
   
    
  }
)