import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

const NowPlayingBar = () => {
  const playlix1 = require('../assets/images/playlix1.png');
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play/pause

  // Function to toggle play/pause state
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Link href="/trackPlayerScreen" asChild>
      <TouchableOpacity>
        <View style={styles.NowPlayingContainer}>
          <View style={styles.playlixImgContainer}>
            <Image source={playlix1} style={styles.playlixImg} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
              {isPlaying ? 'Playing' : 'Not Playing'}
            </Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={togglePlayPause}
              >
                <AntDesign
                  name={isPlaying ? 'pause' : 'caretright'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <AntDesign name="forward" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default NowPlayingBar;

const styles = StyleSheet.create({
  NowPlayingContainer: {
    position: 'absolute',
    backgroundColor: '#0AE78A',
    bottom: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#0AE78A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
  },
  playlixImg: {
    width: 70,
    height: 30,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playlixImgContainer: {
    width: 50,
    height: 30,
    marginLeft: 0,
  },
  title: {
    fontSize: 15,
    marginRight: 10, // Adjust as per your design
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10, // Adjust for spacing between icons
    marginRight: 20,
  },
});
