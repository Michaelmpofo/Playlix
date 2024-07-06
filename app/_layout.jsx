import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const onlayout = () => {
  // const [loaded] = useFonts({
  //   MontserratItalic:require("../assets/fonts/Montserrat-Italic-VariableFont_wght.tff"),
  //   Montserrat:require("../assets/fonts/Montserrat-VariableFont_wght.tff"),
  // })

  // useEffect(()=>{
  //   if(loaded){
  //     SplashScreen.hideAsync()
  //   }
  // },[loaded])

  // if(!loaded){
  //   return null;
  // }

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default onlayout;
