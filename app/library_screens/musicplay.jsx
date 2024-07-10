import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import LeftHeader from '../../components/LeftHeader';
import { FontAwesome5 } from '@expo/vector-icons';
import Playbutton from '../../components/Playbutton';
import MusicPlayButtons from '../../components/MusicPlayButtons';

const musicplay = () => {
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity>
              <FontAwesome5 name="ellipsis-h" size={24} color="#0AE78A" />
            </TouchableOpacity>
          ),

          headerLeft: () => (
            <LeftHeader text="" navigation={'(tabs)/library'} />
          ),
          headerStyle: { backgroundColor: '#000000' },
          headerShown: true,
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/AnlogaAlbum.jpeg')}
          style={styles.albumImage}
        />
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.text1style}>African Party</Text>
        <Text style={styles.Text2Style}>
          Stonebwoy . Anloga Junction . 6 March 2020
        </Text>
      </View>
      <View style={styles.songButtonContainer}>
        <Playbutton />
      </View>
      <MusicPlayButtons />
    </View>
  );
};

export default musicplay;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#302F2F',
    borderBottomWidth: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  songButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 100,
    marginBottom: 15,
    gap: 5,
  },
  albumImage: {
    width: 155,
    height: 160,
    marginTop: 20,
    marginLeft: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 20,
    gap: 5,
  },

  text1style: {
    marginBottom: 8,
    fontSize: 24,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
  Text2Style: {
    marginBottom: 8,
    fontSize: 15,
    color: '#302F2F',
    marginLeft: 12,
    borderBottomColor: '#',
  },
});
