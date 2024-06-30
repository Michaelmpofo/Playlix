import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ScreenStackHeaderLeftView, ScreenStackHeaderSearchBarView } from 'react-native-screens'
import HeaderLeft from '../../components/LibraryScreenHeaderLeft'
import LibraryScreenHeaderLeft from '../../components/LibraryScreenHeaderLeft'
import LibraryButtons from '../../components/LibraryButtons'
import LibraryRecentlyAdded from '../../components/LibraryRecentlyAdded'
import LibraryCard from '../../components/LibraryCard'
import LibraryList from '../../components/LibraryList'
import { GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import HeaderRight from '../../components/HeaderRight'
import EditHeaderRight from '../../components/EditHeaderRight'

const library = () => {

  return (
     <GestureHandlerRootView>
    <View style = {styles.libraryScreenHeaderLeftContainer}>
       <Stack.Screen options={{ 
           headerleft: () => <LibraryScreenHeaderLeft/>,
           headerRight:()=> <EditHeaderRight/>,
           headerTitle: 'Library',
           headerTitleAlign: 'left',
           headerTitleStyle: {
            color: '#0AE78A',
            fontSize: 35
           },
           headerShadowVisible: false
        
        }}/>
        <ScrollView>
        <LibraryButtons/>
        <LibraryRecentlyAdded/>
        <LibraryList/>
        </ScrollView>

    </View>
    </GestureHandlerRootView>
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