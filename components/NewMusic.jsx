import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';

const NewMusic = ({ onToggleExpand }) => {
  const on = require('./../assets/images/homeScreenimages/on.png');
  const off = require('./../assets/images/homeScreenimages/off.png');
  
  const [isToggled, setIsToggled] = useState(false);
  const [isSecondToggleOn, setIsSecondToggleOn] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggleExpand(!isToggled); // Notify parent of the toggle change
  };

  const handleSecondToggle = () => {
    setIsSecondToggleOn(!isSecondToggleOn);
  };

  const getContainerStyle = () => {
    if (isToggled && isSecondToggleOn) {
      return styles.greenBackground;
    } else if (!isSecondToggleOn) {
      return styles.greyBackground;
    } else if (!isToggled) {
      return styles.greenBackground;
    }
    return null;
  };

  const getTextStyle = () => {
    if (isToggled && isSecondToggleOn) {
      return styles.blackText;
    } else if (!isSecondToggleOn) {
      return styles.whiteText;
    } else if (!isToggled) {
      return styles.blackText;
    }
    return null;
  };

  return (
    <View style={[styles.NewMusicContainer, getContainerStyle(), isToggled ? styles.NewMusicExpanded : null]}>
      <View style={styles.gradientBackground}>
        <View style={styles.infoContainer}>
          <Text style={[styles.mainText, getTextStyle()]}>New Music</Text>
          <Text style={[styles.Text, getTextStyle()]}>
            Artists you like release new music and videos
          </Text>
          {isToggled && <View style={styles.borderLine}></View>}
          {isToggled && (
            <>
              <Text style={[styles.showInLibraryText, getTextStyle()]}>Show in Library</Text>
              <TouchableOpacity onPress={handleSecondToggle} style={styles.secondToggleContainer}>
                <Image source={isSecondToggleOn ? on : off} />
              </TouchableOpacity>
            </>
          )}
        </View>
        <TouchableOpacity onPress={handleToggle}>
          <Image source={isToggled ? on : off} style={styles.toggleImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewMusic;

const styles = StyleSheet.create({
  NewMusicContainer: {
    position: 'absolute',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    padding: 11,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    height: 75,
    width: 330,
    top: 150,
  },
  greyBackground: {
    backgroundColor: '#2C2C2E',
  },
  greenBackground: {
    backgroundColor: '#0AE78A',
  },
  NewMusicExpanded: {
    height: 115,
  },
  toggleImage: {
    position: 'absolute',
    top: -35,
    right: 0,
    borderRadius: 10,
    marginBottom: 0,
    left: 240,
  },
  secondToggleContainer: {
    position: 'absolute',
    top: 18,
    right: 0,
    borderRadius: 10,
    marginBottom: 0,
    left: 240,
    marginTop: 40, // Adjust this to position the second toggle appropriately
  },
  gradientBackground: {
    position: 'absolute',
    marginLeft: 0,
    marginRight: 0,
    padding: 15,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
  showInLibraryText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  borderLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 0,
    width: '100%',
  },
});
