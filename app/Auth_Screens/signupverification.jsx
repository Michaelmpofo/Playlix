import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SignupVerification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(192); // 3 minutes and 12 seconds

  const inputs = useRef([]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(timerInterval);
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

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <View style={styles.playListContainer}>
      <View style={styles.container1}>
        <Link href="/Auth_Screens/Sign_Up" asChild>
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
          <Text style={styles.text1Style}>Check Your Phone</Text>
          <Text style={styles.text2Style}>
            We have sent the code to your phone
          </Text>
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
        <Text style={styles.timerText}>
          Code expires in: {formatTime(timer)}
        </Text>
        <Link href="/Auth_Screens/congratulatorymessage" asChild>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text4Style}>Verify</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/Auth_Screens/resendcode" asChild>
          <TouchableOpacity style={styles.newcodeContainer}>
            <Text style={styles.newcodeText}>Didn't receive any code?</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SignupVerification;

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
    fontSize: 15,
    color: '#000000',
    justifyContent: 'center',
    marginTop: 5,
  },
  text3Style: {
    fontSize: 18,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text4Style: {
    color: '#FFFFFF',
    fontSize: 18,
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
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
  },
  newcodeContainer: {
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  newcodeText: {
    fontSize: 14,
    color: '#0AE78A',
    borderBottomColor: '#0AE78A',
    borderBottomWidth: 1,
    textAlign: 'center',
    marginHorizontal: 20,
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
  timerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
