import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import NewMusic from '../../components/NewMusic';

const NotificationPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = (expanded) => {
    setIsExpanded(expanded);
  };

  return (
    <View style={styles.AccountPageContainer}>
      <View style={styles.infoContainer}>
        <Link href='/HomeScreens/AccountPage' asChild>
          <TouchableOpacity>
            <AntDesign name="left" size={20} color="grey" style={styles.arrow} />
          </TouchableOpacity>
        </Link>
        <Text style={styles.text}>Notifications</Text>
      </View>
      <NewMusic onToggleExpand={handleToggleExpand} />
      <Text style={[styles.text2, isExpanded ? {marginBottom: 500, } : {   marginBottom: 540, }]}>
        Recommendations are generated on your device based on
        your use of Apple Music. Your Library is not shared with Apple
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  AccountPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0,
    marginTop: -35,
  },
  text: {
    fontSize: 17,
    color: '#ffff',
    marginTop: 100,
    marginLeft: 20,
    marginRight: 105,
    marginBottom: 0,
    textAlign: 'center',
  },
  text2: {
    fontSize: 10,
    color: '#ffff',
    marginLeft: 30,
    marginRight: 50,
    marginBottom: 550,
    textAlign: 'left',
  },
  arrow: {
    marginTop: 100,
    marginLeft: 0,
    marginRight: 70,
    marginBottom: 0,
    alignSelf: 'left',
  },
});

export default NotificationPage;
