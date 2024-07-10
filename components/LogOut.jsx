import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'


const logOutIcon  = require('../assets/images/homeScreenimages/logOutIcon.png')
  
const LogOut = () => {
    return (
            <View style={styles.imgContainer}> 
            <TouchableOpacity>
            <Image source={logOutIcon} resizeMode='contain' style={styles.unknownImg}/>
            </TouchableOpacity>
        </View>
        
      );
}
const styles = StyleSheet.create({
    unknownImg: {
        width: 65,
        height:65,
        marginBottom: -100,
        marginRight:20 

    }, 

    imgContainer: {
        marginTop: 150,
        marginBottom: -100,
    },
    Text: {
        fontSize:17,
        color:'#0AE78A',
        marginTop:175,
        marginLeft:2,
        marginRight:25,
        marginBottom:0,
},
}
)



export default LogOut