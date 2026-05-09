import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function OtpVerificationScreen({ navigation } : any) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const handleOtpChange = (value : string, index : number) => {
    const digit = value.replace(/[^0-9]/g, '').slice(-1);

    const updatedOtp = [...otp];
    updatedOtp[index] = digit;
    setOtp(updatedOtp);

    if (digit && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e : any, index : number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleVerify = () => {
    // const code = otp.join('');
    // console.log('Verifying OTP:', code);

    // Example navigation
    navigation?.navigate('NewPassword');
  };

  const handleResendCode = () => {
    console.log('Resend OTP');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F9F2" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation?.goBack?.()}
            activeOpacity={0.8}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color="#1A1C1E"
            />
          </TouchableOpacity>

          <View style={styles.brandContainer}>
            <MaterialIcons
              name="agriculture"
              size={26}
              color="#0D631B"
            />
            <Text style={styles.brandText}>Kisan Sahayak</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image */}
        <View style={styles.heroContainer}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
            }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay} />
        </View>

        {/* OTP Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Verify Your Number</Text>
          <Text style={styles.subtitle}>
            Enter the 4-digit code sent to your phone.
          </Text>

          {/* OTP Inputs */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.otpInput}
                value={digit}
                onChangeText={(value) =>
                  handleOtpChange(value, index)
                }
                onKeyPress={(e) =>
                  handleKeyPress(e, index)
                }
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
                placeholder="-"
                placeholderTextColor="#A0A5A0"
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerify}
            activeOpacity={0.9}
          >
            <Text style={styles.verifyButtonText}>
              Verify Now
            </Text>
            <MaterialIcons
              name="check-circle"
              size={22}
              color="#FFFFFF"
            />
          </TouchableOpacity>

          {/* Resend */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendLabel}>
              Didn't receive the code?
            </Text>

            <TouchableOpacity
              onPress={handleResendCode}
              activeOpacity={0.8}
            >
              <Text style={styles.resendButton}>
                Resend Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Security Info */}
        <View style={styles.infoBox}>
          <MaterialIcons
            name="verified-user"
            size={22}
            color="#0D631B"
          />
          <Text style={styles.infoText}>
            Your security is our priority. Kisan Sahayak uses
            end-to-end encryption to keep your agricultural
            data safe and secure.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const COLORS = {
  primary: '#0D631B',
  background: '#F7F9F2',
  white: '#FFFFFF',
  text: '#1A1C1E',
  textSecondary: '#44474E',
  outline: '#C4C7CF',
  surfaceLow: '#F1F5E8',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 64,
    backgroundColor: 'rgba(247,249,242,0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(196,199,207,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },

  brandText: {
    marginLeft: 6,
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },

  languageButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  languageButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '700',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  heroContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(196,199,207,0.3)',
  },

  heroImage: {
    width: '100%',
    height: 180,
  },

  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(196,199,207,0.2)',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 28,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  otpInput: {
    width: 68,
    height: 68,
    backgroundColor: COLORS.surfaceLow,
    borderWidth: 1,
    borderColor: COLORS.outline,
    borderRadius: 12,
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
  },

  verifyButton: {
    backgroundColor: COLORS.primary,
    height: 56,
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  verifyButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '800',
  },

  resendContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  resendLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },

  resendButton: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.primary,
  },

  infoBox: {
    marginTop: 24,
    backgroundColor: 'rgba(13,99,27,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(13,99,27,0.1)',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  infoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.textSecondary,
  },
});