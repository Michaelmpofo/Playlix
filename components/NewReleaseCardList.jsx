import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import NewReleaseCardList from '../data/NewReleasesData'

const NewReleasesCardList = () => {
  return (
    <ScrollView horizontal={true}>
        {NewReleaseCardList.map((item, index) => (
            <View style={styles.NewReleasesCardListContainer}>
                <Image source={item.imgUrl} style={{width: 200, height: 200,  borderRadius:10}}/>
                <Text style={{color: 'white'}}>{item.label}</Text>
                <Text style={{color: 'white'}}>{item.album}</Text>
            </View>
    ))}
    </ScrollView>
  )
}

export default NewReleasesCardList
const styles = StyleSheet.create({
    NewReleasesCardListContainer:{
        marginTop:1,
        marginLeft:13,
        marginBottom:1,
          
    }
})