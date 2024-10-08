import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword, auth } from './Auth_Screens/firebase'; // adjust the path if necessary
import { Link } from 'expo-router';

const image = require('../assets/images/signupimage.jpeg');
const logo1 = require('../assets/images/Apple.png');
const logo2 = require('../assets/images/Google.png');

const index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // Sign in the user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      Alert.alert('Success', 'Login successful', [
        { text: 'OK', onPress: () => router.push('/(tabs)') },
      ]);
    } catch (error) {
      Alert.alert('Error', 'User does not exist or wrong credentials');
    }
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Enter Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Text style={styles.title}>Enter Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>

          <Link href="/Auth_Screens/resetpassword" asChild>
            <TouchableOpacity>
              <Text style={styles.link}>Forgot Your Password?</Text>
            </TouchableOpacity>
          </Link>
          <Text style={styles.textStyle}>First time in Playlix?</Text>
          <Link href="/Auth_Screens/Sign_Up" asChild>
            <TouchableOpacity>
              <Text style={styles.link2}>
                Click here to Create a New Account
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <Link href="/Auth_Screens/appleverification" asChild>
          <TouchableOpacity style={styles.button1}>
            <Image source={logo1} style={styles.logoStyle} />
            <Text style={styles.button1Text}>Continue with Apple</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.button2}>
          <Image source={logo2} style={styles.logoStyle} />
          <Text style={styles.button2Text}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: to give a translucent overlay effect
  },
  card: {
    marginTop: 270,
    width: '72%',
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)', // Very light translucent white background
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#FFFFFF',
  },
  logoStyle: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    width: '95%',
    height: 38,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '55%',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  button1: {
    width: '65%',
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
    flexDirection: 'row',
  },
  button1Text: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 15,
  },
  button2: {
    width: '65%',
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
    flexDirection: 'row',
  },
  button2Text: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 15,
  },
  link: {
    color: '#0AE78A',
    fontSize: 14,
    marginBottom: 30,
    borderBottomColor: '#0AE78A',
    borderBottomWidth: 1,
  },
  link2: {
    color: '#0AE78A',
    fontSize: 14,
    marginBottom: 15,
    borderBottomColor: '#0AE78A',
    borderBottomWidth: 1,
  },

  infoText: {
    fontSize: 11,
    marginBottom: 5,
  },
  textStyle: {
    fontSize: 12,
    color: '#FFFFFF',
  },
});
