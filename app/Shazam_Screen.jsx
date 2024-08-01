import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity, // Added for button
  TouchableNativeFeedback,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window');
const image = require('../assets/images/songscreenimages/Devwaa.jpg');
const SongName = 'Song Name';
const ArtistName = 'Artist Name';
const Album = 'Album';


const Shazam_Screen = () => {
  // Function to handle Shazam button press
  const handleShazamPress = () => {
    // TODO: Integrate ACRCLOUD music recognition here
    console.log('Shazam button pressed');
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 1.9)']} // Gradient from transparent to dark
        style={styles.gradientOverlay}
      >
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.songName}>{SongName}</Text>
            <Text style={styles.artistName}>{ArtistName}</Text>
            <Text style={styles.albumName}>{Album}</Text>
          </View>
        </View>
        {/* Shazam Button with ripple effect */}
        <TouchableOpacity
          onPress={handleShazamPress}
          style={styles.shazamButton}
          activeOpacity={0.7} // Adjusts opacity for touch feedback
        >
          <TouchableNativeFeedback
            onPress={handleShazamPress}
            background={TouchableNativeFeedback.Ripple('#ffffff', true)}
          >
            <View style={styles.buttonContent}>
              <Fontisto name="shazam" size={50} color="#0AE78A" />
            </View>
          </TouchableNativeFeedback>
        </TouchableOpacity>
        {/* Add your content here */}
      </LinearGradient>
    </ImageBackground>
  );
};

export default Shazam_Screen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  gradientOverlay: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // Add styling for your content here
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom:50,
    marginTop:300,
    marginRight:100,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  songName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  artistName: {
    fontSize: 18,
    color: '#fff',
  },
  albumName: {
    fontSize: 18,
    color: '#fff',
  },
  shazamButton: {
    borderRadius: 50,
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonContent: {
    borderRadius: 50,
    backgroundColor: '#1a1a1a',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
