import { View, Text ,ImageBackground,StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const image = require('../../assets/images/sign_in_background.jpg');
const logo1 = require('../../assets/images/Apple.png');
const logo2 = require('../../assets/images/Google.png');
const Sign_Up = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.title1}>Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Text style={styles.title2}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
            secureTextEntry={true}
          />
          <Text style={styles.title3}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Text style={styles.title4}>Enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Text style={styles.title5}>Re-enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            placeholderTextColor="#ccc"
          />
          <Link href="/index" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <TouchableOpacity style={styles.button1}>
          <Image source={logo1} style={styles.logoStyle} />
          <Text style={styles.button1Text}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={logo2} style={styles.logoStyle} />
          <Text style={styles.button2Text}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Sign_Up
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
    marginTop: 200,
    width: '78%',
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)', // Very light translucent white background
    alignItems: 'center',
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
  title1: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    marginRight: 55,
  },
  title2: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    marginRight: 100,
  },
  title3: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    marginRight: 130,
  },
  title4: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    marginRight: 50,
  },
  title5: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    marginRight: 26,
  },
  input: {
    width: '87%',
    height: 38,
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '50%',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  button1: {
    width: '65%',
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
    flexDirection: 'row',
  },
  button1Text: {
    color: '#A38FCE',
    fontSize: 14,
    marginLeft: 15,
  },
  button2: {
    width: '65%',
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 10,
    flexDirection: 'row',
  },
  button2Text: {
    color: '#A38FCE',
    fontSize: 14,
    marginLeft: 15,
  },
  link: {
    color: '#0AE78A',
    fontSize: 14,
    marginBottom: 10,
  },
  link2: {
    color: '#0AE78A',
    fontSize: 14,
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