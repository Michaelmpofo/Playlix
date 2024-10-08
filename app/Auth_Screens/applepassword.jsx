import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';

const applepassword = () => {
  return (
    <View style={styles.playListContainer}>
      <View style={styles.container1}>
        <Link href="/Auth_Screens/appleverification" asChild>
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
          <View style={styles.textStyle}>
            <Text style={styles.text1Style}>Enter Password</Text>
          </View>
          <TextInput
            style={styles.inputStyle}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={false}
          />
          <Link href="/Auth_Screens/applepassword" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text2Style}>Send</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default applepassword;

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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:200,
  },
  iconStyle: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text1Style: {
    fontSize: 20,
    color: '#0AE78A',
    justifyContent: 'center',
    marginLeft: 10,
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
    justifyContent: 'center',
  },
  inputStyle: {
    width: 325,
    height: 54,
    borderWidth: 1,
    borderColor: '#0AE78A',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 10,
  },
});
