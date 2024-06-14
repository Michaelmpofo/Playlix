import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ScreenStackHeaderLeftView, ScreenStackHeaderSearchBarView } from 'react-native-screens'
import HeaderLeft from '../../components/LibraryScreenHeaderLeft'
import LibraryScreenHeaderLeft from '../../components/LibraryScreenHeaderLeft'

const library = () => {
  return (
    <View style = {styles.libraryScreenHeaderLeftContainer}>
       <Stack.Screen options={{ 
           headerleft: () => <LibraryScreenHeaderLeft/>,
           headerTitle: 'Library',
           headerTitleAlign: 'left',
           headerTitleStyle: {
            color: '#0AE78A',
            fontSize: 35
           },
           headerShadowVisible: false
        
        }}/>

    </View>
  )
}

export default library
const styles =StyleSheet.create({
  libraryScreenHeaderLeftContainer :{
     backgroundColor : '#000000',
     width : '100%',
     height : '100%',
  }
}
)