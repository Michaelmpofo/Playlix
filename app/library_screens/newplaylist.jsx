import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';

const NewPlaylist = () => {
  return (
    <View style={styles.playListContainer}>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: { backgroundColor: '#000000' },
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <Link href="/library_screens/playList" asChild>
          <TouchableOpacity>
            <Text style={styles.text1style}>Cancel</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity>
          <Text style={styles.text2style}>New playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text3style}>Create</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/CameraCard.jpeg')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.text4ContainerStyle}>
        <Text style={styles.text4style}>PlayList Title</Text>
      </View>
    </View>
  );
};

export default NewPlaylist;

const styles = StyleSheet.create({
  playListContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
     marginTop:80,
  },
  text1style: {
    fontSize: 17,
    color: '#0AE78A',
  },
  text2style: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  text3style: {
    fontSize: 17,
    color: '#484848',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  text4ContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#3A3636',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 70,
  },
  text4style: {
    fontSize: 20,
    color: '#716767',
    marginBottom: 7,
  },
});
