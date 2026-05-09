import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }: any) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    console.log('Create Account:', { fullName, email, password });
    // navigation?.navigate('Login');
  };

  const handleGoogleSignUp = () => {
    console.log('Sign Up with Google');
  };

  const handlePhoneSignUp = () => {
    console.log('Sign Up with Phone');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="menu" size={28} color="#0D631B" />
          <Text style={styles.headerTitle}>KISAN SAHAYAK</Text>
        </View>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Sign Up Card */}
          <View style={styles.card}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>Join our Community</Text>
              <Text style={styles.subtitle}>
                Empowering the roots of agriculture.
              </Text>
            </View>

            {/* Full Name */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>FULL NAME</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Kishore Kumar"
                  placeholderTextColor="#8A8F85"
                  value={fullName}
                  onChangeText={setFullName}
                />
                <MaterialIcons
                  name="person"
                  size={20}
                  color="#0D631B"
                  style={styles.inputIcon}
                />
              </View>
            </View>

            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>EMAIL ADDRESS</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="kumar@example.com"
                  placeholderTextColor="#8A8F85"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
                <MaterialIcons
                  name="mail"
                  size={20}
                  color="#0D631B"
                  style={styles.inputIcon}
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>PASSWORD</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor="#8A8F85"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <MaterialIcons
                  name="lock"
                  size={20}
                  color="#0D631B"
                  style={styles.inputIcon}
                />
              </View>
            </View>

            {/* Create Account Button */}
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleCreateAccount}
              activeOpacity={0.9}
            >
              <Text style={styles.primaryButtonText}>Create Account</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google Sign Up */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleGoogleSignUp}
              activeOpacity={0.9}
            >
              <Image
                source={{
                  uri: 'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',
                }}
                style={styles.googleIcon}
              />
              <Text style={styles.socialButtonText}>Sign Up with Google</Text>
            </TouchableOpacity>

            {/* Phone Sign Up */}
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handlePhoneSignUp}
              activeOpacity={0.9}
            >
              <MaterialIcons name="call" size={20} color="#0D631B" />
              <Text style={styles.socialButtonText}>Sign Up with Phone</Text>
            </TouchableOpacity>

            {/* Login Link */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation?.navigate?.('Login')}
              >
                <Text style={styles.footerLink}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Banner Image */}
          <View style={styles.bannerContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
              }}
              style={styles.bannerImage}
            />
            <View style={styles.bannerFooter}>
              <Text style={styles.bannerText}>
                CONNECTING BHARAT'S FARMERS
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const COLORS = {
  primary: '#0D631B',
  primaryContainer: '#2E7D32',
  background: '#F7F9F2',
  white: '#FFFFFF',
  surfaceLow: '#F7F9F2',
  outline: '#D7DDD0',
  text: '#1A1C1E',
  textSecondary: '#5E665A',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 64,
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: '#E6EAE0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.5,
  },

  languageButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 999,
  },

  languageButtonText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 13,
  },

  scrollContent: {
    padding: 16,
    paddingTop: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(13,99,27,0.08)',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  titleSection: {
    marginBottom: 32,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    textAlign: 'center',
    fontWeight: '500',
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.textSecondary,
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: COLORS.surfaceLow,
    borderWidth: 1,
    borderColor: COLORS.outline,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 48,
    fontSize: 16,
    color: COLORS.text,
  },

  inputIcon: {
    position: 'absolute',
    right: 14,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  primaryButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '800',
  },

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.outline,
  },

  dividerText: {
    marginHorizontal: 16,
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.textSecondary,
    letterSpacing: 1.5,
  },

  socialButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.outline,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  socialButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },

  googleIcon: {
    width: 20,
    height: 20,
  },

  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEF2E6',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  footerText: {
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  footerLink: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
  },

  bannerContainer: {
    width: '100%',
    maxWidth: 420,
    marginTop: 24,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E6EAE0',
  },

  bannerImage: {
    width: '100%',
    height: 130,
  },

  bannerFooter: {
    paddingVertical: 8,
    alignItems: 'center',
  },

  bannerText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#8A8F85',
  },
});