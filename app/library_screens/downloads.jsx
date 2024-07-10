import { View, Text,StyleSheet  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import LibraryScreenHeaderLeft from '../../components/LibraryScreenHeaderLeft'
import LibraryButtons from '../../components/LibraryButtons'
import LibraryRecentlyAdded from '../../components/LibraryRecentlyAdded'
import LibraryList from '../../components/LibraryList'
import { GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler'
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
const downloads = () => {
  return (
         <GestureHandlerRootView>

    <View style = {styles.libraryScreenHeaderLeftContainer}>
       <Stack.Screen options ={{
      headerTitle:'',
         headerLeft: () => <LeftHeader text='Library' navigation={'(tabs)/library'}/>,
          headerRight:()=><RightHeader/>,
          
          headerStyle:{ backgroundColor:'#000000'},
           headerShown: true
      }}/>
      <Text style={styles.text1style}>
       Downloaded
      </Text>
         <ScrollView>
        <LibraryButtons/>
        <LibraryRecentlyAdded/>
        <LibraryList/>
        </ScrollView>

    </View>
        </GestureHandlerRootView>

  )
}

export default downloads
const styles =StyleSheet.create({
  libraryScreenHeaderLeftContainer :{
     backgroundColor : '#000000',
     width : '100%',
     height : '100%',
  },
   text1style:{
    marginBottom:8,
    fontSize:30,
    color:'#0AE78A',
    marginLeft:20,
    },
   
})