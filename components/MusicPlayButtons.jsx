import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'


const MusicPlayButtons = () => {
  return (
     <GestureHandlerRootView>
    <View>
        <ScrollView>
        <TouchableOpacity>
             <View style={styles.button1Style}>
        <View style={styles.iconStyle}>
       <MaterialCommunityIcons name="playlist-music-outline" size={38} color="#0AE78A" />
        </View>
     <Text style={styles.text1Style}>View Lyrics</Text>
    </View>
        </TouchableOpacity>

        <Text style ={styles.text2Style}>Performing Artiste</Text>
        <TouchableOpacity>
             <View style={styles.button2Style}>
                  <View>
        <Image source={require('../assets/images/stonebwoy.jpg')}  style={{width: 25, height: 25,  borderRadius:100 ,marginLeft:10, marginRight:10,marginTop:5,marginBottom:5,}}/>
      </View>
 <View style={styles.textStyle}>
      <Text style={styles.text3Style}>Stonebwoy</Text>
      <Text style={styles.text4Style}>Vocals</Text>
      </View>
          </View>
        </TouchableOpacity>

         <Text style ={styles.text2Style}>Composition and Lyrics</Text>
        <TouchableOpacity>
             <View style={styles.button2Style}>
                  <View>
        <Image source={require('../assets/images/stonebwoy.jpg')}  style={{width: 25, height: 25,  borderRadius:100 ,marginLeft:10, marginRight:10,marginTop:5,marginBottom:5,}}/>
      </View>
      <View style={styles.textStyle}>
      <Text style={styles.text3Style}>Stonebwoy</Text>
      <Text style={styles.text4Style}>Composer</Text>
      </View>
    </View>
        </TouchableOpacity>

   <Text style ={styles.text2Style}>Production and Engineering</Text>
   <TouchableOpacity>
             <View style={styles.button2Style}>
                  <View>
        <Image source={require('../assets/images/stonebwoy.jpg')}  style={{width: 25, height: 25,  borderRadius:100 ,marginLeft:10, marginRight:10,marginTop:5,marginBottom:5,}}/>
      </View>
      <View style={styles.textStyle}>
      <Text style={styles.text3Style}>Streetsbeatz</Text>
      <Text style={styles.text4Style}>Producer</Text>
      </View>
    </View>
        </TouchableOpacity>

        <Text style ={styles.text2Style}>Available Audio Quality</Text>
         <TouchableOpacity>
             <View style={styles.button2Style}>
                  <View>
        <Image source={require('../assets/images/stonebwoy.jpg')}  style={{width: 25, height: 25,  borderRadius:100 ,marginLeft:10, marginRight:10,marginTop:5,marginBottom:5,}}/>
      </View>
      <View style={styles.textStyle}>
      <Text style={styles.text3Style}>BHIM MUSIC</Text>
      <Text style={styles.text4Style}>Stonebwoy</Text>
      </View>
    </View>
        </TouchableOpacity>

        
   
   </ScrollView>
    </View>
    </GestureHandlerRootView>
  )
}

export default MusicPlayButtons
const styles=StyleSheet.create({
     button1Style:{
        backgroundColor:'#302F2F',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'',
        marginBottom:10,
        marginTop:20,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
     },
     textStyle:{
        flexDirection:'column',
        alignItems:'flex-start'
     },
      button2Style:{
        backgroundColor:'#302F2F',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'',
        marginBottom:10,
        marginLeft:15,
        marginRight:15,
        borderRadius:5,
     },
     iconStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    marginLeft:10,
    
  },
     text1Style:{
    fontSize:18,
    color:'#6D6969',
    marginLeft:10,
     },
     
   
      text2Style:{
    fontSize:14,
    color:'#7A6D6D',
    marginLeft:15,
    marginBottom:5,
     },
  
     text3Style:{
    fontSize:18,
    color:'#6D6969',
    marginLeft:5,
     },
    text4Style:{
    fontSize:10,
    color:'#6D6969',
    marginLeft:5,
     },
})