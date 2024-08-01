import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SongData from '../data/songdata';

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

const defaultAlbumArt = 'https://example.com/default-album-art.jpg';

const TrackPlayerScreen = () => {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [gradientColors, setGradientColors] = useState(gradients[0]);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [currentSongId, setCurrentSongId] = useState(SongData[0].id);
  const [sound, setSound] = useState(null);
  const sliderRef = useRef(null);
  const [isSeeking, setIsSeeking] = useState(false);

  const currentSong = SongData.find(song => song.id === currentSongId);

  useEffect(() => {
    loadAudio();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentSongId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientColors((prevColors) => {
        const currentIndex = gradients.findIndex(
          (g) => g[0] === prevColors[0] && g[1] === prevColors[1],
        );
        const nextIndex = (currentIndex + 1) % gradients.length;
        return gradients[nextIndex];
      });
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    let interval;
    if (playing && sound) {
      interval = setInterval(async () => {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && !isSeeking) {
          setPosition(Number((status.positionMillis / 1000).toFixed(2)));
          setDuration(Number((status.durationMillis / 1000).toFixed(2)));
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [playing, sound, isSeeking]);

  const loadAudio = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: currentSong.link },
        { shouldPlay: false },
        onPlaybackStatusUpdate,
      );
      setSound(newSound);
      setIsImageLoading(false);
      setImageLoadError(false);
    } catch (error) {
      console.error('Error loading audio:', error);
      setImageLoadError(true);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded && !isSeeking) {
      const newPosition = Number((status.positionMillis / 1000).toFixed(2));
      const newDuration = Number((status.durationMillis / 1000).toFixed(2));
      if (newPosition !== position) {
        setPosition(newPosition);
      }
      if (newDuration !== duration) {
        setDuration(newDuration);
      }
      if (status.didJustFinish) {
        playNextSong();
      }
    }
  };

  const playSong = async () => {
    if (sound) {
      await sound.playAsync();
      setPlaying(true);
    }
  };

  const pauseSong = async () => {
    if (sound) {
      await sound.pauseAsync();
      setPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (playing) {
      pauseSong();
    } else {
      playSong();
    }
  };

  const handleVolumeChange = async (value) => {
    setVolume(value);
    if (sound) {
      await sound.setVolumeAsync(value);
    }
  };

  const handleSliderChange = async (value) => {
    setIsSeeking(true);
    setPosition(value);
  };

  const handleSliderComplete = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value * 1000);
    }
    setIsSeeking(false);
  };

  const playNextSong = () => {
    const currentIndex = SongData.findIndex(song => song.id === currentSongId);
    const nextIndex = (currentIndex + 1) % SongData.length;
    setCurrentSongId(SongData[nextIndex].id);
  };

  const playPreviousSong = () => {
    const currentIndex = SongData.findIndex(song => song.id === currentSongId);
    const previousIndex = (currentIndex - 1 + SongData.length) % SongData.length;
    setCurrentSongId(SongData[previousIndex].id);
  };

  const selectSong = (id) => {
    setCurrentSongId(id);
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectSong(item.id)} style={styles.songItem}>
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === null) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <LinearGradient colors={gradientColors} style={styles.overlayContainer}>
      <View style={styles.imageContainer}>
        {isImageLoading || imageLoadError ? (
          <View style={styles.unknownSongStyle}>
            <FontAwesome5 name="music" size={120} color="#81C8AA" />
          </View>
        ) : (
          <Image
            source={{ uri: currentSong.albumArt || defaultAlbumArt }}
            defaultSource={require('../assets/images/searchimages/headset.jpeg')}
            style={styles.coverImageStyle}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setImageLoadError(true)}
          />
        )}
      </View>
      <View style={styles.text2Style}>
        <Text style={styles.text1Style}>
          {currentSong?.title || 'Unknown Title'}
        </Text>
        <Text style={styles.text2Style}>
          {currentSong?.artist || 'Unknown Artist'}
        </Text>
      </View>
      <FlatList
        data={SongData}
        renderItem={renderSongItem}
        keyExtractor={(item) => item.id}
        style={styles.songList}
      />
      <View style={styles.sliderContainer}>
        <Slider
          ref={sliderRef}
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#ffffff"
          maximumTrackTintColor="#ffffff"
          thumbTintColor="#E3D6D6"
          thumbStyle={styles.thumb}
          value={position}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderComplete}
        />
      </View>
      <View style={styles.textStyle2}>
        <Text style={styles.valueText}>{formatTime(position)}</Text>
        <Text style={styles.value1Text}>{formatTime(duration)}</Text>
      </View>
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={playPreviousSong} style={{ marginLeft: 60 }}>
          <AntDesign name="stepbackward" size={28} color="#D2D2D2" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlayPause}>
          <AntDesign
            name={playing ? 'pause' : 'caretright'}
            size={50}
            color="#FFFFFF"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={playNextSong} style={{ marginRight: 60 }}>
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
    paddingTop: 50, // Add some top padding
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  unknownSongStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#75918533',
    height: 270,
    width: 270,
    borderRadius: 10,
  },
  coverImageStyle: {
    height: 240,
    width: 240,
    borderRadius: 10,
    marginTop: 30,
  },

  text2Style: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 20,
    color: '#ffffff',
  },
  text1Style: {
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 20,
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
  songItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  songTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#ffffff',
    fontSize: 14,
  },
  songList: {
    marginTop: 20,
    maxHeight: 150,
  },
});
