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
        <View style={styles.centeredContent}>
          <Text style={styles.text1Style}>Enter Your E-mail</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={false}
          />
          <Link href="/Auth_Screens/resetpasswordverification" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text2Style}>Submit</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
    marginTop: 100,
    borderRadius: 30,
  },
  centeredContent: {
    marginTop:200,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
    marginBottom: 20,
  },
  text2Style: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  text3Style: {
    fontSize: 15,
    marginLeft: 8,
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
    justifyContent: 'center',
    marginTop: 20,
  },
  inputStyle: {
    width: '80%',
    height: 54,
    borderWidth: 1,
    borderColor: '#0AE78A',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingLeft: 10,
  },
});
