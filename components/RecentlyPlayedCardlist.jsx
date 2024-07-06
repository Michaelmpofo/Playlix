import { View, Text, Image,StyleSheet ,ScrollView } from 'react-native'
import React from 'react'
import recenthomeCardlist from '../data/recentlyaddeddata'
import { TouchableOpacity } from 'react-native-gesture-handler'



const RecentlyPlayedCardlist = () => {
  return (
    <ScrollView horizontal={true}>
      {recenthomeCardlist.map((item, index) => (
        <View style={styles.recenthomecardlistcontainer}>
          <TouchableOpacity>
            <Image
              source={item.imgUrl}
              style={{ width: 200, height: 200, borderRadius: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ color: 'white' }}>{item.label}</Text>
          <Text style={{ color: 'white' }}>{item.album}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default RecentlyPlayedCardlist
const styles = StyleSheet.create({
    recenthomecardlistcontainer:{
        marginTop:1,
        marginLeft:10,
        
       
        
    }
})

// Resolved code
const resolvedCode = 'this is the resolved code combining both changes';
