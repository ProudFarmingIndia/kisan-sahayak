// src/navigation/AuthNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignupScreen';
import ResetLinkScreen from '../screens/auth/ResetLinkScreen';
import OtpVerificationScreen from '../screens/auth/OTPScreen';
import NewPasswordScreen from '../screens/auth/NewPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      // After SplashScreen in AppNavigator, open Login screen first
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      {/* Login */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      {/* Sign Up */}
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
      />

      {/* Forgot Password / Send Reset Link */}
      <Stack.Screen
        name="ResetLink"
        component={ResetLinkScreen}
      />

      {/* Verify OTP */}
      <Stack.Screen
        name="VerifyOtp"
        component={OtpVerificationScreen}
      />

      {/* Set New Password */}
      <Stack.Screen
        name="NewPassword"
        component={NewPasswordScreen}
      />
    </Stack.Navigator>
  );
}