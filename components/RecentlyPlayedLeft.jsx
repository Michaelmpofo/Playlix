import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RecentlyPlayedLeft = () => {
  return (
    <View style ={styles.RecentlyPlayedContainer}>
      <Text style={styles.headingText}>Recently Played</Text>
    </View>
  )
}

export default RecentlyPlayedLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    RecentlyPlayedContainer: {
        marginTop: 1,
        marginLeft: 12,
        }

})