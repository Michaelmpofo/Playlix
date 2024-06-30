import { View, Text,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LeftHeader from '../../components/LeftHeader';
import { Link } from 'expo-router';
const PlayList = () => {
  
  return (
    <View style= {styles.playListContainer}>

      <Stack.Screen options={{  
          headerTitle: '',
          headerLeft: () => <LeftHeader text='library'/>,
          headerStyle:{ backgroundColor:'#000000'},
           headerShown: true
        
        }}
        />
         <Text style={styles.text1style}>
       Playlists
      </Text>
      <SongScreenSearchComponent text={ '  Find in Playlist'} style={styles.searchStyle}/>
       <Link href='/library_screens/newplaylist' asChild>
      <TouchableOpacity>
      <View style={styles.playlistStyle}>
      <View style={styles.button1Style} >
        <MaterialIcons name="add" size={67} color="#0AE78A" />
        <Text style={styles.text2style}> New PlayList.......</Text>
        </View>  
      </View>
      </TouchableOpacity>
      </Link>
 
   <Link href='/library_screens/favoritesongs' asChild>
   <TouchableOpacity>
    <View style={styles.playlistStyle}>
    <View style={styles.button2Style}>
    <MaterialCommunityIcons name="star-box" size={67} color="#0AE78A" />
    <Text style={styles.text3style}> Favorite songs</Text>
    </View>
    </View>
    </TouchableOpacity> 
    </Link>
  </View>
  )
}

export default PlayList
const styles =StyleSheet.create({
  playlistStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:''
    

  },
  favoriteStyle:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  playListContainer :{
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',
        
     },
  text1style:{
    marginBottom:8,
    fontSize:30,
    color:'#FFFFFFFF',
    marginLeft:20,
    },

  text2style:{
    fontSize:17,
    color:'#0AE78A'
    },

  text3style:{
    fontSize:17,
    color:'#FFFFFFFF',
    },
  button1Style :{
    marginTop:10,
    marginLeft:18,
    flexDirection:'row',
    alignItems:'center',
     },
     
  button2Style :{
    marginTop:2,
    marginLeft:18,
    flexDirection:'row',
    alignItems:'center',
     },
  searchStyle:{
   paddingTop:20,   

    },
  


})