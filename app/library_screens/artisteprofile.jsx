import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import { MaterialIcons } from '@expo/vector-icons';
import Playbutton from "../../components/Playbutton";
import ShuffleButton from "../../components/ShuffleButton";

const ArtisteProfile = () => {
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen options={{
        headerTitle: '',
        headerLeft: () => <LeftHeader text='Artists' navigation={'library_screens/Artist'} />,
        headerRight: () => <RightHeader />,
        headerStyle: { backgroundColor: '#000000' },
        headerShown: true
      }} />
      
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/stonebwoy.jpg')}
          style={styles.artistImage}
        />
        <View style={styles.textStyle}>
          <Text style={styles.text2style}>Stonebwoy</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="#767272" />
        </View>
      </View>

      <View style={styles.songButtonContainer}>
        <Playbutton />
        <ShuffleButton />
      </View>

      <View style={styles.albumContainer}>
        <TouchableOpacity>
           <Image
          source={require('../../assets/images/AnlogaAlbum.jpeg')}
          style={styles.albumImage}
        />
          </TouchableOpacity>       
        <View style={styles.textImageStyle}>
          <Text style={styles.albumTitle}>Anloga Junction</Text>
          <Text style={styles.albumYear}>2020</Text>
        </View>
      </View>
    </View>
  )
}

export default ArtisteProfile;

const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  artistImage: {
    width: 123,
    height: 123,
    borderRadius: 80,
  },
  textStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textImageStyle: {
    marginLeft: 5,
    marginTop: 10,
  },
  albumTitle: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  albumYear: {
    fontSize: 16,
    color: '#6D6A6A',
  },
  text2style: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 30,
    color: '#FFFFFF',
    marginLeft: 20,
    marginRight: 12,
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 20,
    gap: 5,
  },
  albumContainer: {
    flexDirection: 'column',
    marginLeft:20,
    marginTop: 20,
  },
  albumImage: {
    width: 155,
    height: 160,
  },
});
