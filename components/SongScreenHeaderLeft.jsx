import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const SongScreenHeaderLeft = () => {
  return (
    <View style={styles.songHeaderLeftContainer}>
      <Text style={styles.headingText}>Songs</Text>
    </View>
  )
}

export default SongScreenHeaderLeft

const styles = StyleSheet.create({
    headingText : {
        color: '#0AE78A',
        fontSize: 32,
        
        
    },
    songHeaderLeftContainer: {
        marginTop: 30,
        marginLeft: 20
        }
})