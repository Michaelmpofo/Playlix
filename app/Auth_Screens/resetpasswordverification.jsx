import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ResetPasswordVerification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  useEffect(() => {
    // Generate OTP after 3 seconds
    const otpTimer = setTimeout(() => {
      const newCode = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 10).toString(),
      );
      setCode(newCode);
    }, 3000);

    // Cleanup timer on unmount
    return () => clearTimeout(otpTimer);
  }, []);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.playListContainer}>
      <View style={styles.container1}>
        <Link href="/Auth_Screens/resetpassword" asChild>
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
          <Text style={styles.text1Style}>
            Please enter the verification code
          </Text>
          <Text style={styles.text2Style}>sent to your e-mail</Text>
        </View>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
          ))}
        </View>
        <Link href="/Auth_Screens/passwordconfirmation" asChild>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text4Style}>Submit</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default ResetPasswordVerification;

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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1Style: {
    fontSize: 20,
    color: '#0AE78A',
    justifyContent: 'center',
    marginTop: 100,
  },
  text2Style: {
    fontSize: 20,
    color: '#0AE78A',
    justifyContent: 'center',
    marginTop: 5,
  },
  text3Style: {
    fontSize: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text4Style: {
    fontSize: 18,
    justifyContent: 'center',
    flexDirection: 'row',
    color: '#FFFFFF',
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
    marginLeft: 110,
    justifyContent: 'center',
  },
  inputStyle: {
    width: 325,
    height: 54,
    marginLeft: 45,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#C',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    justifyContent: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    color: '#0AE78A',
  },
  input: {
    borderWidth: 1,
    width: 50,
    borderColor: '#0AE78A',
    height: 50,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 24,
    borderRadius: 10,
  },
});
