import { StyleSheet,SafeAreaView,TextInput,Image,View } from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

const Search = () => {
  
  return (
   <View style={styles.searchBox}>
    <EvilIcons name="search" size={24} color="#969090" />

    <TextInput placeholder='  Find in songs' 
    placeholderTextColor={'#969090'}
     clearButtonMode='always' 
     autoCapitalize='none'
     autoCorrect={false}
     style={{color:'#fff'}}
     />
    
    
   </View>
  )
}

export default Search

const styles =StyleSheet.create({

    searchBox:{
        width:330,
        
        paddingHorizontal:10,
        paddingVertical:4,
        borderColor:'#242323',
        borderWidth:1,
        borderRadius:8,
        color:'#fff',
        backgroundColor:'#242323',
        marginHorizontal:20,
        marginTop:5, 
        flexDirection:'row',
        alignItems:'center',
        
  },
  searchIcon: {
    width: 34,
    height: 34,
    marginBottom: 50,
    marginRight:20 

}})