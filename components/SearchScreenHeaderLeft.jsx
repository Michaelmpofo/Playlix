import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SearchScreenHeaderLeft = () => {
  return (
    <View style ={styles.searchScreenHeaderContainer}>
      <Text style={styles.headingText}>Browse Categories</Text>
    </View>
  )
}

export default SearchScreenHeaderLeft

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        color: '#fff',
        marginTop:10,
        marginBottom:20,

    },
    searchScreenHeaderContainer: {
        marginTop: 30,
        marginLeft: 9
        }

})