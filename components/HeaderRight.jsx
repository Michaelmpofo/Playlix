import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const HeaderRight = () => {
    const unknown  = require('../assets/images/unknown.png')
  return (
    <View style={styles.imgContainer}>
        <Image source={unknown} resizeMode='contain' style={styles.unknownImg}/>
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({
    unknownImg: {
        width: 34,
        height: 34,
        marginBottom: 50,
        marginRight:20 

    }, 

    imgContainer: {
        marginTop: 52
    }
})