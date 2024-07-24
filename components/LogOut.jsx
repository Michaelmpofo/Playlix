import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const logOutIcon  = require('../assets/images/homeScreenimages/switch.png')
  
const LogOut = () => {

    return (
        <Link href=''asChild>
        <TouchableOpacity>
            <View style={styles.imgContainer}> 
            <Image source={logOutIcon} resizeMode='contain' style={styles.unknownImg}/>
            <Text style={styles.Text}> Log Out Account</Text>
        </View>
        </TouchableOpacity>
        </Link>
        
      );
}
const styles = StyleSheet.create({
    unknownImg: {
        width: 65,
        height:65,
        marginBottom: -65,
        marginRight:0 ,
        left:40,

    }, 

    imgContainer: {
        marginTop: 150,
        marginBottom: -350,
    },
    Text: {
        fontSize:17,
        color:'#0AE78A',
        marginTop:0,
        marginLeft:2,
        marginRight:25,
        marginBottom:0,
        
        
    },
    Text: {
        fontSize:17,
        color:'#0AE78A',
        marginTop:70,
        marginLeft:2,
        marginRight:25,
        marginBottom:0,
},
}
)



export default LogOut