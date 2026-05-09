// src/screens/SplashScreen.tsx

import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const COLORS = {
  primary: '#0D631B',
  primaryContainer: '#2E7D32',
  secondary: '#FF8F05',
  background: '#F7F9F2',
  surface: '#FFFFFF',
  onSurface: '#1A1C1E',
  onSurfaceVariant: '#44474E',
  white: '#FFFFFF',
};

type Props = {
  navigation: any;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Change "Login" to your actual route name if different
      navigation.replace('Login');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      {/* Background Decorative Circles */}
      <View style={styles.topCircle} />
      <View style={styles.bottomCircle} />

      {/* Main Content */}
      <View style={styles.container}>
        {/* Logo Circle */}
        <View style={styles.logoOuter}>
          <View style={styles.logoInner}>
            <Ionicons
              name="leaf"
              size={56}
              color={COLORS.primary}
            />
          </View>
        </View>

        {/* App Name */}
        <Text style={styles.title}>KISAN SAHAYAK</Text>

        {/* Tagline */}
        <Text style={styles.subtitle}>
          Empowering the roots of our nation.
        </Text>

        {/* Feature Pills */}
        <View style={styles.featuresContainer}>
          <View style={styles.featurePill}>
            <Text style={styles.featureText}>🌦 Weather</Text>
          </View>

          <View style={styles.featurePill}>
            <Text style={styles.featureText}>📈 Mandi Prices</Text>
          </View>

          <View style={styles.featurePill}>
            <Text style={styles.featureText}>🌾 Crop Care</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Connecting Bharat&apos;s Farmers
        </Text>

        <View style={styles.loadingDots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  topCircle: {
    position: 'absolute',
    top: -100,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(13, 99, 27, 0.06)',
  },

  bottomCircle: {
    position: 'absolute',
    bottom: -80,
    left: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255, 143, 5, 0.05)',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  logoOuter: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(13, 99, 27, 0.08)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.06,
    shadowRadius: 24,
    elevation: 6,
    marginBottom: 32,
  },

  logoInner: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(13, 99, 27, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(13, 99, 27, 0.1)',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 36,
    paddingHorizontal: 16,
  },

  featuresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },

  featurePill: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(13, 99, 27, 0.08)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },

  featureText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.onSurface,
  },

  footer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 36,
  },

  footerText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    opacity: 0.7,
    marginBottom: 16,
  },

  loadingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(13, 99, 27, 0.15)',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 24,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
  },
});