import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const resetpassword = () => {
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
        <Text style={styles.text1Style}> Enter Your E-mail</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder=""
          placeholderTextColor="#ccc"
          secureTextEntry={false}
        />
        <Link href=" /Auth_Screens/resetpasswordverification" asChild>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2Style}>Submit</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default resetpassword;

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
  text1Style: {
    fontSize: 20,
    color: '#0AE78A',
    justifyContent: 'center',
    marginLeft: 118, // Adjust as needed
    marginTop: 100,
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
