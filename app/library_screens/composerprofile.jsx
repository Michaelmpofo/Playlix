import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import { Stack } from 'expo-router';
import RightHeader from '../../components/RightHeader';
import LeftHeader from '../../components/LeftHeader';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';



const composerprofile = () => {
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <LeftHeader text="library" navigation={'(tabs)/library'} />
          ),
          headerRight: () => <RightHeader />,
          headerStyle: { backgroundColor: '#000000' },
          headerShown: true,
        }}
      />
      <Text style={styles.text1style}>Composers</Text>
      <SongScreenSearchComponent text={'   Find in Composers'} />
      <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/AnlogaAlbum.jpeg')}
          style={styles.albumImage}
        />
      </TouchableOpacity>
    </View>
  );
}

export default composerprofile
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 5,
  },
  albumImage: {
    width: 155,
    height: 160,
    marginTop: 20,
    marginLeft: 20,
  },
  text1style: {
    marginBottom: 8,
    fontSize: 30,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
});
 