import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const SearchScreenComponent = () => {
  const [showMic, setShowMic] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);

  const songs = [
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
    { id: 3, title: 'Song 3', artist: 'Artist 3' },
    // Add more songs here
  ];

  useEffect(() => {
    if (search !== '') {
      setShowMic(false);
      const filtered = songs.filter(song =>
        song.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredSongs(filtered);
    } else {
      setShowMic(true);
      setFilteredSongs([]);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.inputContainer}>
          <EvilIcons name="search" size={24} color="#969090" />
          <TextInput
            placeholder="Your Library"
            placeholderTextColor={'#969090'}
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.textInput}
          />
        </View>
        <Link href="/Shazam_Screen" asChild>
          <TouchableOpacity>
            {showMic && <Fontisto name="shazam" size={24} color="#0AE78A" />}
          </TouchableOpacity>
        </Link>
      </View>
      <FlatList
        data={filteredSongs}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBox: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#242323',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#242323',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    color: '#fff',
    flex: 1,
    marginLeft: 5,
  },
  songItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
  },
  songArtist: {
    color: '#969090',
    fontSize: 14,
  },
});

export default SearchScreenComponent;
