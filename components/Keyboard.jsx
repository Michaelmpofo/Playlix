import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'


const keyboard  = require('../assets/images/homeScreenimages/Keypad.png')
  
const Keyboard = () => {
    return (
        
            <View style={styles.NowPlayingContainer}> 
            <TouchableOpacity>
            <Image source={keyboard } resizeMode='contain' style={styles.unknownImg}/>
            </TouchableOpacity>
            
        </View>
        
            
        
      );
}
const styles = StyleSheet.create({
    NowPlayingContainer:{
        position:'absolute',
        marginLeft: 10,
        marginRight: 10,
        marginBottom:10,
        padding: 0,   
        justifyContent: 'space-between',
        bottom: 0,
        
      },
    unknownImg: {
        width: 3005,
        height:312,
    }, 

    
}
)



export default Keyboard