import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Audio } from 'expo-av';
import { storage } from '../app/Auth_Screens/firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

const Test = () => {
  const [songs, setSongs] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsRef = ref(storage, 'songs/');
        const result = await listAll(songsRef);
        const urls = await Promise.all(
          result.items.map((itemRef) => getDownloadURL(itemRef)),
        );
        setSongs(urls);
      } catch (error) {
        console.error('Error fetching songs: ', error);
      }
    };

    fetchSongs();
  }, []);

  const playSound = async (url) => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync({ uri: url });
    setSound(newSound);
    await newSound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Songs List</Text>
      <FlatList
        data={songs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Text style={styles.songText}>{item.split('/').pop()}</Text>
            <TouchableOpacity
              style={styles.playButton}
              onPress={() => playSound(item)}
            >
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  songText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  playButton: {
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Test;
