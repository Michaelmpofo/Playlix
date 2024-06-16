import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import homeCardList from '../data/data'



const CardList = () => {
  return (
    <ScrollView horizontal={true}>
        {homeCardList.map((item, index) => (
            <View style={styles.homecardllistcontainer}>
                <Text style={{color: 'white'}}>{item.label}</Text>

                <Image source={item.imgUrl} style={{width: 250, height: 300,  borderRadius:10}}/>

                <Image source={item.imgUrl} style={{width: 230, height: 290, borderRadius:10}}/>

            </View>
    ))}
    </ScrollView>
  )
}

export default CardList
const styles = StyleSheet.create({
    homecardllistcontainer:{

        marginTop:30,
        marginTop:10,
        marginLeft:10,
        marginBottom:20,

       
        
    }
})