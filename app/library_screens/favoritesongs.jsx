import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Fontisto } from '@expo/vector-icons';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const favoritesongs = () => {
  const star = require('../../assets/images/AnlogaAlbum.jpeg');
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: () => (
            <LeftHeader navigation={'/library_screens/playList'} />
          ),
          headerRight: () => <RightHeader />,
          headerStyle: { backgroundColor: '#000000' },
          headerShown: true,
        }}
      />
      <View>
        <Image
          source={require('../../assets/images/FavoriteSongs.jpeg')}
          style={styles.albumImage}
        />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.text1Container}>
          <Text style={styles.text1style}>Favourite Songs</Text>
          <Fontisto name="star" size={18} color="#0AE78A" />
        </View>
        <View style={styles.text2Container}>
          <Text style={styles.text2style}>Michael Ofosu Ampofo</Text>
        </View>

        <View style={styles.text3Container}>
          <Text style={styles.text3style}>Updated 21hr ago</Text>
        </View>
      </View>
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
            style={styles.album1Image}
          />

          <View style={styles.textIconstyle}>
            <View style={styles.textImageStyle}>
              <Text style={styles.albumTitle}>African Party</Text>
              <Text style={styles.albumYear}>Stonebwoy</Text>
            </View>
            <View style={styles.iconStyle}>
              <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonStyle}>
          <View style={styles.iconStyle}>
            <FontAwesome name="star" size={15} color="#0AE78A" />
          </View>

          <Image
            source={require('../../assets/images/CindyThompson.jpeg')}
            style={styles.album1Image}
          />

          <View style={styles.textIconstyle}>
            <View style={styles.textImageStyle}>
              <Text style={styles.albumTitle}>Gospel</Text>
              <Text style={styles.albumYear}>Cindy Thompson</Text>
            </View>
            <View style={styles.iconStyle}>
              <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default favoritesongs;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  songButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justify: 'space-between',
    marginLeft: 20,
    marginTop: 20,
    gap: 5,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginRight: 10,
    marginTop: 30,
  },
  albumImage: {
    width: 180,
    height: 180,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  album1Image: {
    width: 50,
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  textIconstyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#302F2F',
    borderBottomWidth: 1,
    marginLeft: 10,
  },

  textImageStyle: {
    marginRight: 120,
    marginTop: 36,
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
  textContainer: {
    marginTop: 10,
  },
  text1Container: {
    marginTop: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text2Container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text3Container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text1style: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  text2style: {
    fontSize: 20,
    color: '#0AE78A',
  },

  text3style: {
    fontSize: 13,
    color: '#484848',
  },
});
