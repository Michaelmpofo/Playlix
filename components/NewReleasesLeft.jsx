import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NewReleasesLeft = () => {
  return (
    <View style ={styles.NewReleasesLeftContainer}>
      <Text style={styles.headingText}>New Releases For You</Text>
    </View>
  )
}

export default NewReleasesLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    NewReleasesLeftContainer: {
        marginTop: 1,
        marginLeft: 11,
        }

})