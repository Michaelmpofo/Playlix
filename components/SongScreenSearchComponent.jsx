import { StyleSheet, SafeAreaView, TextInput, Image, View,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Search = ({text}) => {
  const [showMic, setShowMic] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    if(search !== ""){
      setShowMic(false)
    }else{
      setShowMic(true)
    }
  },[search])

  return (
    <View style={styles.searchBox}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        
        <EvilIcons name="search" size={24} color="#969090" />

        <TextInput
          placeholder={text}
          placeholderTextColor={"#969090"}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          value={search}
          onChangeText={(text) => {
            setSearch(text);
          }}
          height="100%"
          style={{ color: "#fff" }}
        />
        
      </View>
        <TouchableOpacity>
        {showMic && <FontAwesome5 name="microphone" size={24} color="#0AE78A" />}
        </TouchableOpacity>
   
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBox: {
    width: 330,

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#242323",
    borderWidth: 1,
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#242323",
    marginHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchIcon: {
    width: 34,
    height: 34,
    marginBottom: 50,
    marginRight: 20,
  },
  recordIconStyle: {
    marginLeft: 170,
    alignItems: "center",
  },
});
