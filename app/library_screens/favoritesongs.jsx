import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Fontisto, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import Playbutton from '../../components/Playbutton';
import ShuffleButton from '../../components/ShuffleButton';

const favoritesongs = () => {
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
      <Image
        source={require('../../assets/images/FavoriteSongs.jpeg')}
        style={styles.albumImage}
      />
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
        <View style={styles.buttonSpacer} />
        <ShuffleButton />
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <FontAwesome name="star" size={15} color="#0AE78A" />
        <Image
          source={require('../../assets/images/AnlogaAlbum.jpeg')}
          style={styles.album1Image}
        />
        <View style={styles.textIconStyle}>
          <View style={styles.textImageStyle}>
            <Text style={styles.albumTitle}>African Party</Text>
            <Text style={styles.albumYear}>Stonebwoy</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <FontAwesome name="star" size={15} color="#0AE78A" />
        <Image
          source={require('../../assets/images/CindyThompson.jpeg')}
          style={styles.album1Image}
        />
        <View style={styles.textIconStyle}>
          <View style={styles.textImageStyle}>
            <Text style={styles.albumTitle}>Gospel</Text>
            <Text style={styles.albumYear}>Cindy Thompson</Text>
          </View>
          <FontAwesome5 name="ellipsis-h" size={15} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default favoritesongs;

const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  albumImage: {
    width: 180,
    height: 180,
    marginTop: 30,
    marginBottom: 20,
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  text1Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text2Container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text3Container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text1style: {
    fontSize: 30,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
  text2style: {
    fontSize: 20,
    color: '#0AE78A',
    marginLeft: 10,
  },
  text3style: {
    fontSize: 13,
    color: '#484848',
    marginLeft: 5,
  },
  songButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15, // Adjusted to reduce space
   justifyContent:'center'
  },
  buttonSpacer: {
    width: 10, // Adjust as needed for desired spacing
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adjusted to reduce space
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
  },
  textImageStyle: {
    marginRight: 20,
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
