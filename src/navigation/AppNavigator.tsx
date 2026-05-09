// src/navigation/AppNavigator.tsx

import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import SplashScreen from '../screens/auth/SplashScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show SplashScreen for 2 seconds, then go to Login (AuthNavigator)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        // 1. App opens -> SplashScreen
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />
      ) : (
        // 2. After splash -> AuthNavigator (initialRouteName="Login")
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
        />
      )}

      {/* 3. Login button will navigate to this screen */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}