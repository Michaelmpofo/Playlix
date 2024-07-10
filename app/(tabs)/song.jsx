import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent'
import SongScreenHeaderLeft from '../../components/SongScreenHeaderLeft';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';

const song = () => {
  return (
    <View style={styles.songScreenContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerTitle: 'Songs',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#0AE78A',
            fontSize: 35,
          },
          headerShadowVisible: false,
        }}
      />
      <SongScreenSearchComponent text={'   Find in Songs'} />
      <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>
    </View>
  );
};

export default song;

const styles = StyleSheet.create({
  songScreenContainer: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
