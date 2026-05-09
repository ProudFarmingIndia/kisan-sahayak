import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Login -> Open Bottom Tabs (Home is the first tab)
  const handleLogin = () => {
    navigation.getParent()?.replace('MainTabs');
  };

  // Sign Up -> Open SignUp screen
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  // Forgot Password -> Open ResetLink screen
  const goToResetLink = () => {
    navigation.navigate('ResetLink');
  };

  const handleGoogleLogin = () => {
    console.log('Google Login');
  };

  const handlePhoneLogin = () => {
    console.log('Phone Login');
  };

  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1F4E8" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            {/* Logo Section */}
            <View style={styles.header}>
              <Text style={styles.logoIcon}>🌾</Text>

              <Text style={styles.title}>Kisan Sahayak</Text>

              <Text style={styles.subtitle}>
                Empowering the roots of our nation.
              </Text>
            </View>

            {/* Email Field */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>✉️</Text>

                <TextInput
                  style={styles.input}
                  placeholder="farmer@example.com"
                  placeholderTextColor="#73796E"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* Password Field */}
            <View style={styles.inputGroup}>
              <View style={styles.passwordHeader}>
                <Text style={styles.label}>Password</Text>

                <TouchableOpacity onPress={goToResetLink}>
  <Text style={styles.forgotText}>Forgot?</Text>
</TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>🔒</Text>

                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#73796E"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.9}
            >
              <Text style={styles.loginButtonText}>Login</Text>
              <Text style={styles.loginButtonArrow}>→</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Login */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleLogin}
              activeOpacity={0.9}
            >
              <Image
                source={{
                  uri: 'https://www.google.com/favicon.ico',
                }}
                style={styles.googleIcon}
              />
              <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>

            {/* Phone Login */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handlePhoneLogin}
              activeOpacity={0.9}
            >
              <Text style={styles.phoneIcon}>📱</Text>
              <Text style={styles.socialButtonText}>Login with Phone</Text>
            </TouchableOpacity>

            {/* Sign Up */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                New to the community?
              </Text>

              <TouchableOpacity onPress={goToSignUp}>
  <Text style={styles.signUpText}>Sign Up</Text>
</TouchableOpacity>
            </View>
          </View>

          {/* Bottom Illustration */}
          <View style={styles.illustrationCard}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8eTFiD3hz_pFcIUPsr2rsN-BY3Jiio_bFzw-Mc7cMBfc3rNJ5JtiA-N0xBQJQ9bbgWKmJv-6Mb5Zi2US5xDFT7cMXOYQFa1IOCIWkgzbXD0f2g5TtidBzc47yzM5NIuhXJQlv8oHNlMYw1gYHa-xRMXML105DCbZ_UYv8QaDHGyMiV0IIXTf5nclxrmPN-jP_ianoF9yZPtIH0rv96oq6Gj59Eqyf7BMlYpG0p5tgZCA-y1v69wAoj0udkcYUAfPpcc6iVQuUbCI',
              }}
              style={styles.illustrationImage}
            />

            <View style={styles.overlay} />

            <View style={styles.overlayContent}>
              <Text style={styles.overlayTitle}>
                Harvesting{'\n'}Digital Potential.
              </Text>

              <Text style={styles.overlaySubtitle}>
                Join thousands of farmers using Kisan Sahayak to monitor
                weather, track mandi prices, and optimize crop yields.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F4E8',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
  },

  logoIcon: {
    fontSize: 56,
    marginBottom: 8,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1A1C18',
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#43493E',
    textAlign: 'center',
  },

  inputGroup: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#43493E',
    marginBottom: 8,
  },

  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgotText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0D631B',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9F2',
    borderWidth: 1,
    borderColor: '#C3C8BB',
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 56,
  },

  inputIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#1A1C18',
  },

  loginButton: {
    marginTop: 12,
    backgroundColor: '#0D631B',
    borderRadius: 999,
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  loginButtonArrow: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 8,
    fontWeight: '700',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#C3C8BB',
  },

  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: '700',
    color: '#73796E',
    letterSpacing: 1,
  },

  socialButton: {
    height: 54,
    borderWidth: 1,
    borderColor: '#C3C8BB',
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  phoneIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1C18',
  },

  footer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  footerText: {
    fontSize: 15,
    color: '#43493E',
  },

  signUpText: {
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '800',
    color: '#0D631B',
  },

  illustrationCard: {
    marginTop: 24,
    height: 280,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },

  illustrationImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(13, 99, 27, 0.55)',
  },

  overlayContent: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 24,
  },

  overlayTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 40,
    marginBottom: 10,
  },

  overlaySubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: 'rgba(255,255,255,0.92)',
  },
});