import React from 'react'
import { View, Image,TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Link } from 'expo-router';


const HeaderRight =()=> {
 
    
    const unknown  = require('../assets/images/unknown.png')
  return (
    <View style={styles.imgContainer}>
        <Link href="/HomeScreens/AccountPage">
        <Image source={unknown} resizeMode='contain' style={styles.unknownImg}/>
        
        </Link>
        
    </View>
  );
};
const styles = StyleSheet.create({
    unknownImg: {
        width: 34,
        height: 34,
        marginBottom: 50,
        marginRight:20 

    }, 

    imgContainer: {
        marginTop: 52
    },
   
}
)

export default HeaderRight


