import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import HomeCard from '../../components/HomeCard'
import CardList from '../../components/CardList'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import RecentlyPlayedCardlist from '../../components/RecentlyPlayedCardlist'
import RecentlyAdded from '../../components/RecentlyAddedLeft'

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
        <CardList/>
      
        <CardList/>


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
