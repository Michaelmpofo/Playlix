import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const gradients = [
  ['#F6DB0E', '#0202A2'],
  ['#24c7f6', '#1a1332'],
  ['#e300df', '#3900f6'],
  ['#E4A876', '#B5531C'],
  ['#fcd2b0', '#fa005f'],
  ['#E6F2F6', '#493432'],
  ['#14A7A7', '#706868'],
  ['#AE8253', '#0F0F0F'],
  ['#fde641', '#ed2615'],
  ['#C07F48', '#706868'],
];

const TrackPlayerScreen = () => {
  const [value, setValue] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [gradientColors, setGradientColors] = useState(gradients[0]); // Initial gradient colors
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);
  const maxValue = 20;

  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => {
        setValue((prevValue) => {
          if (prevValue < maxValue) {
            return prevValue + 1;
          } else {
            clearInterval(timer);
            return prevValue;
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [playing]);

  useEffect(() => {
    async function setAudioMode() {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        playThroughEarpieceAndroid: false,
      });
    }

    setAudioMode();
  }, []);

  useEffect(() => {
    const gradientTimer = setInterval(() => {
      setGradientColors((prevColors) => {
        // Get the next gradient color set
        const currentIndex = gradients.indexOf(prevColors);
        const nextIndex = (currentIndex + 1) % gradients.length;
        return gradients[nextIndex];
      });
    }, 60000); // Change gradient every minute

    return () => clearInterval(gradientTimer);
  }, []);

  const handleVolumeChange = async (value) => {
    setVolume(value);
    await Audio.setVolumeAsync(value);
  };

  const formatTime = (value) => {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleForward = () => {
    setValue((prevValue) => Math.min(prevValue + 5, maxValue));
  };

  const handleBackward = () => {
    setValue((prevValue) => Math.max(prevValue - 5, 0));
  };

  const coverImage = require('../assets/images/songscreenimages/ShattaWale_Cover_.png');

  return (
    <LinearGradient colors={gradientColors} style={styles.overlayContainer}>
      {isImageLoading || imageLoadError ? (
        <View style={styles.unknownSongStyle}>
          <FontAwesome5 name="music" size={120} color="#81C8AA" />
        </View>
      ) : (
        <Image
          source={coverImage}
          style={styles.coverImageStyle}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setImageLoadError(true)}
        />
      )}
      <View style={styles.textStyle}>
        <Text style={styles.text1Style}>Not Playing</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={maxValue}
          minimumTrackTintColor="#ffffff"
          maximumTrackTintColor="#ffffff"
          thumbTintColor="#E3D6D6"
          thumbStyle={styles.thumb}
          value={value}
          onValueChange={(sliderValue) => setValue(sliderValue)}
        />
      </View>
      <View style={styles.textStyle2}>
        <Text style={styles.valueText}>{formatTime(value)}</Text>
        <Text style={styles.value1Text}>{formatTime(maxValue)}</Text>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={handleBackward} style={{ marginLeft: 60 }}>
          <AntDesign name="stepbackward" size={28} color="#D2D2D2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <AntDesign
            name={playing ? 'pause' : 'caretright'}
            size={50}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward} style={{ marginRight: 60 }}>
          <AntDesign name="stepforward" size={28} color="#D2D2D2" />
        </TouchableOpacity>
      </View>
      <View style={styles.volumeContainer}>
        <MaterialCommunityIcons name="volume-mute" size={24} color="#ffffff" />
        <Slider
          style={styles.volumeSlider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#ffffff"
          maximumTrackTintColor="#000000"
          thumbTintColor="#E3D6D6"
          thumbStyle={styles.thumb}
          value={volume}
          onValueChange={handleVolumeChange}
        />
        <MaterialCommunityIcons name="volume-high" size={24} color="#ffffff" />
      </View>
      <View style={styles.iconStyle}>
        <TouchableOpacity>
          <AntDesign name="message1" size={24} color="#D2D2D280" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="list-ul" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default TrackPlayerScreen;

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
  },
  unknownSongStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75918533',
    marginHorizontal: 45,
    marginTop: 180,
    height: 270,
    width: 272,
    borderRadius: 10,
  },
  coverImageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  textStyle: {
    marginTop: 50,
    marginLeft: 20,
  },
  text1Style: {
    fontSize: 20,
    color: '#ffffff',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textStyle2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#E3D6D6',
    borderRadius: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconStyle: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  valueText: {
    color: '#fff',
  },
  value1Text: {
    color: '#fff',
  },
  volumeContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  volumeSlider: {
    width: '80%',
    marginLeft: 10,
    marginRight: 10,
  },
});
