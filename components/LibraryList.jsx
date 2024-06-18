import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import React from 'react'
import libraryCardList from '../data/libraryscreendata'

const LibraryList = () => {
  return (
    
     <ScrollView horizontal={true}>
        {libraryCardList.map((item, index) => (
            <View style={styles.libraryllistcontainer}>
                <Image source={item.imgUrl} style={{width: 169, height: 153,  borderRadius:10}}/>
                      <Text style={{color: 'white'}}>{item.label}</Text>
                       <Text style={{color: 'white'}}>{item.text}</Text>
            </View>
    ))}
    </ScrollView>

  )
}

export default LibraryList
const styles = StyleSheet.create({
    libraryllistcontainer:{

        marginTop:10,
        marginLeft:10,
        marginBottom:20,
        justifyContent:"space-between"
        

       
        
    }
})