import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import LeftHeader from '../../components/LeftHeader';
import RightHeader from '../../components/RightHeader';
import SongScreenSearchComponent from '../../components/SongScreenSearchComponent';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { Link } from 'expo-router';




const composer = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.playListContainer}>
        <Stack.Screen
          options={{
            headerTitle: '',
            headerLeft: () => (
              <LeftHeader text="library" navigation={'(tabs)/library'} />
            ),
            headerRight: () => <RightHeader />,
            headerStyle: { backgroundColor: '#000000' },
            headerShown: true,
          }}
        />
        <ScrollView>
          <Text style={styles.text1style}>Composers</Text>
          <SongScreenSearchComponent text={'   Find in Composers'} />

          <Link href="/library_screens/composerprofile" asChild>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.text2style}>Stonebwoy</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.text2style}></Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default composer;
const styles = StyleSheet.create({
  playListContainer: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text1style: {
    marginBottom: 8,
    fontSize: 30,
    color: '#FFFFFFFF',
    marginLeft: 20,
  },
  text2style: {
    fontSize: 20,
    color: '#FFFFFFFF',
    marginBottom: 5,
    marginLeft: 10,
  },
  buttonStyle: {
    marginTop: 20,
    marginLeft: 20,
    borderBottomColor: '#4B4848',
    borderBottomWidth: 1,
    marginRight: 20,
  },
});
