import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import RightHeader from '../../components/RightHeader';
import LeftHeader from '../../components/LeftHeader';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { Link } from 'expo-router';



const Artist = () => {
  return (
    <View style= {styles.playListContainer}>
      <Stack.Screen options ={{
      headerTitle:'',
         headerLeft: () => <LeftHeader text='library' navigation={'(tabs)/library'}/>,
          headerRight:()=><RightHeader/>,
          headerStyle:{ backgroundColor:'#000000'},
           headerShown: true
      }}/>
       <Text style={styles.text1style}>
       Artists
      </Text>
      <SongScreenSearchComponent/>
      <Link href='/library_screens/artisteprofile' asChild>
       <TouchableOpacity>
       <View style={styles.artistButtonContainer}>
      <View>
        <Image source={require('../../assets/images/stonebwoy.jpg')}  style={{width: 50, height: 50,  borderRadius:100 ,marginLeft:25, marginRight:10,}}/>
      </View>
      <View style={styles.textStyle}>
      <Text style={styles.text2style}>Stonebwoy</Text>
      </View>
      </View>
     </TouchableOpacity>
      </Link>
    
     
    </View>
  )
}

export default Artist
 const styles = StyleSheet.create({

  playListContainer :{
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',
        
     },
     artistButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
          justifyContent:'flex-start'

      
      },
      textStyle:{ 
 borderBottomWidth: 1,
    borderBottomColor:'#3A3636',   
    borderTopColor:'#3A3636',
    borderTopWidth: 1,
    

      },
     text1style:{
    marginBottom:8,
    fontSize:30,
    color:'#FFFFFFFF',
    marginLeft:20,
    },
     text2style:{
    marginBottom:10,
    marginTop:10,
    fontSize:20,
    color:'#FFFFFFFF',
    marginLeft:20,
    marginRight:120,
   
    },
 })