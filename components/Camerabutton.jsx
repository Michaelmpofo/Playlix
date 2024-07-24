import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { Link } from 'expo-router';

const Camerabutton = () => {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePress = () => {
    if (!hasPermission) {
      Alert.alert('Camera Permission', 'Camera access is required to use this feature.');
    }
  };

  return (
    <Link href={hasPermission ? '/HomeScreens/CameraScreen' : '#'} asChild>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.CamerabuttonContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.mainText}> Use Camera </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default Camerabutton;

const styles = StyleSheet.create({
  CamerabuttonContainer: {
    position: 'absolute',
    backgroundColor: '#0AE78A',
    bottom: 10,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: -200,
    padding: 14,
    borderColor: '#0AE78A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 49,
    width: 330,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  mainText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
