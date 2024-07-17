import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const UniversityPlan = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
      <View style={styles.UniversityPlanContainer}>
        {isPressed ? (
          <LinearGradient colors={['#8C8CFD', '#5ED8FF']} style={styles.gradientBackground}>
            <View style={styles.infoContainer}>
              <Text style={styles.mainText}>University Student</Text>
              <Text style={styles.Text}>US$1.99/month</Text>
              <Text style={styles.Text}>This plan includes access to Apple TV+</Text>
            </View>
            <Ionicons name="checkmark-circle" size={30} color="white" style={styles.tickImage} />
          </LinearGradient>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.mainText}>University Student</Text>
            <Text style={styles.Text}>US$1.99/month</Text>
            <Text style={styles.Text}>This plan includes access to Apple TV+</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default UniversityPlan;

const styles = StyleSheet.create({
  UniversityPlanContainer: {
    position: 'absolute',
    backgroundColor: '#2C2C2E',
    bottom: 0,
    marginLeft: -165,
    marginRight: 0,
    marginBottom: 350,
    padding: 15,
    borderColor: '#2C2C2E',
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 85,
    width: 330,
  },
  gradientBackground: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    padding: 15,
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    borderRadius: 17,
    height: 85,
    width: 330,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
  tickImage: {
    position: 'absolute',
    top: 23,
    right: 20,
  },
});
