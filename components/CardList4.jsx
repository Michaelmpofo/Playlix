import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import homeCardList4 from '../data/data'



const CardList4 = () => {
  return (
    <ScrollView horizontal={true}>
        {homeCardList4.map((item, index) => (
            <View style={styles.homecardllistcontainer}>
                <Text style={{color: 'white'}}>{item.label}</Text>
                <Image source={item.imgUrl} style={{width: 250, height: 300,  borderRadius:10}}/>
            </View>
    ))}
    </ScrollView>
  )
}

export default CardList4
