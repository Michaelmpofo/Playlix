import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RecentlyAdded = () => {
  return (
    <View style ={styles.RecentlyAddedContainer}>
      <Text style={styles.headingText}>Recently Played</Text>
    </View>
  )
}

export default RecentlyAdded

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:20,

    },
    RecentlyAddedContainer: {
        marginTop: 30,
        marginLeft: 11,
        }

})