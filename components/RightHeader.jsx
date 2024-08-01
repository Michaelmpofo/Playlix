import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const RightHeader = () => {

  return (
    <Link href='/library_screens/downloads' as child>
      <TouchableOpacity>
        <View style={styles.headerLeftContainer}>
          <View>
            <FontAwesome name="archive" size={20} color="#0AE78A" />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  ); 
}

export default RightHeader
const styles = StyleSheet.create({
    headingText1: {
        fontSize: 18,
        color: '#0AE78A',
        marginTop:10,
        marginBottom:10,

    },
    headerLeftContainer: {
      marginBottom:15,
      marginRight:8

        }
})
   
  

