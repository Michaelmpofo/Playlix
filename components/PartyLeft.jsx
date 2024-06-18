import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PartyLeft = () => {
  return (
    <View style ={styles.RecentlyAddedContainer}>
      <Text style={styles.headingText}>Party</Text>
    </View>
  )
}

export default PartyLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,
        marginLeft: 13,

    },
    PartyLeftContainer: {
        marginTop: 1,
        marginLeft: 10,
        }

})