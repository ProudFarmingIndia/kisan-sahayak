import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import FasalCheckScreen from '../screens/fasal/FasalCheckScreen';
import WeatherScreen from '../screens/mausam/WeatherScreen';
import QuestionsScreen from '../screens/saval/QuestionsScreen';
import YojnaScreen from '../screens/yojna/YojnaScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Fasal Check"
        component={FasalCheckScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="document-scanner"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Mausam"
        component={WeatherScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="cloud" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Saval"
        component={QuestionsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="forum" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Yojna"
        component={YojnaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="event-note"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}