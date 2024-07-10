import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SearchScreenComponent = () => {
  const [showMic, setShowMic] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search !== '') {
      setShowMic(false);
    } else {
      setShowMic(true);
    }
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <View style={styles.inputContainer}>
          <EvilIcons name="search" size={24} color="#969090" />
          <TextInput
            placeholder="Your Library"
            placeholderTextColor={'#969090'}
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity>
          {showMic && <Fontisto name="shazam" size={24} color="#0AE78A" />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
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

export default SearchScreenComponent;
