import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import homeMadeCard from '../data/HomeMadeForYoudata'

const HomeMadeForYouCardList = () => {
  return (
    <ScrollView horizontal={true}>
        {homeMadeCard.map((item, index) => (
            <View style={styles.HomeMadeForYouCardListcontainer}>
                 <Text style={{color: 'white'}}>{item.label}</Text>
                <Image source={item.imgUrl} style={{width: 250, height: 300,  borderRadius:10}}/>

            </View>
    ))}
    </ScrollView>
  )
}
export default HomeMadeForYouCardList
const styles = StyleSheet.create({
    HomeMadeForYouCardListcontainer:{
        marginTop:1,
        marginLeft:10,
        marginBottom:1,
        
    }
})