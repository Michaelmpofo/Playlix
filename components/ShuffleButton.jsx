import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Foundation } from '@expo/vector-icons';

const ShuffleButton = ({ playlist, setPlaylist }) => {
  const shufflePlaylist = () => {
    const shuffled = [...playlist].sort(() => Math.random() - 0.5);
    setPlaylist(shuffled);
  };

  return (
    <View style={styles.shuffleButtonBox}>
      <TouchableOpacity
        style={styles.opacityButtonStyle}
        onPress={shufflePlaylist}
      >
        <Foundation name="shuffle" size={24} color="#0AE78A" />
        <Text style={styles.shuffleTextStyle}>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch( 'https://raw.githubusercontent.com/thelocalgodd/storage/main/soundwave/songs/God%20s%20Plan%20-%20Drake%20(128).mp3',); // Replace with your API endpoint
        const data = await response.json();
        setPlaylist(data.songs); // Assuming the API returns an object with a "songs" array
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <View style={styles.container}>
      <ShuffleButton playlist={playlist} setPlaylist={setPlaylist} />
      {playlist.map((song, index) => (
        <Text key={index} style={styles.songText}>
          {song}
        </Text>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  shuffleButtonBox: {
    width: 165,
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: '#242323',
    borderWidth: 1,
    borderRadius: 8,
    color: '#000',
    backgroundColor: '#242323',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  opacityButtonStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  shuffleTextStyle: {
    marginLeft: 5,
    fontSize: 20,
    color: '#0AE78A',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  songText: {
    fontSize: 18,
    margin: 5,
  },
});
