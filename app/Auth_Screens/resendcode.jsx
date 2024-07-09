import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const resendcode = () => {
  return (
    <View View style={styles.playListContainer}>
      <View style={styles.container1}>
        <Link href="/Auth_Screens/signupverification" asChild>
          <TouchableOpacity style={styles.iconStyle}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color="black"
            />
            <Text style={styles.text3Style}>Return</Text>
          </TouchableOpacity>
        </Link>
        <View style={styles.textStyle}>
          <Text style={styles.text1Style}>Didn't receive any code?</Text>
        </View>
        <View style={styles.button2Style}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.button2Text}>Send again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default resendcode;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#0AE78A',
    width: '100%',
    height: '100%',
  },
  container1: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    marginTop: 100,
    borderRadius: 30,
  },
  iconStyle: {
    marginLeft: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 190,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },

  text1Style: {
    color: '#0AE78A',
    fontSize: 24,
    justifyContent: 'center',
    marginBottom: 30,
  },

  buttonStyle: {
    width: '100%',
    height: 60,
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: '#0AE78A',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 70,
    marginLeft: 120,
    justifyContent: 'center',
  },
  button2Style: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button2: {
    width: '80%',
    padding: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: '#FFFFFFFF',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
    flexDirection: 'column',
  },
  button2Text: {
    fontSize: 16,
  },
 
 
});
