import React, { useCallback, useImperativeHandle, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import SongData from '../data/songdata';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const SongListScreen = forwardRef(({ onSelectSong }, ref) => {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  const context = useSharedValue({ y: 0 });

  const scrollTo = useCallback((destination) => {
    'worklet';
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return translateY.value < SCREEN_HEIGHT;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
    scrollTo,
    isActive,
  ]);

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, 0);
    })
    .onEnd(() => {
      if (translateY.value > SCREEN_HEIGHT / 2) {
        scrollTo(SCREEN_HEIGHT);
      } else {
        scrollTo(SCREEN_HEIGHT / 2);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [SCREEN_HEIGHT, SCREEN_HEIGHT / 2],
      [25, 25],
      Extrapolate.CLAMP,
    );

    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const renderSongItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onSelectSong(item.id)}
      style={styles.songItem}
    >
      <Text style={styles.songTitle}>{item.title}</Text>
      <Text style={styles.songArtist}>{item.artist}</Text>
    </TouchableOpacity>
  );

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradient}
        >
          <View style={styles.line} />
          <FlatList
            data={SongData}
            renderItem={renderSongItem}
            keyExtractor={(item) => item.id}
            style={styles.songList}
            contentContainerStyle={styles.songListContent}
          />
        </LinearGradient>
      </Animated.View>
    </GestureDetector>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: 0,
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 0,
  },
  gradient: {
    flex: 1,
    width: '100%',
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  songList: {
    flex: 1,
  },
  songListContent: {
    paddingBottom: 20,
  },
  songItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default SongListScreen;
