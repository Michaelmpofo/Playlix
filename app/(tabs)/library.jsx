import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import LibraryScreenHeaderLeft from '../../components/LibraryScreenHeaderLeft';
import LibraryButtons from '../../components/LibraryButtons';
import LibraryRecentlyAdded from '../../components/LibraryRecentlyAdded';
import LibraryList from '../../components/LibraryList';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import EditHeaderRight from '../../components/EditHeaderRight';
import NowPlayingBar from '../../components/NowPlayingBar';


const library = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack.Screen
        options={{
          headerRight: () => <EditHeaderRight />,
          headerTitle: 'Library',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            color: '#0AE78A',
            fontSize: 35,
          },
          headerShadowVisible: false,
        }}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <LibraryButtons />
        <LibraryRecentlyAdded />
        <LibraryList />
      </ScrollView>
      <NowPlayingBar />
    </GestureHandlerRootView>
  );
};

export default library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
});
