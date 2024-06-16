import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import SearchScreenHeaderLeft from '../../components/SearchScreenHeaderLeft'
import SearchComponent from '../../components/SearchComponent'
const search = () => {
  return (
    <View style ={styles.SearchContainer}>
      <Stack.Screen options={{  
          headerTitle: 'Search',
          headerTitleAlign: 'left',
          headerTitleStyle: {
           color: '#0AE78A',
           fontSize: 35,
            
          },
          
           headerShadowVisible: false
        
        }}
        />
        <SearchComponent/>
        <SearchScreenHeaderLeft/>
        
        
    </View>
  )
}

export default search
const styles =StyleSheet.create({
  SearchContainer :{
     backgroundColor : '#000000',
     width : '100%',
     height : '100%',
  }
}
)