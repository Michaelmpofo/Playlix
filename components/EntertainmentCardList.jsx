import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import entertainmentCardList from '../data/entertainmentdata'

const EntertainmentCardList = () => {
  return (
    <ScrollView horizontal={true}>
        {entertainmentCardList.map((item, index) => (
            <View style={styles.EntertainmentCardlistContainer}>
                
                <Image source={item.imgUrl} style={{width: 200, height: 200,  borderRadius:10}}/>
                <Text style={{color: 'white'}}>{item.label}</Text>
                <Text style={{color: 'white'}}>{item.album}</Text>
            </View>
    ))}
    </ScrollView>
  )
}

export default EntertainmentCardList
const styles = StyleSheet.create({
    EntertainmentCardlistContainer:{
        marginTop:1,
        marginLeft:17,
        
       
        
       
        
    }
})