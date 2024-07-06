import { View, Text ,StyleSheet, TouchableOpacity,Image } from 'react-native'
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import React from 'react'
import { Stack } from 'expo-router'
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import Playbutton from "../../components/Playbutton";
import { Link } from 'expo-router';
import ShuffleButton from "../../components/ShuffleButton";


const genreprofile = () => {
  return (
    <View style= {styles.playListContainer}>
    <Stack.Screen options ={{
      headerTitle:'',
         headerLeft: () => <LeftHeader text='Genres' navigation={'(tabs)/library'}/>,
          headerRight:()=><RightHeader/>,
          
          headerStyle:{ backgroundColor:'#000000'},
           headerShown: true
      }}/>
      <Text style={styles.text1style}>
       Afrobeats
      </Text>
      <SongScreenSearchComponent/>
       <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>
<Link href='/library_screens/musicplay' asChild>
  <TouchableOpacity>
           <Image
          source={require('../../assets/images/AnlogaAlbum.jpeg')}
          style={styles.albumImage}
        />
          </TouchableOpacity>   
</Link>
     
    </View>
    
  )
}

export default genreprofile
const styles=StyleSheet.create({
    playListContainer :{
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',
        
     },
     buttonStyle:{
         flexDirection:'row',
        alignItems:'center',
         borderBottomColor:'#302F2F',
    borderBottomWidth:1,
    marginTop:40,
    marginLeft:20,
    marginRight:20,
    justifyContent:'space-between'

     },
      songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 20,
    gap: 5,
  },
   albumImage: {
    width: 155,
    height: 160,
    marginTop:20,
    marginLeft:20,
  },

     text1style:{
    marginBottom:8,
    fontSize:30,
    color:'#FFFFFFFF',
    marginLeft:20,
    },
    Text2Style:{
        marginBottom:8,
    fontSize:20,
    color:'#0AE78A',
    marginLeft:20,
    borderBottomColor:'#'
    },
    })