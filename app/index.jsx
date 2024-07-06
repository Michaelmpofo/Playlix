import { View, Text, ImageBackground,StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import React from 'react'
import { Link } from 'expo-router';

const image = require('../assets/images/signupimage.jpeg');

const index = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Enter Username</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Text style={styles.title}>Enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
          <Link href="/(tabs)/index" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot Your Password?</Text>
          </TouchableOpacity>
          <Text style={styles.textStyle}>First time in Playlix?</Text>
          <Link href="/Auth_Screens/Sign_Up" asChild>
            <TouchableOpacity>
              <Text style={styles.link2}>
                Click here to Create a New Account
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.button1Text}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
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
    width: '70%',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  button1Text: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  button2: {
    width: '70%',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#0AE78A',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  button2Text: {
    color: '#FFFFFF',
    fontSize: 14,
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
