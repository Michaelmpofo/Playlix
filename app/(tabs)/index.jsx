import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HeaderLeft from '../../components/HeaderLeft'
import HeaderRight from '../../components/HeaderRight'


const index = () => {
  return (
    <View style = {styles.homeScreenContainer}>
        <Stack.Screen options={{
            headerLeft: () => <HeaderLeft/>,
            headerRight: ()=> <HeaderRight/>,
            
        }}/>
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
