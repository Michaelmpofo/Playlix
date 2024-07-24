import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import NewMusic from '../../components/NewMusic';

const NotificationPage = () => {
  return (
    <View style={styles.AccountPageContainer}>
      <View style={styles.infoContainer}>
        <Link href='/HomeScreens/AccountPage'asChild>
      <TouchableOpacity>
      <AntDesign name="left" size={20} color="grey" style={styles.arrow} />
      </TouchableOpacity>
      </Link>
      <Text style={styles.text}>Notifications</Text>
      </View>
      <NewMusic/>
      <Text style={styles.text2}> Recommendations are generated on your device based on
                                  your use of Apple Music. Your Library is not shared with Apple
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AccountPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',
  },
  infoContainer: {
    flex: 1,
    flexDirection:'row',
    marginBottom:0,
    marginTop:-35,
  },
  text: {
    fontSize:17,
    color:'#ffff',
    marginTop:100,
    marginLeft:20,
    marginRight:105,
    marginBottom:0,
    textAlign:'center',
},
text2: {
  fontSize:10,
  color:'#ffff',
  marginTop:10,
  marginLeft:30,
  marginRight:30,
  marginBottom:550,
  textAlign:'center',
},
arrow: {
  
  marginTop:100,
  marginLeft:0,
  marginRight:70,
  marginBottom:0,
  alignSelf:'left',
  
},
})

      export default NotificationPage