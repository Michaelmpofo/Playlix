import React from 'react'
import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import PremiumTab from '../../components/PremiumTab';
import RedeemCode from '../../components/RedeemCodeTab';
import SetUpProfileTab from '../../components/SetUpProfileTab';
import NotificationTab from '../../components/NotificationTab';
import LogOut from '../../components/LogOut';
import { Link } from 'expo-router';


const AccountPage = () => {
  return (
    <View style={styles.AccountPageContainer}>
        <Text style={styles.text}>Account</Text> 
        <View >
        <Link href="(tabs)" asChild>
        <TouchableOpacity>
        <Text style={styles.text2}>Done</Text>
        </TouchableOpacity>
        </Link>
      
        </View>
        
        <PremiumTab/>
        <RedeemCode/>
        <SetUpProfileTab/>
        <Text style ={styles.newtext}>Set up your profile to share your music and 
        see what your friends are playing</Text>
        <NotificationTab/>
        <LogOut/>
        <Text style={styles.Text}> Log Out Account</Text>
    </View>
  );
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
  text: {
    fontSize: 21,
    color: '#ffff',
    marginTop:-300,
    marginBottom: 610,
  },
  text2: {
    fontSize: 21,
    color: '#0AE78A',
    marginTop:-637,
    marginBottom: 610,
    marginRight:1,
    marginLeft:280
  },
  newtext: {
    fontSize: 14,
    color: '#ffff',
    marginTop:-350,
    marginLeft:35,
    marginRight:40,
   
  },
  Text: {
    fontSize:17,
    color:'#0AE78A',
    marginTop:175,
    marginLeft:2,
    marginRight:25,
    marginBottom:-220,
    
    
},
buttonContainer:{
  marginRight: 1,
  marginLeft: 130,
  width: 35,
  
},
});

export default AccountPage