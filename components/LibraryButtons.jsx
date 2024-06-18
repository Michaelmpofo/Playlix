import { View, Text,StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LibraryButtons = () => {
  return (
    <View >

<TouchableOpacity> 
     <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <SimpleLineIcons name="playlist" size={24} color="#0AE78A"  />
    <Text style={styles.headingText}>Playlists </Text> 
    </View>
    <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View>
</TouchableOpacity>
  
 <TouchableOpacity>
  <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <Entypo name="modern-mic" size={24} color="#0AE78A" />
    <Text style={styles.headingText}>Artist</Text>
    </View>
     <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View>
 </TouchableOpacity>
   
    <TouchableOpacity>
    <View style={styles.headingText1}>
   
    <View style={styles.styleOne}>
     <MaterialIcons name="album" size={24} color="#0AE78A" />
    <Text style={styles.headingText}>Albums</Text>
    </View>
    <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View> 
    </TouchableOpacity>
    
    <TouchableOpacity>
    <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <Ionicons name="musical-note" size={24} color="#0AE78A" />
    <Text style={styles.headingText}>Songs</Text>
    </View>
    <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View>
    </TouchableOpacity>
     
    <TouchableOpacity>
     <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <MaterialCommunityIcons name="guitar-electric" size={24} color="#0AE78A" />
    <Text style={styles.headingText}>Genres</Text>
    </View>
    <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View> 
    </TouchableOpacity>
   
 <TouchableOpacity>
 <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <MaterialCommunityIcons name="account-music" size={24} color="#0AE78A" />  
    <Text style={styles.headingText}>Composers</Text>
    </View>
     <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View> 
 </TouchableOpacity>
    
   <TouchableOpacity>
    <View style={styles.headingText1}>
    <View style={styles.styleOne}>
    <Entypo name="download" size={24} color="#0AE78A" />   
    <Text style={styles.headingText}>Downloads</Text>
    </View>
    <MaterialIcons name="arrow-forward-ios" size={24} color="#A49B9B" />
    </View> 
   </TouchableOpacity>
    </View>
    
  )
}

export default LibraryButtons
const styles =StyleSheet.create({
     headingText: {
        
        fontSize: 22,
        color: '#fff',
        marginTop:5,
        marginBottom:10,
        marginLeft:20,
        alignItems:'center',
        
     },
     headingText1:{
        
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor:'#3A3636',
        marginLeft:20,
        marginRight:20,
        justifyContent:'space-between'
     },
     styleOne:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     }
})