import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import searchCardList from "../data/searchtabdata";
import SearchCard from "./SearchCard";

const SearchList = () => {
  return (
    <ScrollView>
      {/* <FlatList data={searchCardList} renderItem={({item, index})=>(
        <SearchCard key={index} img={item.imgUrl} label={item.label} text={item.text}/>
        )}
        contentContainerStyle={{display:"grid"}}
        horizontal
        /> */}
      <Text style={styles.headingText}>Browse Categories</Text>
      <View
        style={{
          display: "flex",
          width: "auto",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {searchCardList.map((item, index) => (
          <SearchCard img={item.imgUrl} label={item.label} text={item.text} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchList;
const styles = StyleSheet.create({
  searchCardListContainer: {
    marginLeft: 15,
    position: "relative",
    height: 290,
    width: 230,
  },
  headingText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    marginLeft:15
  },
});
