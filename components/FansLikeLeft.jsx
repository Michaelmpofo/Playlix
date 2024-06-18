import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FansLikeLeft = () => {
  return (
    <View style ={styles.FansLikeLeftContainer}>
      <Text style={styles.headingText}>Sarkodie Fans Like </Text>
    </View>
  )
}

export default FansLikeLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:1,

    },
    FansLikeLeftContainer: {
        marginTop: 1,
        marginLeft: 11,
        }

})