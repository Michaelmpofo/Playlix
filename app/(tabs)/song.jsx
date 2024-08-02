import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import SongScreenHeaderLeft from '../../components/SongScreenHeaderLeft';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';
import { Link } from 'expo-router';
import NowPlayingBar from '../../components/NowPlayingBar';

const song = () => {
  return (
    <GestureHandlerRootView>
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
        <View style={styles.playButtonContainer}>
          <Playbutton />
          <ShuffleButton />
        </View>

        <ScrollView>

          {[{
            title: 'Kilos Milos',
            artist: 'Black Sherif',
            image: require('../../assets/images/songscreenimages/black-sherif-kilos-milos-scaled.jpg')
          }, {
            title: 'Favorite Story',
            artist: 'King Promise x Sarkodie X Olive the Boy',
            image: require('../../assets/images/songscreenimages/KingPromise.jpeg')
          }, {
            title: 'Overlord',
            artist: 'Stonebwoy',
            image: require('../../assets/images/SongsAlbum/StoneBwoy2.jpg')
          }, {
            title: 'Skelewu',
            artist: 'Davido',
            image: require('../../assets/images/SongsAlbum/Davido2.jpg')
          }, {
            title: 'African Party',
            artist: 'Stonebwoy',
            image: require('../../assets/images/SongsAlbum/Stonebwoy.jpg')
          }, {
            title: 'Gospel',
            artist: 'Cindy Thompson',
            image: require('../../assets/images/SongsAlbum/CT.jpg')
          }, {
            title: '1 Don',
            artist: 'Shatta Wale',
            image: require('../../assets/images/SongsAlbum/Shatta.jpg')
          }, {
            title: 'Things Fall Apart',
            artist: 'Kofi Kinaata',
            image: require('../../assets/images/SongsAlbum/Kinaata.jpg')
          }, {
            title: 'Porpi',
            artist: 'Kwesi Arthur',
            image: require('../../assets/images/SongsAlbum/ArthurKwasi.jpg')
          }, {
            title: 'January 9th',
            artist: 'black sherif',
            image: require('../../assets/images/SongsAlbum/KilosMilos.jpg')
          }, {
            title: 'Hello',
            artist: 'Adele',
            image: require('../../assets/images/SongsAlbum/Adel2.jpg')
          }, {
            title: 'Otan',
            artist: 'Sarkodie',
            image: require('../../assets/images/SongsAlbum/Sark.jpg')
          }].map((item, index) => (
            <Link href="/trackPlayerScreen" asChild key={index}>
              <TouchableOpacity style={styles.buttonStyle}>
                <FontAwesome name="star" size={15} color="#0AE78A" />
                <Image source={item.image} style={styles.album1Image} />
                <View style={styles.textIconStyle}>
                  <View style={styles.textImageStyle}>
                    <Text style={styles.albumTitle}>{item.title}</Text>
                    <Text style={styles.albumYear}>{item.artist}</Text>
                  </View>
                  <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />

                </View>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
      <NowPlayingBar />
    </GestureHandlerRootView>
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
  playButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  album1Image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 10,
  },
  textIconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#302F2F',
    marginLeft: 10,
    paddingVertical: 10,
  },
  textImageStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  albumTitle: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  albumYear: {
    fontSize: 13,
    color: '#6D6A6A',
    marginTop: 5,
  },
});
