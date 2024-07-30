import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router' 
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';



const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0AE78A', 
        tabBarStyle: { 
            backgroundColor: '#000',
            borderColor: '#000',
             
        },

        headerStyle: {
            backgroundColor: '#000',
            height: 150,
             
            
        }

        

    
    }}>
      
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        

          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" size={34} color={color} /> ,
        }}
      />
      
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <MaterialIcons name="library-music" size={34} color={color} />,
        }}
      />
 
       <Tabs.Screen
        name="song"
        options={{
          title: 'Song',
          tabBarIcon: ({ color }) =><FontAwesome6 name="headphones" size={24} color={color} />,}}/>

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
           tabBarIcon: ({ color }) => <MaterialIcons name="search" size={34} color={color} />,
        }}
      />
     
    </Tabs>
    


  )
  

    
}

export default _layout