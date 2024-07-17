import { View, Text,StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import GoBackBar from '../../components/GoBackBar'
import CodeBox from '../../components/CodeBox'
import RedeemBox from '../../components/RedeemBox'
import KeyboardHeader from '../../components/KeyboardHeader'
import Keyboard from '../../components/Keyboard'

const EnterCodePage = () => {
  return (
    <View style={styles.AccountPageContainer}>
    <View style={styles.GoBackContainer}>
      <GoBackBar/>
      </View>
     <View style={styles.infoContainer}>
      <CodeBox/>
      <RedeemBox/>
      <View>
            <TouchableOpacity>
            <Text style={styles.txtnew}>
           Terms and Conditions {'>'}
            </Text>
            </TouchableOpacity>
            </View>
      </View>

    </View>
  )
}

export default EnterCodePage
const styles = StyleSheet.create({
  AccountPageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#000000',
    width : '100%',
    height : '100%',
  },
  infoContainer: {
    flex: 1,
    flexDirection:'row',
    marginBottom:900,
    marginTop:0,
    alignItems: 'center',
    marginLeft:85,

  },
  GoBackContainer: {
    alignItems: 'center',
    width : 100,
    height : 100,
    marginTop:1250,
    marginBottom: -300,
    
  },
  txtnew: {
    fontSize: 15,
    color: '#656566',
    marginTop: -100,
    marginLeft:-400,
    marginRight:200,
   
    
   
   
  },
},
)