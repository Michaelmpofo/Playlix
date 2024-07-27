import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const Camerabutton = () => {
  const handleCameraPress = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };
    
    launchCamera(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Camera', 'User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Camera Error', response.errorMessage);
      } else {
        Alert.alert('Camera', 'Photo taken successfully');
        console.log(response.assets[0].uri); // Handle the photo URI as needed
      }
    });
  };

  return (
    <TouchableOpacity onPress={handleCameraPress}>
      <View style={styles.CamerabuttonContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.mainText}> Use Camera </Text>
        </View>
      </View>
    </TouchableOpacity>
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
