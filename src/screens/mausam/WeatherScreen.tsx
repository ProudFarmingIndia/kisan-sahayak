import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

export default function WeatherScreen() {
  const forecast = [
    {
      day: 'Mangalwar',
      icon: '☀️',
      temp: '30°',
      desc: 'Saaf Mausam',
      highlight: false,
    },
    {
      day: 'Budhwar',
      icon: '🌧️',
      temp: '24°',
      desc: 'Baarish',
      highlight: true,
    },
    {
      day: 'Guruwar',
      icon: '☁️',
      temp: '26°',
      desc: 'Baadal',
      highlight: false,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f5eb" />

      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🌾</Text>
          <Text style={styles.logoText}>Kisan Sahayak</Text>
        </View>

        <Text style={styles.languageText}>हिन्दी</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Weather Card */}
        <View style={styles.heroCard}>
          <Text style={styles.heroBgIcon}>☁️</Text>

          <View style={styles.heroContent}>
            <Text style={styles.heroSubtitle}>Aaj ka Mausam</Text>

            <View style={styles.temperatureRow}>
              <Text style={styles.temperature}>28°</Text>
              <Text style={styles.temperatureUnit}>C</Text>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>💧</Text>
                <View>
                  <Text style={styles.statLabel}>Humidity</Text>
                  <Text style={styles.statValue}>64%</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statIcon}>🌬️</Text>
                <View>
                  <Text style={styles.statLabel}>Wind</Text>
                  <Text style={styles.statValue}>12 km/h</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Kheti Ki Salah */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🧠 Kheti ki Salah</Text>

          {/* Advice Card 1 */}
          <View style={styles.adviceCard}>
            <View style={[styles.adviceIconCircle, { backgroundColor: '#0d631b' }]}>
              <Text style={styles.adviceIcon}>💧</Text>
            </View>

            <View style={styles.adviceContent}>
              <Text style={styles.adviceTitle}>Aaj sinchai karein</Text>
              <Text style={styles.adviceText}>
                Mausam garam aur khushk rehne wala hai. Apni fasal ko
                zaroorat ke hisab se pani dein.
              </Text>
            </View>
          </View>

          {/* Advice Card 2 */}
          <View style={[styles.adviceCard, styles.secondaryAdviceCard]}>
            <View style={[styles.adviceIconCircle, { backgroundColor: '#8f4e00' }]}>
              <Text style={styles.adviceIcon}>🚫</Text>
            </View>

            <View style={styles.adviceContent}>
              <Text style={[styles.adviceTitle, { color: '#623300' }]}>
                Spray na karein
              </Text>
              <Text style={[styles.adviceText, { color: '#623300' }]}>
                Kal baarish ho sakti hai. Keetnashak ka spray abhi rok dein
                taaki dawai dhul na jaye.
              </Text>
            </View>
          </View>
        </View>

        {/* 3 Day Forecast */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Agle 3 Din</Text>

          {forecast.map((item, index) => (
            <View
              key={index}
              style={[
                styles.forecastCard,
                item.highlight && styles.forecastCardHighlight,
              ]}
            >
              <Text style={styles.forecastDay}>{item.day}</Text>
              <Text style={styles.forecastIcon}>{item.icon}</Text>

              <View style={{ alignItems: 'center' }}>
                <Text style={styles.forecastTemp}>{item.temp}</Text>
                <Text style={styles.forecastDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Farm Image Quote */}
        <View style={styles.imageCard}>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfT9RSTS3Am5svI8JERJ-2rc_1IHb4sBybmqHgmNzgWq8SeIXLEgZBSFj8zBv7jfRoTjjOzxtFi9EFm8lxJICC7_2BBJM6T3jcN7SFX2lZpcXqt63TgVb6u_0e1CvePq7xOqRhtrpVyrmKce0g4w37nRf_ORM161WEkQrX3P3k0vPuyVYBZPOVJX5S4X2nnJ0GlvETaAhZCVIcH9xSqTrXYOTucupWoscvjTTdmcPzG6Z9WD2ub30vSvARVvehaF6fJtPSckU82Pg',
            }}
            style={styles.farmImage}
          />

          <View style={styles.imageOverlay}>
            <Text style={styles.quoteText}>
              "Mausam ke saath kheti ki sahi shuruwat."
            </Text>
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
    backgroundColor: '#f1f5eb',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoIcon: {
    fontSize: 26,
    marginRight: 8,
  },

  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0d631b',
  },

  languageText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2e7d32',
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  heroCard: {
    backgroundColor: '#2e7d32',
    borderRadius: 32,
    padding: 28,
    marginBottom: 32,
    overflow: 'hidden',
    position: 'relative',
  },

  heroBgIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 120,
    opacity: 0.15,
    color: '#ffffff',
  },

  heroContent: {
    zIndex: 1,
  },

  heroSubtitle: {
    color: '#cbffc2',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },

  temperatureRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  temperature: {
    fontSize: 82,
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: 90,
  },

  temperatureUnit: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 12,
    marginLeft: 4,
  },

  statsRow: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
  },

  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  statIcon: {
    fontSize: 28,
    marginRight: 10,
  },

  statLabel: {
    color: '#cbffc2',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  statValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 2,
  },

  section: {
    marginBottom: 32,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#181d17',
    marginBottom: 18,
  },

  adviceCard: {
    backgroundColor: '#f1f5eb',
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 14,
  },

  secondaryAdviceCard: {
    backgroundColor: '#ffdcc2',
  },

  adviceIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  adviceIcon: {
    fontSize: 26,
    color: '#ffffff',
  },

  adviceContent: {
    flex: 1,
  },

  adviceTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0d631b',
    marginBottom: 6,
  },

  adviceText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#40493d',
  },

  forecastCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },

  forecastCardHighlight: {
    borderWidth: 2,
    borderColor: '#a3f69c',
  },

  forecastDay: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
    color: '#181d17',
  },

  forecastIcon: {
    fontSize: 52,
    marginBottom: 12,
  },

  forecastTemp: {
    fontSize: 30,
    fontWeight: '900',
    color: '#181d17',
  },

  forecastDesc: {
    fontSize: 11,
    fontWeight: '700',
    color: '#707a6c',
    textTransform: 'uppercase',
    marginTop: 4,
  },

  imageCard: {
    height: 200,
    borderRadius: 32,
    overflow: 'hidden',
    marginTop: 8,
  },

  farmImage: {
    width: '100%',
    height: '100%',
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(24,29,23,0.45)',
    justifyContent: 'flex-end',
    padding: 24,
  },

  quoteText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    fontStyle: 'italic',
    lineHeight: 28,
  },
});