import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SongScreenHeaderLeft from '../../components/SongScreenHeaderLeft'
import SearchComponent from '../../components/SearchComponent'
import Playbutton from '../../components/Playbutton'
import ShuffleButton from '../../components/ShuffleButton'


const song = () => {
  return (
    <View style={styles.songScreenContainer}>
      <Stack.Screen options={{
        headerTitle:'',
            headerLeft: () => <SongScreenHeaderLeft/>,
            headerShadowVisible: false
        }}/>
        <SearchComponent/>
       
        <View style={styles.songButtonContainer}>
        <Playbutton/>
        <ShuffleButton/>
        </View>

            </View>
  )
}

export default song

const styles =StyleSheet.create({

  songScreenContainer :{
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',

},
songButtonContainer:{
  width : '100%',
  height : '100%',
  flexDirection:'row',
  justify:'space-between'

}
})