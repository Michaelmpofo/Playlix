import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import recenthomeCardlist from '../data/recentlyaddeddata'



const RecentlyPlayedCardlist = () => {
  return (
    <ScrollView horizontal={true}>
        {recenthomeCardlist.map((item, index) => (
            <View style={styles.recenthomecardlistcontainer}>
                
                <Image source={item.imgUrl} style={{width: 200, height: 200,  borderRadius:10}}/>
                <Text style={{color: 'white'}}>{item.label}</Text>
                <Text style={{color: 'white'}}>{item.album}</Text>
            </View>
    ))}
    </ScrollView>
  )
}

export default RecentlyPlayedCardlist
const styles = StyleSheet.create({
    recenthomecardlistcontainer:{

        
        marginTop:1,
        marginLeft:10,
       
        
    }
})