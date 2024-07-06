import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const logo1 = require('../../assets/images/Apple.png');

const AppleVerification = () => {
  return (
    <View style={styles.playListContainer}>
      <View style={styles.container1}>
        <Link href=" " asChild>
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
          <Image source={logo1} style={styles.logoStyle} />
          <Text style={styles.text1Style}> Enter AppleID</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder=""
          placeholderTextColor="#ccc"
          secureTextEntry={false}
        />
        <Link href="/Auth_Screens/applepassword" asChild>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2Style}>Done</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default AppleVerification;

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
    marginTop: 80,
    borderRadius: 30,
  },
  iconStyle: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoStyle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginTop: 5,
    marginBottom: 5,
  },
  textStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 100,
    marginTop: 130,
  },
  text1Style: {
    fontSize: 20,
    color: '#0AE78A',
    justifyContent: 'center',
  },
  text2Style: {
    fontSize: 20,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  text3Style: {
    fontSize: 15,
    marginLeft: 8,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonStyle: {
    width: '45%',
    height: 55,
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
  inputStyle: {
    width: 325,
    height: 54,
    marginLeft: 45,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0AE78A',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 10, // Adjust padding here
  },
});
