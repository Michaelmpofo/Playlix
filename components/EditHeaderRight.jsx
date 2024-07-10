import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const EditHeaderRight = () => {
    const unknown  = require('../assets/images/unknown.png')
  return (
    <View style={styles.headerLeftContainer}>
     <TouchableOpacity>
      <Text style={styles.headingText1}>Edit</Text>
      </TouchableOpacity> 
    <View style={styles.imgContainer}>
      <TouchableOpacity>
 <Image source={unknown} resizeMode='contain' style={styles.unknownImg}/>
      </TouchableOpacity>
        
        </View>  
    </View>
  )
}

export default EditHeaderRight

const styles = StyleSheet.create({
    headingText1 : {
        color: '#0AE78A',
        fontSize: 22,
    },

    headerLeftContainer: {
        marginTop: 30,
        marginLeft: 11
        },
         unknownImg: {
        width: 34,
        height: 34,
        marginBottom: 50,
        marginRight:20 

    }, 

    imgContainer: {
        marginTop: 10,
        marginBottom:20,
    }
})