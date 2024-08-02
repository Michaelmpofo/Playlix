import React, { createContext, useState, useContext, useEffect } from 'react';
import { Audio } from 'expo-av';
import SongData from '../data/songdata';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(SongData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playPause = async () => {
    if (sound) {
      setImmediate(async () => {
        try {
          if (isPlaying) {
            await sound.pauseAsync();
          } else {
            await sound.playAsync();
          }
          setIsPlaying(!isPlaying);
        } catch (error) {
          console.error('Error in playPause:', error);
        }
      });
    }
  };

  const playNextSong = () => {
    setImmediate(() => {
      const currentIndex = SongData.findIndex(
        (song) => song.id === currentSong.id,
      );
      const nextIndex = (currentIndex + 1) % SongData.length;
      setCurrentSong(SongData[nextIndex]);
    });
  };

  const loadAudio = async () => {
    setImmediate(async () => {
      try {
        if (sound) {
          await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.link },
          { shouldPlay: false },
        );
        setSound(newSound);
      } catch (error) {
        console.error('Error in loadAudio:', error);
      }
    });
  };

  useEffect(() => {
    loadAudio();
  }, [currentSong]);

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        playPause,
        playNextSong,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => useContext(MusicPlayerContext);
