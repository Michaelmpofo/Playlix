import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';

const ShuffleButton = () => {
  return (
    <View style={styles.shuffleButtonBox}>
     <TouchableOpacity style={styles.opacityButtonStyle}>
     <Foundation name="shuffle" size={24} color='#0AE78A' />
        <Text style={styles.shuffleTextStyle}>Shuffle</Text>
     </TouchableOpacity>
   
    </View>
  )
}

export default ShuffleButton
const styles =StyleSheet.create({

    shuffleButtonBox:{
        width:165,
        height:56,
        paddingHorizontal:10,
        paddingVertical:4,
        borderColor:'#242323',
        borderWidth:1,
        borderRadius:8,
        color:'#fff',
        backgroundColor:'#242323',
        flexDirection:'row',
        alignItems:'center',
        
  },
  opacityButtonStyle:{
    width:'100%',
    height:'100%',
    alignItems:"center",
    justifyContent:'center',
    flexDirection:'row',

  },
  shuffleTextStyle:{
    marginLeft:5,
    fontSize:20,
    color:'#0AE78A'
  }
    
})
