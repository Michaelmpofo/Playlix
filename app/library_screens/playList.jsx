import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import LeftHeader from '../../components/LeftHeader';
import { Link } from 'expo-router';
import RightHeader from '../../components/RightHeader';

const PlayList = () => {
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
      <Text style={styles.text1style}>Playlists</Text>
      <SongScreenSearchComponent
        text={'  Find in Playlist'}
        style={styles.searchStyle}
      />
      <Link href="/library_screens/newplaylist" asChild>
        <TouchableOpacity>
          <View style={styles.playlistStyle}>
            <View style={styles.button1Style}>
              <MaterialIcons name="add" size={67} color="#0AE78A" />
              <Text style={styles.text2style}> New PlayList.......</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      <Link href="/library_screens/favoritesongs" asChild>
        <TouchableOpacity>
          <View style={styles.playlistStyle}>
            <View style={styles.button2Style}>
              <MaterialCommunityIcons
                name="star-box"
                size={67}
                color="#0AE78A"
              />
              <Text style={styles.text3style}> Favorite songs</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default PlayList;

const styles = StyleSheet.create({
  playListContainer: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  text1style: {
    marginBottom: 8,
    fontSize: 30,
    color: '#FFFFFFFF',
  },
  text2style: {
    fontSize: 17,
    color: '#0AE78A',
    marginLeft: 10,
  },
  text3style: {
    fontSize: 17,
    color: '#FFFFFFFF',
    marginLeft: 10,
  },
  playlistStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  button1Style: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button2Style: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchStyle: {
    marginBottom: 20,
  },
});
