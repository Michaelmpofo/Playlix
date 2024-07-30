import { View, Text, Image,StyleSheet ,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import partycardlist from '../data/Partydata'
import { Link } from 'expo-router';

const PartyCardlist = () => {
  return (
    <ScrollView horizontal={true}>
      {partycardlist.map((item, index) => (
        <View style={styles.PartyCardlistContainer}>
          <Link href="/homeSongScreen" asChild>
            <TouchableOpacity>
              <Image
                source={item.imgUrl}
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
            </TouchableOpacity>
          </Link>

          <Text style={{ color: 'white' }}>{item.label}</Text>
          <Text style={{ color: 'white' }}>{item.album}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default PartyCardlist
const styles = StyleSheet.create({
    PartyCardlistContainer:{
        marginTop:1,
        marginLeft:13,
        
       
        
    }
})