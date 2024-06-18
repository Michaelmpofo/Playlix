import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeMadeForYou = () => {
  return (
    <View style ={styles.HomeMadeForYouContainer}>
      <Text style={styles.headingText}>Made For You</Text>
    </View>
  )
}

export default HomeMadeForYou

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    HomeMadeForYouContainer: {
        marginTop: 1,
        marginLeft: 11,
        }

})