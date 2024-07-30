import { View, Text,StyleSheet,ScrollView,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import LeftHeader from '../components/LeftHeader';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SongScreenSearchComponent from "../components/SongScreenSearchComponent"
import Playbutton from '../components/Playbutton';
import ShuffleButton from '../components/ShuffleButton';
import TrackListButton from '../components/TrackListButton';

const homeSongScreen = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.homeSongScreenContainer}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerLeft: () => <LeftHeader text="Back" navigation={'/(tabs)'} />,
            headerStyle: { backgroundColor: '#000000' },
            headerShown: true,
          }}
        />
        <View style={styles.searchStyle}>
          <SongScreenSearchComponent text={'   Find in Songs'} />
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/AnlogaAlbum.jpeg')}
            style={styles.albumImage1}
          />
        </View>
        <View style={styles.songButtonContainer}>
          <Playbutton />
          <ShuffleButton />
        </View>
        <ScrollView>
          <TrackListButton />
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

export default homeSongScreen
const styles = StyleSheet.create({
  homeSongScreenContainer: {
    backgroundColor: '#000000',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#000',
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginBottom: 20,
  },
  searchStyle: {
    padding: 13,
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumImage1: {
    width: 155,
    height: 160,
    marginTop: 10,
    marginLeft: 20,
  },
  albumImage: {
    width: 50,
    height: 50,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 10,
  },
  textIconstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#302F2F',
    borderBottomWidth: 1,
  },

  textImageStyle: {
    marginLeft: 20,
    marginRight: 120,
    marginTop: 20,
    flexDirection: 'column',
  },
  albumTitle: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  albumYear: {
    fontSize: 13,
    color: '#6D6A6A',
    marginBottom: 5,
  },
});