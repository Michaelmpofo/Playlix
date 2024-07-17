import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const IndividualPlanBar = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <View style={styles.IndividualPlanBarContainer}>
        {isPressed ? (
          <LinearGradient colors={['#EB608794', '#C862A394']} style={styles.gradientBackground}>
            <View style={styles.infoContainer}>
              <Text style={styles.mainText}>Individual</Text>
              <Text style={styles.Text}>US$3.29/month</Text>
            </View>
            <Ionicons name="checkmark-circle" size={30} color="white" style={styles.tickImage} />
          </LinearGradient>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.mainText}>Individual</Text>
            <Text style={styles.Text}>US$3.29/month</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default IndividualPlanBar;

const styles = StyleSheet.create({
  IndividualPlanBarContainer: {
    position: 'absolute',
    backgroundColor: '#2C2C2E',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: 550,
    padding: 15,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 75,
    width: 330,
  },
  tickImage: {
    
    position: 'absolute',
    top: 23,
    right: 20,
    bottom:10,
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
    fontSize: 23,
    fontWeight: 'bold',
    marginRight: 0,
    color: 'white',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
});
