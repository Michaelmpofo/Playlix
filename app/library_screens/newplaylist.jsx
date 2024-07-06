import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import LeftHeader from '../../components/LeftHeader';
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
        <View>
          <Link href="/library_screens/playList" asChild>
            <TouchableOpacity>
              <Text style={styles.text1style}>Cancel</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text2style}>New playlist</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.text3style}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View>
          <Image
            source={require('../../assets/images/CameraCard.jpeg')}
            style={{
              width: 200,
              height: 200,
              marginLeft: 58,
              marginRight: 0,
              flexDirection: 'column',
              marginTop: 30,
            }}
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
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text4ContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#3A3636',
    justifyContent: 'center',
    flexDirection: 'row',
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
  text4style: {
    fontSize: 20,
    color: '#716767',
    marginTop: 70,
    marginBottom: 7,
  },
});
