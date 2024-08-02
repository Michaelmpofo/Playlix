import React, { useCallback, useImperativeHandle } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView,
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

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const LyricsBottomSheet = React.forwardRef(
  ({ lyrics, isLoading, songTitle, artist, gradientColors }, ref) => {
    const translateY = useSharedValue(SCREEN_HEIGHT);
    const context = useSharedValue({ y: 0 });
    const active = useSharedValue(false);

    // Default gradient colors in case they're not provided
    const defaultGradientColors = ['#000000', '#ffffff'];

    const scrollTo = useCallback((destination) => {
      'worklet';
      active.value = destination !== SCREEN_HEIGHT;
      translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
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
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 2) {
          scrollTo(0);
        } else {
          scrollTo(MAX_TRANSLATE_Y);
        }
      });

    const rBottomSheetStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANSLATE_Y, -SCREEN_HEIGHT / 2, 0],
        [0, 25, 25],
        Extrapolate.CLAMP,
      );
      return {
        borderRadius,
        transform: [{ translateY: translateY.value }],
      };
    });

    const rContentStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        translateY.value,
        [-SCREEN_HEIGHT / 2, 0],
        [1, 0.5],
        Extrapolate.CLAMP,
      );
      return { opacity };
    });

    // Use default colors if gradientColors is not provided or is invalid
    const colors =
      Array.isArray(gradientColors) && gradientColors.length >= 2
        ? gradientColors
        : defaultGradientColors;

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
          <LinearGradient colors={colors} style={StyleSheet.absoluteFillObject}>
            <View style={styles.line} />
            <Animated.View style={[styles.content, rContentStyle]}>
              <Text style={styles.songTitle}>
                {songTitle || 'Unknown Title'}
              </Text>
              <Text style={styles.artist}>{artist || 'Unknown Artist'}</Text>
              {isLoading ? (
                <ActivityIndicator size="large" color="#ffffff" />
              ) : (
                <ScrollView style={styles.lyricsContainer}>
                  <Text style={styles.lyrics}>
                    {lyrics || 'No lyrics available'}
                  </Text>
                </ScrollView>
              )}
            </Animated.View>
          </LinearGradient>
        </Animated.View>
      </GestureDetector>
    );
  },
);

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  lyricsContainer: {
    flex: 1,
  },
  lyrics: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
  },
});

export default LyricsBottomSheet;
