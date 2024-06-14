import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'
import HomeCard from '../../components/HomeCard'
import CardList from '../../components/CardList'


const index = () => {
  const appleMusic = require('../../assets/images/applecard.jpg')
  return (
    <View style = {styles.homeScreenContainer}>
        <Stack.Screen options={{
          headerTitle:'',
            headerLeft: () => <HeaderLeft/>,

            headerRight: ()=> <HeaderRight/>,  
            headerShadowVisible: false
        }}/>

            <CardList/>

    

            headerRight: ()=> <HeaderRight/>,
            headerShadowVisible: false,
            headerTitle: ''
        }}/>
        <CardList/>



    </View>
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
