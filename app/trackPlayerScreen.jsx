import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SongData from '../data/songdata';
import { Link } from 'expo-router';
import LyricsBottomSheet from '../components/LyricsBottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SongListScreen from '../app/songlistscreen';

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
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const { width, height } = Dimensions.get('window');
  const styles = createStyles(width, height);
  const [lyrics, setLyrics] = useState('');
  const [isFetchingLyrics, setIsFetchingLyrics] = useState(false);

  const currentSong =
    SongData.find((song) => song.id === currentSongId) || SongData[0];

  useEffect(() => {
    let isMounted = true;
    const loadAudio = async () => {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }
      const newSound = await loadAudioFile();
      if (isMounted && newSound) {
        setSound(newSound);
      }
    };
    loadAudio();
    return () => {
      isMounted = false;
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
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const setInitialVolume = async () => {
      if (sound) {
        try {
          await sound.setVolumeAsync(volume);
          console.log('Initial volume set to:', volume);
        } catch (error) {
          console.error('Error setting initial volume:', error);
        }
      }
    };
    setInitialVolume();
  }, [sound]);

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

  const loadAudioFile = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: currentSong.link },
        { shouldPlay: false },
        onPlaybackStatusUpdate,
      );
      setSound(newSound);
      // Set initial volume
      await newSound.setVolumeAsync(volume);
      setIsImageLoading(false);
      setImageLoadError(false);
      return newSound;
    } catch (error) {
      console.error('Error loading audio:', error);
      setImageLoadError(true);
      return null;
    }
  };

  useEffect(() => {
    fetchLyrics();
  }, [currentSongId]);

  const fetchLyrics = async () => {
    setIsFetchingLyrics(true);
    const artistName = currentSong.artist.split('&')[0];
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${encodeURIComponent(artistName)}/${encodeURIComponent(currentSong.title)}`,
      );
      const data = await response.json();
      setLyrics(data.lyrics || 'Lyrics not found');
    } catch (error) {
      console.error('Error fetching lyrics:', error);
      setLyrics('Failed to fetch lyrics. Please try again.');
    } finally {
      setIsFetchingLyrics(false);
    }
  };

  const handleOpenLyrics = () => {
    bottomSheetRef.current?.scrollTo(0);
  };

  const onPlaybackStatusUpdate = async (status) => {
    if (status.isLoaded) {
      setPlaying(status.isPlaying);
      if (!isSeeking) {
        const newPosition = Number((status.positionMillis / 1000).toFixed(2));
        const newDuration = Number((status.durationMillis / 1000).toFixed(2));
        if (newPosition !== position) {
          setPosition(newPosition);
        }
        if (newDuration !== duration) {
          setDuration(newDuration);
        }
      }
      if (status.didJustFinish) {
        if (isLooping) {
          await sound.replayAsync();
        } else if (isShuffling) {
          await playNextSong(true);
        } else {
          setPosition(0);
          setPlaying(false);
        }
      }
    }
  };

  const handlePlayPause = async () => {
    if (sound) {
      if (playing) {
        await sound.pauseAsync();
        setPlaying(false);
      } else {
        await sound.playAsync();
        setPlaying(true);
      }
    } else {
      const newSound = await loadAudioFile();
      if (newSound) {
        setSound(newSound);
        await newSound.playAsync();
        setPlaying(true);
      }
    }
  };

  const handleVolumeChange = async (value) => {
    setVolume(value);
    if (sound) {
      try {
        await sound.setVolumeAsync(value);
        console.log('Volume set to:', value);
      } catch (error) {
        console.error('Error setting volume:', error);
      }
    } else {
      console.log('Sound object not available');
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

  const playNextSong = async (autoPlay = false) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    let nextIndex;
    if (isShuffling) {
      nextIndex = Math.floor(Math.random() * SongData.length);
    } else {
      const currentIndex = SongData.findIndex(
        (song) => song.id === currentSongId,
      );
      nextIndex = (currentIndex + 1) % SongData.length;
    }
    setCurrentSongId(SongData[nextIndex].id);
    if (autoPlay || isShuffling || isLooping) {
      const newSound = await loadAudioFile();
      if (newSound) {
        setSound(newSound);
        await newSound.playAsync();
        setPlaying(true);
      }
    }
  };

  const playPreviousSong = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    let previousIndex;
    if (isShuffling) {
      previousIndex = Math.floor(Math.random() * SongData.length);
    } else {
      const currentIndex = SongData.findIndex(
        (song) => song.id === currentSongId,
      );
      previousIndex = (currentIndex - 1 + SongData.length) % SongData.length;
    }
    setCurrentSongId(SongData[previousIndex].id);
  };

  const toggleLoop = async () => {
    setIsLooping(!isLooping);
    if (sound) {
      await sound.setIsLoopingAsync(!isLooping);
      if (!isLooping && !playing) {
        await sound.playAsync();
        setPlaying(true);
      }
    }
  };

  const toggleShuffle = async () => {
    setIsShuffling(!isShuffling);
    if (!isShuffling && !playing && sound) {
      await sound.playAsync();
      setPlaying(true);
    }
  };

  const selectSong = async (id) => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setSound(null);
    }
    setCurrentSongId(id);
    setPlaying(false); // Ensure playing state is set to false
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === null) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const bottomSheetRef = useRef(null);
  const songListRef = useRef(null);

  const handleOpenSongList = () => {
    songListRef.current?.scrollTo(height / 2);
  };

  const handleSelectSong = (id) => {
    selectSong(id);
    songListRef.current?.scrollTo(height);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient colors={gradientColors} style={styles.overlayContainer}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            {isImageLoading || imageLoadError ? (
              <View style={styles.unknownSongStyle}>
                <FontAwesome5 name="music" size={width * 0.3} color="#81C8AA" />
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
          <View style={styles.songInfoContainer}>
            <Text style={styles.songTitle}>
              {currentSong?.title || 'Unknown Title'}
            </Text>
            <Text style={styles.songArtist}>
              {currentSong?.artist || 'Unknown Artist'}
            </Text>
          </View>
          <View style={styles.controlsContainer}>
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
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTime(position)}</Text>
              <Text style={styles.timeText}>{formatTime(duration)}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={playPreviousSong}>
                <AntDesign
                  name="stepbackward"
                  size={width * 0.07}
                  color="#D2D2D2"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                <AntDesign
                  name={playing ? 'pause' : 'play'}
                  size={width * 0.12}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={playNextSong}>
                <AntDesign
                  name="stepforward"
                  size={width * 0.07}
                  color="#D2D2D2"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.volumeContainer}>
              <MaterialCommunityIcons
                name="volume-mute"
                size={width * 0.06}
                color="#ffffff"
              />
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
              <MaterialCommunityIcons
                name="volume-high"
                size={width * 0.06}
                color="#ffffff"
              />
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={toggleLoop}>
                <MaterialCommunityIcons
                  name={isLooping ? 'repeat-once' : 'repeat'}
                  size={width * 0.07}
                  color={isLooping ? '#FFFFFF' : '#D2D2D280'}
                />
              </TouchableOpacity>
              <Link href="/Lyricsscreen" asChild>
                <TouchableOpacity onPress={handleOpenLyrics}>
                  <AntDesign
                    name="message1"
                    size={width * 0.07}
                    color="#D2D2D280"
                  />
                </TouchableOpacity>
              </Link>
              <TouchableOpacity onPress={handleOpenSongList}>
                <FontAwesome5
                  name="list-ul"
                  size={width * 0.07}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleShuffle}>
                <MaterialCommunityIcons
                  name="shuffle-variant"
                  size={width * 0.07}
                  color={isShuffling ? '#FFFFFF' : '#D2D2D280'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <SongListScreen ref={songListRef} onSelectSong={handleSelectSong} />
        <LyricsBottomSheet
          ref={bottomSheetRef}
          lyrics={lyrics}
          isLoading={isFetchingLyrics}
          songTitle={currentSong?.title}
          artist={currentSong?.artist}
        />
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

const createStyles = (width, height) =>
  StyleSheet.create({
    overlayContainer: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      padding: width * 0.05,
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: height * 0.05,
    },
    unknownSongStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#75918533',
      height: width * 0.7,
      width: width * 0.7,
      borderRadius: width * 0.05,
    },
    coverImageStyle: {
      height: width * 1.0,
      width: width * 0.96,
      borderRadius: width * 0.05,
      marginTop: height * 0.05,
    },
    songInfoContainer: {
      alignItems: 'center',
      marginTop: height * 0.02,
    },
    songTitle: {
      fontWeight: 'bold',
      fontSize: width * 0.06,
      color: '#ffffff',
      textAlign: 'center',
    },
    songArtist: {
      fontSize: width * 0.04,
      color: '#ffffff',
      textAlign: 'center',
    },
    controlsContainer: {
      width: '100%',
      marginBottom: height * 0.05,
    },
    sliderContainer: {
      width: '100%',
    },
    slider: {
      width: '100%',
      height: height * 0.04,
    },
    thumb: {
      width: width * 0.05,
      height: width * 0.05,
      backgroundColor: '#E3D6D6',
      borderRadius: width * 0.025,
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: height * 0.01,
    },
    timeText: {
      color: '#fff',
      fontSize: width * 0.03,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
    },
    volumeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: height * 0.02,
    },
    volumeSlider: {
      flex: 1,
      marginHorizontal: width * 0.02,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: height * 0.02,
      marginBottom: height * 0.02,
    },
  });

export default TrackPlayerScreen;