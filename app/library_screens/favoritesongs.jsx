import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';


const favoritesongs = () => {
  return (
    <Stack.Screen 
        options={{
          headerTitle: '', 
          headerStyle: { backgroundColor: '#000000' },
         headerShown: false
        
        }}
      />,
      <View style={styles.playListContainer}>

      </View>
)}

export default favoritesongs
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
})