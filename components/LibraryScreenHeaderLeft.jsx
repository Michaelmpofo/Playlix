import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const LibraryScreenHeaderLeft = () => {
  return (
    <View style ={styles.libraryScreenHeaderLeftContainer}>
      <Text style={styles.headingText}>Library</Text>
    </View>
  )
}

export default LibraryScreenHeaderLeft

const styles = StyleSheet.create({
    headingText:{
        color: '#0AE78A',
        fontSize: 40,
         
    },
    libraryScreenHeaderLeftContainer: {
        marginTop: 30,
        marginLeft: 9
        }

})