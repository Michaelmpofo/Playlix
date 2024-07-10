import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const musicscreen = () => {
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
      <Text style={styles.text1style}>Songs</Text>
      <SongScreenSearchComponent text={'   Find in Songs'} />
      <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>
      <TouchableOpacity>
        <View style={styles.buttonStyle}>
          <View style={styles.iconStyle}>
            <FontAwesome name="star" size={15} color="#0AE78A" />
          </View>

          <Image
            source={require('../../assets/images/AnlogaAlbum.jpeg')}
            style={styles.albumImage}
          />

          <View style={styles.textIconstyle}>
            <View style={styles.textImageStyle}>
              <Text style={styles.albumTitle}>African Party</Text>
              <Text style={styles.albumYear}>Stonebwoy</Text>
            </View>
            <View>
              <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default musicscreen;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 20,
    gap: 5,
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginLeft: 20,
    marginTop: 20,
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
  text1style: {
    marginBottom: 8,
    fontSize: 30,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
});
