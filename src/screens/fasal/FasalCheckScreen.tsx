import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FasalCheckScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7fbf0" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <MaterialIcons name="agriculture" size={28} color="#2e7d32" />
          <Text style={styles.logoText}>Kisan Sahayak</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.languageButton}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Fasal ki photo lein</Text>
          <Text style={styles.subtitle}>
            बीमारी का पता लगाने के लिए फसल की साफ फोटो लें
          </Text>
        </View>

        {/* Camera Preview Area */}
        <View style={styles.cameraContainer}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbJijAi_utvTvrCxO507E8Oi8LFet9VjgQThtSpDiiSf0ep5QzOQKLsW-DjfDx3bxNfQDiYk8ZIj2EFBXL-xilMb9nc70eeYTcsqMvgOGBbDZgfjGrfU3nHbMYH9aEdXdPNDOChszVcVZrOHVR6gajg5YqzFicl7G91x_kG1MAu9SOpjQa_BxENHN3plyS2ICjB22mfK88KKFgUUsSY9DeqAWwd1AZ_ojp29XNKVmZ6muzB7Qzf5byzm5f5rxnwocUqbpchDzY1m0',
            }}
            style={styles.cameraImage}
          />

          {/* Scanner Frame */}
          <View style={styles.scannerFrame}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>

          {/* Tip Overlay */}
          <View style={styles.overlayTip}>
            <View style={styles.overlayIcon}>
              <MaterialIcons
                name="light-mode"
                size={20}
                color="#0d631b"
              />
            </View>
            <Text style={styles.overlayText}>
              तेज रोशनी में फोटो लें
            </Text>
          </View>
        </View>

        {/* Camera Controls */}
        <View style={styles.controls}>
          {/* Gallery */}
          <TouchableOpacity style={styles.controlButton}>
            <View style={styles.controlIconContainer}>
              <MaterialIcons
                name="photo-library"
                size={28}
                color="#0d631b"
              />
            </View>
            <Text style={styles.controlLabel}>Gallery</Text>
          </TouchableOpacity>

          {/* Capture Button */}
          <TouchableOpacity style={styles.captureSection}>
            <View style={styles.captureGlow} />
            <View style={styles.captureButton}>
              <MaterialIcons
                name="photo-camera"
                size={44}
                color="#ffffff"
              />
            </View>
            <Text style={styles.captureText}>Photo Kheecho</Text>
          </TouchableOpacity>

          {/* Flash */}
          <TouchableOpacity style={styles.controlButton}>
            <View style={styles.controlIconContainer}>
              <MaterialIcons
                name="flash-on"
                size={28}
                color="#0d631b"
              />
            </View>
            <Text style={styles.controlLabel}>Flash</Text>
          </TouchableOpacity>
        </View>

        {/* Instructions */}
        <View style={styles.instructionsSection}>
          <View style={styles.instructionsHeader}>
            <MaterialIcons
              name="info"
              size={20}
              color="#0d631b"
            />
            <Text style={styles.instructionsTitle}>
              Sahi Tareeka
            </Text>
          </View>

          <View style={styles.instructionsGrid}>
            {/* Correct */}
            <View style={styles.instructionCard}>
              <View style={styles.badgeSuccess}>
                <MaterialIcons
                  name="check"
                  size={14}
                  color="#ffffff"
                />
              </View>

              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTD4lKrP2M5B66A4TTRfrJyHh2RvzqCCWgJWtCXKIGfIfMf4SQDI0oZ80UYDM_uffxesLkIy-NygwCV15hJPd-jMAB_5iLoH0ANRJb3rAc4ve4bFms7Qq5sRTRq-xEvPj2UUEOsDI_Jb18_Qta3vPoQtkn4OW-HtSsNnIfBid841EeSDt6P1ZyUA6IuYZdhdOX5LVkma0b1hBZJ7xUSw43934RpoGXX1O6y2rE1BDpXD4hxfoze7QicIhUSJnMNoOARsG3FKWsTMU',
                }}
                style={styles.instructionImage}
              />

              <Text style={styles.instructionText}>
                पत्ती को बीच में और साफ रखें
              </Text>
            </View>

            {/* Incorrect */}
            <View style={[styles.instructionCard, { opacity: 0.75 }]}>
              <View style={styles.badgeError}>
                <MaterialIcons
                  name="close"
                  size={14}
                  color="#ffffff"
                />
              </View>

              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl9BuliDtLkZETnL-qUOrlVP-7TNM68kitobE1Od0mUlDv9xA04jNa1qCl2lI7tzB6YXLGJUuymkFfr343gQm6yaNO6u9a6CG24dp1n8l5hi-y6TCDlVdKuA0SGF1nj4vgDyrcCTHn6t-IvNfispePbaUobrHHYx0NTwzEY8Ke4BgYq4GgedXeScGBEhrEzlarvAH4qyaSPi8FIAYzBr1bMzwkWHSBmIH-Unllnm7Pja2aZLlV3MHs2tC1ynk5XHVtIA_x_YGtecs',
                }}
                style={styles.instructionImage}
              />

              <Text style={styles.instructionText}>
                धुंधली या दूर की फोटो न लें
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbf0',
  },

  header: {
    backgroundColor: '#f7fbf0',
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    marginLeft: 8,
    fontSize: 22,
    fontWeight: '900',
    color: '#0d631b',
  },

  languageButton: {
    color: '#0d631b',
    fontSize: 16,
    fontWeight: '700',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  titleSection: {
    marginBottom: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: '900',
    color: '#0d631b',
    lineHeight: 40,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 18,
    color: '#40493d',
    lineHeight: 24,
  },

  cameraContainer: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#111',
    borderWidth: 4,
    borderColor: '#ffffff',
    elevation: 10,
    position: 'relative',
  },

  cameraImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },

  scannerFrame: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    height: '80%',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 32,
  },

  cornerTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 28,
    height: 28,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#ffffff',
    borderTopLeftRadius: 12,
  },

  cornerTopRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 28,
    height: 28,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#ffffff',
    borderTopRightRadius: 12,
  },

  cornerBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 28,
    height: 28,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#ffffff',
    borderBottomLeftRadius: 12,
  },

  cornerBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#ffffff',
    borderBottomRightRadius: 12,
  },

  overlayTip: {
    position: 'absolute',
    bottom: 24,
    left: '7.5%',
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 20,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  overlayIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(13,99,27,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  overlayText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#181d17',
  },

  controls: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  controlButton: {
    alignItems: 'center',
  },

  controlIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e5eadf',
    justifyContent: 'center',
    alignItems: 'center',
  },

  controlLabel: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '700',
    color: '#40493d',
  },

  captureSection: {
    alignItems: 'center',
  },

  captureGlow: {
    position: 'absolute',
    top: -8,
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255,143,6,0.2)',
  },

  captureButton: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#ff8f06',
    borderWidth: 6,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },

  captureText: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '900',
    color: '#8f4e00',
  },

  instructionsSection: {
    marginTop: 48,
    marginBottom: 24,
  },

  instructionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  instructionsTitle: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: '900',
    color: '#0d631b',
    textTransform: 'uppercase',
  },

  instructionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  instructionCard: {
    width: '48%',
    backgroundColor: '#f1f5eb',
    borderRadius: 32,
    padding: 14,
    position: 'relative',
    borderWidth: 2,
    borderColor: 'rgba(13,99,27,0.08)',
  },

  badgeSuccess: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#0d631b',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  badgeError: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#ba1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },

  instructionImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 12,
  },

  instructionText: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 18,
    color: '#181d17',
  },
});