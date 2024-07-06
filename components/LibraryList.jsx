import { View, Text,StyleSheet,ScrollView,Image, Touchable } from 'react-native'
import React from 'react'
import libraryCardList from '../data/libraryscreendata'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router';


const LibraryList = () => {
  return (
    <ScrollView horizontal={true}>
      {libraryCardList.map((item, index) => (
        <View style={styles.libraryllistcontainer}>
          <Link href="/library_screens/favoritesongs" asChild>
            <TouchableOpacity>
              <Image
                source={item.imgUrl}
                style={{ width: 169, height: 153, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </Link>

          <Text style={{ color: 'white' }}>{item.label}</Text>
          <Text style={{ color: 'white' }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
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