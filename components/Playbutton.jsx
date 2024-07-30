import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Playbutton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePress = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.playButtonBox}>
      <TouchableOpacity style={styles.opacityStyle} onPress={handlePress}>
        <FontAwesome5
          name={isPlaying ? 'pause' : 'play'}
          size={24}
          color="#0AE78A"
        />
        <Text style={styles.textStyle}>{isPlaying ? ' Pause' : ' Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Playbutton;

const styles = StyleSheet.create({
  playButtonBox: {
    width: 164,
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderColor: '#242323',
    borderWidth: 1,
    borderRadius: 8,
    color: '#fff',
    backgroundColor: '#242323',
    flexDirection: 'row',
    alignItems: 'center',
  },
  opacityStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    marginLeft: 5,
    fontSize: 20,
    color: '#0AE78A',
  },
});
