import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'


const CongratsCardimage  = require('../assets/images/homeScreenimages/Congrats.png')
  
const CongratsCard = () => {
    return (
            <View style={styles.imgContainer}> 
            <Image source={CongratsCardimage } resizeMode='contain' style={styles.unknownImg}/>
            
        </View>
        
      );
}
const styles = StyleSheet.create({
    unknownImg: {
        width: 350,
        height:400,
        marginLeft:10,

    }, 

    imgContainer: {
        marginTop: -600,
        marginBottom: 200, 
        alignItems:'center',
    },
   
}
)



export default CongratsCard