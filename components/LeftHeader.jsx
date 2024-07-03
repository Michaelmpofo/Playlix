import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';


const LeftHeader = ( {text,navigation}) => {
  return (
    <Link href={navigation}asChild>
      <TouchableOpacity>
    <View style={styles.headerLeftContainer}>
    <View>
   <MaterialIcons name="arrow-back-ios" size={28} color= '#0AE78A' />
    </View>
      <Text style={styles.headingText1}>
       {text}
      </Text>
    </View>
    </TouchableOpacity>
    </Link>
   
  ) 
}

export default LeftHeader
const styles = StyleSheet.create({
    headingText1: {
        fontSize: 18,
        color: '#0AE78A',
        marginTop:10,
        marginBottom:10,

    },
    headerLeftContainer: {
       flexDirection:'row',
       alignItems:'center'

        }
})