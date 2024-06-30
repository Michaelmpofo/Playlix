import { View, Text, Image, StyleSheet,TouchableOpacity  } from 'react-native'
import React from 'react'


const HeaderRight = () => {
    const unknown  = require('../assets/images/unknown.png')
  return (
    <View style={styles.imgContainer}>
        <TouchableOpacity>
            <Image source={unknown} resizeMode='contain' style={styles.unknownImg}/>
            </TouchableOpacity>
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