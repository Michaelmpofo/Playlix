import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'


const premiumCardimage  = require('../assets/images/homeScreenimages/premiumCard.png')
  
const PremiumCard = () => {
    return (
            <View style={styles.imgContainer}> 
            <Image source={premiumCardimage } resizeMode='contain' style={styles.unknownImg}/>
            
        </View>
        
      );
}
const styles = StyleSheet.create({
    unknownImg: {
        width: 400,
        height:400,
        marginLeft:0,

    }, 

    imgContainer: {
        marginTop: -90,
        marginBottom: 200, 

    },
   
}
)



export default PremiumCard