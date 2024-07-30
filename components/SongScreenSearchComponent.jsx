import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import {
  uploadAudio,
  transcribeAudio,
  checkTranscriptionStatus,
} from '../data/assemblyaiservice'; // Import the service

const Search = ({ text }) => {
  const [showMic, setShowMic] = useState(true);
  const [search, setSearch] = useState('');
  const [isMicActive, setIsMicActive] = useState(false);
  const [recording, setRecording] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    if (search !== '') {
      setShowMic(false);
    } else {
      setShowMic(true);
    }
  }, [search]);

  const handleMicPress = async () => {
    if (isMicActive) {
      await stopRecording(); // Wait until recording is stopped
    } else {
      startRecording();
    }
    setIsMicActive(!isMicActive);
  };

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  };

  const stopRecording = async () => {
    if (recording) {
      try {
        console.log('Stopping recording..');
        setLoading(true); // Show loading spinner
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);

        // Upload audio to AssemblyAI and get the transcription
        const audioUrl = await uploadAudio(uri);
        const transcriptId = await transcribeAudio(audioUrl);

        // Poll for transcription result
        let transcript = '';
        let status = 'queued'; // Initial status

        while (status !== 'completed' && status !== 'failed') {
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds before polling
          const result = await checkTranscriptionStatus(transcriptId);
          status = result.status; // Check transcription status
          if (status === 'completed') {
            transcript = result.text; // Get transcript text if available
          }
        }

        if (status === 'completed') {
          console.log('Transcript:', transcript);
          setSearch(transcript); // Update the TextInput with the transcript
          Alert.alert('Transcript', transcript);
        } else {
          console.error('Transcription failed');
          Alert.alert('Error', 'Transcription failed');
        }
      } catch (err) {
        console.error('Failed to stop recording:', err);
        Alert.alert('Error', 'Failed to stop recording or transcribe audio');
      } finally {
        setRecording(null); // Clear recording state
        setIsMicActive(false); // Ensure mic icon is reset
        setLoading(false); // Hide loading spinner
      }
    } else {
      console.warn('Recording is not active');
    }
  };

  return (
    <View style={styles.searchBox}>
      <View style={styles.inputContainer}>
        <EvilIcons name="search" size={24} color="#969090" />
        <TextInput
          placeholder={text}
          placeholderTextColor={'#969090'}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity onPress={handleMicPress}>
        {loading ? (
          <ActivityIndicator size="small" color="#0AE78A" /> // Loading spinner
        ) : (
          showMic && (
            <FontAwesome5
              name="microphone"
              size={24}
              color={isMicActive ? 'blue' : '#0AE78A'}
            />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
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
    marginVertical: 10,
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
});
