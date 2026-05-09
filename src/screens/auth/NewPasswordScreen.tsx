// src/screens/auth/NewPasswordScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  primary: '#0D631B',
  primaryContainer: '#2E7D32',
  secondary: '#FF8F05',
  background: '#F7F9F2',
  surface: '#FFFFFF',
  surfaceContainerLow: '#F1F5E9',
  onSurface: '#1A1C18',
  onSurfaceVariant: '#44493F',
  outline: '#74796D',
  outlineVariant: '#C4C8BA',
};

export default function NewPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleUpdatePassword = () => {
    console.log('Update Password');
    // Add your API call or validation here
    navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialCommunityIcons
            name="sprout"
            size={24}
            color={COLORS.primary}
          />
          <Text style={styles.headerTitle}>Kisan Sahayak</Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons
            name="close"
            size={24}
            color={COLORS.onSurfaceVariant}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Card */}
        <View style={styles.card}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Set New Password</Text>
            <Text style={styles.subtitle}>
              Secure your account with a strong, unique password for Kisan
              Sahayak.
            </Text>
          </View>

          {/* New Password */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>NEW PASSWORD</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.outline}
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
              />

              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
              >
                <MaterialIcons
                  name={showNewPassword ? 'visibility-off' : 'visibility'}
                  size={22}
                  color={COLORS.outline}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirm Password */}
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>CONFIRM NEW PASSWORD</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor={COLORS.outline}
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />

              <TouchableOpacity
                onPress={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                <MaterialIcons
                  name={showConfirmPassword ? 'visibility-off' : 'visibility'}
                  size={22}
                  color={COLORS.outline}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Password Requirements */}
          <View style={styles.infoBox}>
            <MaterialIcons
              name="info"
              size={20}
              color={COLORS.primary}
              style={styles.infoIcon}
            />
            <Text style={styles.infoText}>
              Must be at least 8 characters long and include a mix of numbers
              and letters.
            </Text>
          </View>

          {/* Update Button */}
          <TouchableOpacity
            style={styles.updateButton}
            onPress={handleUpdatePassword}
            activeOpacity={0.9}
          >
            <Text style={styles.updateButtonText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Images Placeholder */}
        <View style={styles.imageRow}>
          <View style={styles.imagePlaceholder}>
            <MaterialCommunityIcons
              name="sprout"
              size={32}
              color={COLORS.primary}
            />
          </View>

          <View style={styles.imagePlaceholder}>
            <MaterialCommunityIcons
              name="tractor"
              size={32}
              color={COLORS.primary}
            />
          </View>
        </View>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          KISAN SAHAYAK SECURITY PROTOCOL V4.2
        </Text>
      </ScrollView>

      {/* Bottom Navigation Mock */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <MaterialIcons
            name="home"
            size={24}
            color={COLORS.onSurfaceVariant}
          />
          <Text style={styles.navText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialIcons
            name="document-scanner"
            size={24}
            color={COLORS.onSurfaceVariant}
          />
          <Text style={styles.navText}>Check</Text>
        </View>

        <View style={styles.navItem}>
          <MaterialCommunityIcons
            name="weather-cloudy"
            size={24}
            color={COLORS.onSurfaceVariant}
          />
          <Text style={styles.navText}>Weather</Text>
        </View>

        <View style={styles.activeNavItem}>
          <MaterialIcons name="lock" size={24} color={COLORS.primary} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.outlineVariant,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
    letterSpacing: -0.3,
  },

  scrollContent: {
    padding: 16,
    paddingTop: 24,
    paddingBottom: 120,
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(196, 200, 186, 0.4)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },

  titleContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
  },

  fieldContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: COLORS.onSurfaceVariant,
    marginBottom: 8,
  },

  inputContainer: {
    height: 48,
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(196, 200, 186, 0.5)',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.onSurface,
  },

  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(241, 245, 233, 0.7)',
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(196, 200, 186, 0.2)',
  },

  infoIcon: {
    marginRight: 8,
    marginTop: 1,
  },

  infoText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.onSurfaceVariant,
  },

  updateButton: {
    height: 56,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },

  updateButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primary,
  },

  imageRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 40,
  },

  imagePlaceholder: {
    flex: 1,
    height: 128,
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(196, 200, 186, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerText: {
    marginTop: 24,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    color: 'rgba(68, 73, 63, 0.4)',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: 'rgba(196, 200, 186, 0.3)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  navItem: {
    alignItems: 'center',
    opacity: 0.4,
  },

  navText: {
    fontSize: 10,
    fontWeight: '700',
    marginTop: 2,
    color: COLORS.onSurfaceVariant,
  },

  activeNavItem: {
    backgroundColor: 'rgba(46, 125, 50, 0.1)',
    padding: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});