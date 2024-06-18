import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EntertainmentLeft = () => {
  return (
    <View style ={styles.EntertainmentLeftContainer}>
      <Text style={styles.headingText}>Entertainment</Text>
    </View>
  )
}

export default EntertainmentLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    EntertainmentLeftContainer: {
        marginTop: 1,
        marginLeft: 13,
        }

})