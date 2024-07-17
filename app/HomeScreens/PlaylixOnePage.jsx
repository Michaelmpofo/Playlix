import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import PlanHeader from '../../components/PlanHeader'
import IndividualPlanBar from '../../components/IndividualPlanBar'
import FamilyPlan from '../../components/FamilyPlan'
import UniversityPlan from '../../components/UniversityPlan'
import GetPlayLix from '../../components/GetPlayLixOne'
import JoinPlaylixBar from '../../components/JoinPlaylixBar'


const PlaylixOnePage = () => {
  return (
    <View style={styles.PlaylixOnePageContainer}>
    <View style={styles.MiniPlansPageContainer}>
     <PlanHeader/>
      <Text style={styles.text}> Choose a plan</Text>
      <IndividualPlanBar/>
      <FamilyPlan/>
      <UniversityPlan/>
      <View style = {styles.infoContainer}>
      <GetPlayLix/>
      <View style = {styles.infContainer}>
      <Text style = {styles.newtxt}>Get Playlix One</Text>
      <Text style = {styles.new}>
      Enjoy millions of songs, over a hundred games,
      Apple Original shows and movies, and more.
      </Text>
      <JoinPlaylixBar/>
      <TouchableOpacity>
      <Text style = {styles.newfind}>
      Find Out How
      </Text>
      </TouchableOpacity>
      </View>
      <Text style = {styles.newPlan}>
      Plan automatically renews monthly until cancelled
      </Text>
     
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
      borderTopEndRadius:30,
      borderTopStartRadius:30,
      borderTopCurve:'round',
      borderTopWidth:1,
      marginTop:50,
     
    },

    newtxt: {
      fontSize: 24,
      color: '#ffff',
      marginTop:-260,
      marginLeft:30,
      marginRight:-400,
     
     
    },
    new: {
      fontSize: 10,
      color: '#ffff',
      marginTop:0,
      marginLeft:30,
      marginRight:-230,
     
     
    },
    newPlan: {
      fontSize: 10,
      color: '#ffff',
      marginTop:-80,
      marginLeft:20,
      marginRight:60,
     
     
    },
    newfind: {
      fontSize: 12,
      color: 'green',
      marginTop:4,
      marginLeft:30,
      marginRight:-81,
     
     
    },
    text: {
      fontSize: 25,
      color: '#ffff',
      marginTop:55,
      marginBottom:650,
      marginLeft:10,
      marginRight:30,
      textAlign:'center',
      fontWeight:'bold',
     
     
    },
   
     
     
   
    
  }
)