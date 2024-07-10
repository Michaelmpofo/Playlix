import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'


const tunesCardImage  = require('../assets/images/homeScreenimages/export.png')
  
const TunesCard = () => {
    return (
            <View style={styles.imgContainer}> 
            <Image source={tunesCardImage } resizeMode='contain' style={styles.unknownImg}/>
            
        </View>
        
      );
}
const styles = StyleSheet.create({
    unknownImg: {
        width: 565,
        height:185,
        marginLeft:5,
        

    }, 

    imgContainer: {
        marginTop: 40,
        marginBottom: 450, 
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



export default TunesCard