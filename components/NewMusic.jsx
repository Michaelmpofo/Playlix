import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';


const NewMusic = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <View >
        {isPressed ? (
            <View style={styles.NewMusic2Container}>
          <View style={styles.gradientBackground}>
            <View style={styles.infoContainer}>
              <Text style={styles.mainText}>New Music</Text>
              <Text style={styles.Text}>Artists you like release new music 
              and videos</Text>
              <Text style={styles.Text2}>Show in Library</Text>
            </View>
            <Fontisto name="toggle-on" size={50} color="green" style={styles.tickImage} />
            <Fontisto name="toggle-on" size={50} color="green" style={styles.tick2Image} />
          </View>
          </View>
        ) : (<View style={styles.NewMusicContainer}>
            <View style={styles.gradientBackground}>
          <View style={styles.infoContainer}>
            <Text style={styles.mainText}>New Music</Text>
            <Text style={styles.Text}>Artists you like release new music 
            and videos</Text>
           
          </View>
          <Fontisto name="toggle-off" size={50} color="#B3A9A9" style={styles.tickImage}  />
          </View>
          </View>
        )}
        
      </View>
    </TouchableOpacity>
  );
};

export default NewMusic;

const styles = StyleSheet.create({
  NewMusicContainer: {
    position: 'absolute',
    backgroundColor: '#0AE78A',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    
    marginBottom: 0,
    padding: 11,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 10,
    height: 75,
    width: 330,
  },
  NewMusic2Container: {
    position: 'absolute',
    backgroundColor: '#0AE78A',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: 0,
    padding: 11,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 10,
    height: 105,
    width: 330,
     
  },
  tickImage: {
    position: 'absolute',
    top: 5,
    right: 20,
    borderRadius: 10,
    bottom:10,
   
   
  },
  tick2Image: {
    position: 'absolute',
    top: 54,
    right: 20,
    borderRadius: 10,
    bottom:-20,
   
   
  },
  gradientBackground: {
    position: 'absolute',
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 550,
    padding: 15,
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 75,
    width: 330,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontSize: 20,
    marginRight: 0,
    color: 'black',
  },
  Text: {
    fontSize: 12,
    color: 'black',
    marginRight: 100,
  },
  Text2: {
    fontSize: 17,
    color: 'black',
    marginRight: 100,
    marginTop:2,
  },
});
