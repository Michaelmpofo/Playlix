import { View, Text, StyleSheet } from 'react-native'
import React from 'react'



const HeaderLeft = () => {
  return (
    <View style={styles.headerLeftContainer}>
      <Text style={styles.headingText1}>Home</Text>
      <Text style={styles.headingText2}>Top Picks for You</Text>
    </View>
  )
  
}

export default HeaderLeft

const styles = StyleSheet.create({
    headingText1 : {
        color: '#0AE78A',
        fontSize: 40,
    },

    headingText2: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:20,

    },
    headerLeftContainer: {
        marginTop: 30,
        marginLeft: 9
        }
})