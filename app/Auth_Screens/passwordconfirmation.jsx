import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'


const PasswordConfirmation = () => {
  const [secureText, setSecureText] = useState(true);
  const [password, setPassword] = useState('');

  const toggleSecureText = () => {
    setSecureText(!secureText);
  };

  const criteria = {
    length: password.length >= 8,
    upperLower: /[A-Z]/.test(password) && /[a-z]/.test(password),
    symbol: /[@#$*]/.test(password),
    number: /[0-9]/.test(password),
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.playListContainer}>
        <View style={styles.container1}>
          <Link href="/Auth_Screens/resetpasswordverification" asChild>
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
            <Text style={styles.text1Style}> Reset Your Password</Text>
            <Text style={styles.text3Style}>
              {' '}
              Please Enter Your New Password
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#0AE78A"
              style={styles.iconLeft}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder=""
              placeholderTextColor="#ccc"
              secureTextEntry={secureText}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={toggleSecureText}
              style={styles.iconRight}
            >
              <Ionicons
                name={secureText ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#000000"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.criteriaContainer}>
            <Text style={styles.criteriaHeader}>
              Your password may contain:
            </Text>
            <View style={styles.criteriaItem}>
              <Ionicons
                name={criteria.length ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={criteria.length ? '#0AE78A' : '#000'}
              />
              <Text style={styles.criteriaText}>At least 8 characters</Text>
            </View>
            <View style={styles.criteriaItem}>
              <Ionicons
                name={
                  criteria.upperLower ? 'checkmark-circle' : 'ellipse-outline'
                }
                size={24}
                color={criteria.upperLower ? '#0AE78A' : '#000'}
              />
              <Text style={styles.criteriaText}>
                An uppercase and lowercase letter
              </Text>
            </View>
            <View style={styles.criteriaItem}>
              <Ionicons
                name={criteria.symbol ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={criteria.symbol ? '#0AE78A' : '#000'}
              />
              <Text style={styles.criteriaText}>
                At least a symbol (@, #, $, *)
              </Text>
            </View>
            <View style={styles.criteriaItem}>
              <Ionicons
                name={criteria.number ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={criteria.number ? '#0AE78A' : '#000'}
              />
              <Text style={styles.criteriaText}>A number</Text>
            </View>
          </View>

          <Link href="/Auth_Screens/resetpasswordverification" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text2Style}>Done</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <ScrollView></ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default PasswordConfirmation;

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
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle2: {
    color: '#FFFFFF',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text1Style: {
    fontSize: 24,
    color: '#0AE78A',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 30,
  },
  text2Style: {
    fontSize: 20,
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  text3Style: {
    fontSize: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text4Style: {
    fontSize: 15,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 325,
    height: 54,
    marginLeft: 45,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#0AE78A',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    color: '#000',
  },
  iconLeft: {
    marginRight: 10,
    color: '#000000',
  },
  iconRight: {
    marginLeft: 10,
    color: '#000000',
  },
  criteriaContainer: {
    marginTop: 20,
    paddingHorizontal: 45,
  },
  criteriaHeader: {
    fontSize: 15,
    marginBottom: 10,
    color: '#000',
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  criteriaText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#000',
  },
});
