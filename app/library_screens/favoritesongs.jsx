import { View, Text, StyleSheet ,Image} from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router';
import { Fontisto } from '@expo/vector-icons';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import Playbutton from "../../components/Playbutton";
import ShuffleButton from "../../components/ShuffleButton";




const favoritesongs = () => {
  return (
      <View style={styles.playListContainer}>
    <Stack.Screen 
        options={{
          headerTitle: '', 
          headerLeft: () =><LeftHeader navigation={'/library_screens/playList'}/>,
          headerRight:()=><RightHeader />,
          headerStyle: { backgroundColor: '#000000' },
         headerShown: true
        
        }}
      />
       <View>
       <Image source={require('../../assets/images/FavoriteSongs.jpeg')}  style={{width: 190, height: 190 ,marginLeft:81, marginRight:0, flexDirection:'column', alignItems:'center',
      marginTop:30
     }}/>

      </View>
       <View style={styles.textContainer}>
         <View style={styles.text1Container}>
          <Text style={styles.text1style}>
         Favourite Songs
          </Text>
          <View style={styles.iconStyle}>
 <Fontisto name="star" size={24} color="#0AE78A" />
          </View>
  
        </View>
        <View style={styles.text2Container}>
      <Text style={styles.text2style}>Michael Ofosu Ampofo</Text>
        </View>

        <View style={styles.text3Container}>
           <Text style={styles.text3style}>Updated 21hr ago</Text>
        </View>
       </View>
  <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>
        
      </View>
)}

export default favoritesongs
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  
  },
  iconStyle:{
     marginLeft:10,
  },
   songButtonContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justify: "space-between",
    marginHorizontal: 18,
    marginTop:20,
    gap:5
  },
  textContainer:{
    marginTop:10
  },
  text1Container:{
      marginTop:10,
    justifyContent:'center',
    flexDirection:'row',
  },
  text2Container:{
     justifyContent:'center',
      flexDirection:'row',
  },
    text3Container:{
     justifyContent:'center',
      flexDirection:'row',
  },
   text1style: {
    fontSize: 17,
    color: '#FFFFFF' 
  },
   text2style: {
    fontSize: 20,
    color: '#0AE78A'
  },
   
    text3style: {
    fontSize: 13,
    color: '#484848',
  },
})