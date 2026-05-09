import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const COLORS = {
  primary: '#0D631B',
  primaryDark: '#0A4D15',
  primaryContainer: '#2E7D32',
  background: '#F7F9F2',
  surface: '#FFFFFF',
  surfaceLow: '#EFF1E8',
  onSurface: '#1A1C1E',
  onSurfaceVariant: '#44474E',
  outline: '#C4C6D0',
  outlineDark: '#74777F',
  white: '#FFFFFF',
};

type Props = {
  navigation: any;
};

const ResetLinkScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendResetLink = () => {
    // console.log('Send reset link to:', email);

    // Example navigation
    navigation.navigate('VerifyOtp');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={COLORS.onSurface}
            />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>KISAN SAHAYAK</Text>
        </View>

        <View style={styles.languageBadge}>
          <Text style={styles.languageText}>हिन्दी</Text>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Forgot Password Card */}
            <View style={styles.card}>
              {/* Icon */}
              <View style={styles.iconCircle}>
                <Ionicons
                  name="lock-closed-outline"
                  size={44}
                  color={COLORS.primary}
                />
              </View>

              {/* Title */}
              <Text style={styles.title}>Forgot Password?</Text>

              {/* Subtitle */}
              <Text style={styles.subtitle}>
                Enter your email to reset your password. We will send a secure
                link to your inbox.
              </Text>

              {/* Form */}
              <View style={styles.form}>
                {/* Label */}
                <Text style={styles.label}>EMAIL ADDRESS</Text>

                {/* Input */}
                <View style={styles.inputWrapper}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={COLORS.outlineDark}
                    style={styles.inputIcon}
                  />

                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="farmer@kisansahayak.com"
                    placeholderTextColor="rgba(116, 119, 127, 0.6)"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                  />
                </View>

                {/* Button */}
                <TouchableOpacity
                  style={styles.primaryButton}
                  activeOpacity={0.9}
                  onPress={handleSendResetLink}
                >
                  <Text style={styles.primaryButtonText}>
                    Send Reset Link
                  </Text>

                  <Ionicons
                    name="send-outline"
                    size={20}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              </View>

              {/* Back to Login */}
              <TouchableOpacity
                style={styles.backToLogin}
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.7}
              >
                <Ionicons
                  name="arrow-back"
                  size={18}
                  color={COLORS.primary}
                />
                <Text style={styles.backToLoginText}>
                  Back to Login
                </Text>
              </TouchableOpacity>
            </View>

            {/* Security Info Card */}
            <View style={styles.infoCard}>
              <View style={styles.infoIconContainer}>
                <Ionicons
                  name="shield-checkmark-outline"
                  size={22}
                  color={COLORS.primary}
                />
              </View>

              <View style={styles.infoTextContainer}>
                <Text style={styles.infoTitle}>
                  Secure Verification
                </Text>

                <Text style={styles.infoDescription}>
                  Your account security is our priority. Reset links expire in
                  30 minutes for your protection.
                </Text>
              </View>
            </View>
          </View>

          {/* Bottom Decorative Section */}
          <View style={styles.bottomDecoration}>
            <Text style={styles.bottomDecorationText}>
              Connecting Bharat&apos;s Farmers Securely
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetLinkScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196, 198, 208, 0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.background,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.4,
  },

  languageBadge: {
    backgroundColor: 'rgba(13, 99, 27, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  languageText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: 'center',
  },

  container: {
    width: '100%',
  },

  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    padding: 32,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 208, 0.2)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
  },

  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(13, 99, 27, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(13, 99, 27, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    marginBottom: 32,
  },

  form: {
    gap: 24,
  },

  label: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 2,
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surfaceLow,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
  },

  inputIcon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.onSurface,
  },

  primaryButton: {
    height: 56,
    borderRadius: 999,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },

  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.white,
  },

  backToLogin: {
    marginTop: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  backToLoginText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },

  infoCard: {
    marginTop: 24,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(196, 198, 208, 0.3)',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  infoIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(13, 99, 27, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  infoTextContainer: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 4,
  },

  infoDescription: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.onSurfaceVariant,
  },

  bottomDecoration: {
    marginTop: 32,
    height: 120,
    borderRadius: 24,
    backgroundColor: 'rgba(13, 99, 27, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(13, 99, 27, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomDecorationText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 1,
    textTransform: 'uppercase',
    opacity: 0.7,
  },
});