import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import HomeCard from '../../components/HomeCard'
import CardList from '../../components/CardList'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import RecentlyPlayedCardlist from '../../components/RecentlyPlayedCardlist'
import RecentlyAdded from '../../components/RecentlyPlayedLeft'
import PartyLeft from '../../components/PartyLeft'
import PartyCardlist from '../../components/PartyCardlist'
import FansLikeLeft from '../../components/FansLikeLeft'
import FansLikeCardList from '../../components/FansLikeCardList'
import HomeMadeForYou from '../../components/HomeMadeForYou'
import HomeMadeForYouCardList from '../../components/HomeMadeForYouCardList'
import EntertainmentLeft from '../../components/EntertainmentLeft'
import EntertainmentCardList from '../../components/EntertainmentCardList'
import NewReleasesCardList from '../../components/NewReleaseCardList'
import NewReleasesLeft from '../../components/NewReleasesLeft'

const index = () => {
  const appleMusic = require('../../assets/images/applecard.jpg')
  return (
    <GestureHandlerRootView>
    <View style = {styles.homeScreenContainer}>
        <Stack.Screen options={{
          headerTitle:'',
          headerLeft: () => <HeaderLeft/>,
            headerRight: ()=> <HeaderRight/>,  
            headerShadowVisible: false
        }}/>
        <ScrollView>
         <CardList/>
          <RecentlyAdded/>
            <RecentlyPlayedCardlist/>
            <PartyLeft/>
          <PartyCardlist/>
          <FansLikeLeft/>
          <FansLikeCardList/>
          <HomeMadeForYou/>
          <HomeMadeForYouCardList/>
          <EntertainmentLeft/>
          <EntertainmentCardList/>
         <NewReleasesLeft/>
         <NewReleasesCardList/>     
           </ScrollView>
    </View>
    </GestureHandlerRootView>
  )
}

export default index


const styles =StyleSheet.create({
     homeScreenContainer :{
        backgroundColor : '#000000',
        width : '100%',
        height : '100%',
     }
})

// Resolved code
const resolvedCode = 'this is the resolved code combining both changes';
