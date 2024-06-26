import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import fansLikeCardlist from '../data/fanslikedata'

const FansLikeCardList = () => {
  return (
    <ScrollView horizontal={true}>
        {fansLikeCardlist.map((item, index) => (
            <View style={styles.FansLikeCardlistContainer}>
                
                <Image source={item.imgUrl} style={{width: 200, height: 200,  borderRadius:10}}/>
                <Text style={{color: 'white'}}>{item.label}</Text>
                <Text style={{color: 'white'}}>{item.album}</Text>
            </View>
    ))}
    </ScrollView>
  )
}

export default FansLikeCardList
const styles = StyleSheet.create({
    FansLikeCardlistContainer:{
        marginTop:1,
        marginLeft:13,
          
    }
})