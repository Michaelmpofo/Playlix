import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Search = ({ text }) => {
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
      <TouchableOpacity>
        {showMic && (
          <FontAwesome5 name="microphone" size={24} color="#0AE78A" />
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
    paddingVertical: 5,
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
