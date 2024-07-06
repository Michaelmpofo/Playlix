import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const genre = () => {
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
       Genres
      </Text>
     <SongScreenSearchComponent/>

     <Link href='/library_screens/genreprofile' asChild>
     <TouchableOpacity>
    <View style= {styles.buttonStyle}>
    <Text style={styles.Text2Style}>
    Afrobeats
    </Text>
    <SimpleLineIcons name="arrow-right" size={24} color='#302F2F' />
    </View>
     </TouchableOpacity>

     </Link>
    
     


    </View>
  )
}

export default genre
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