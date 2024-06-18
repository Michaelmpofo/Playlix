import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RecentlyAdded = () => {
  return (
    <View style ={styles.RecentlyAdded}>
      <Text style={styles.headingTitle}>Recently Added</Text>
    </View>
  )
}

export default RecentlyAdded

const styles = StyleSheet.create({
    headingTitle: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    RecentlyAdded: {
        marginTop: 1,
        marginLeft: 30,
        }

})