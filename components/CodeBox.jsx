import { View, Text,StyleSheet,Image,TouchableOpacity, TextInput } from 'react-native'
import React,  { useEffect, useState }from 'react'


const CodeBox = () => {
  const [code, setCode] = useState('');
   
    return (
        
            <View style={styles.CodeBoxContainer}>
                <TouchableOpacity>
         <View style={styles.infoContainer}>
         <TextInput
         placeholder='Code'
         placeholderTextColor={'#969090'}
         fontSize={19}
         style={{ color: "#fff" }}
        
        />
         </View>
         </TouchableOpacity>
        </View>
      )
}

export default CodeBox
const styles =StyleSheet.create({
     CodeBoxContainer:{
      backgroundColor :'#282828',
      bottom:690,
      marginLeft: 360,
      marginRight: 1,
      marginTop:1100,
      padding: 18,
     
     
      alignItems: 'left',
      
      width:200,
      height: 55,
     borderRadius:15,
      
    },
    
   
    forwardContainer:{
        color:'#4E4A4A',
        marginRight: 1,
        marginLeft: 0,
        fontSize:19,
        
      },
  
  }
  
  
  
  )