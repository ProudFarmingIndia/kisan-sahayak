import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

export default function YojnaScreen() {
  const [landSize, setLandSize] = useState(8);
  const [selectedUnit, setSelectedUnit] = useState<'Bigha' | 'Acre'>('Bigha');
  const [selectedCrop, setSelectedCrop] = useState('Gehu (Wheat)');

  const crops = [
    'Gehu (Wheat)',
    'Dhan (Paddy)',
    'Sarson (Mustard)',
    'Ganna (Sugarcane)',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f5eb" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>🌾</Text>
          <Text style={styles.logoText}>Kisan Sahayak</Text>
        </View>

        <TouchableOpacity style={styles.langButton}>
          <Text style={styles.langText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroBadge}>AI POWERED PLANNER</Text>
            <Text style={styles.heroTitle}>
              Smart Farming{'\n'}
              <Text style={styles.heroTitleGreen}>Planner</Text>
            </Text>
            <Text style={styles.heroDescription}>
              खेती की सटीक योजना बनाएं। अपनी फसल और जमीन चुनें, और पाएं लागत
              और लाभ का विस्तृत अनुमान।
            </Text>
          </View>

          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJTH25wrMi1Lj78hid-b3b2hO_Y3nGdlolmKY1EPPdZ6VdCqziLdr-0kY7CCFRxet7pZM7nhQ1nNtGP4AljZ49gs4VYDsfz6SutA3ZNBqvsDg4cAkwGXUCOL50ptF82VWfnJwkIT1FEESbQMzMtKjHVoVEn6IgfOxfWahOcwbwDoyatT1lBfPNOz1GKF_xuqylBmCuY2RsNWQ_ShHvQfjQTsRLXbghvPLFL743GmymdjuSvK1N_oeDPiWc6uDt6qvibOPbTiAc54M',
            }}
            style={styles.heroImage}
          />
        </View>

        {/* Planner Form */}
        <View style={styles.formCard}>
          <Text style={styles.sectionTitle}>योजना विवरण</Text>

          {/* Crop Selection */}
          <Text style={styles.label}>फसल चुनें (Crop Selection)</Text>
          <View style={styles.cropContainer}>
            {crops.map((crop) => (
              <TouchableOpacity
                key={crop}
                style={[
                  styles.cropChip,
                  selectedCrop === crop && styles.cropChipActive,
                ]}
                onPress={() => setSelectedCrop(crop)}
              >
                <Text
                  style={[
                    styles.cropChipText,
                    selectedCrop === crop && styles.cropChipTextActive,
                  ]}
                >
                  {crop}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Land Size */}
          <View style={styles.landHeader}>
            <Text style={styles.label}>जमीन का आकार (Land Size)</Text>
            <View style={styles.landBadge}>
              <Text style={styles.landBadgeText}>
                {landSize} {selectedUnit}
              </Text>
            </View>
          </View>

          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={1}
            maximumValue={100}
            step={1}
            minimumTrackTintColor="#2e7d32"
            maximumTrackTintColor="#d7dbd2"
            thumbTintColor="#2e7d32"
            value={landSize}
            onValueChange={(value: any) => setLandSize(value)}
          />

          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabel}>1 Bigha</Text>
            <Text style={styles.sliderLabel}>100 Bigha</Text>
          </View>

          {/* Unit Toggle */}
          <View style={styles.unitToggle}>
            {['Bigha', 'Acre'].map((unit) => (
              <TouchableOpacity
                key={unit}
                style={[
                  styles.unitButton,
                  selectedUnit === unit && styles.unitButtonActive,
                ]}
                onPress={() =>
                  setSelectedUnit(unit as 'Bigha' | 'Acre')
                }
              >
                <Text
                  style={[
                    styles.unitButtonText,
                    selectedUnit === unit && styles.unitButtonTextActive,
                  ]}
                >
                  {unit}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>
            Planner Save Karein 📌
          </Text>
        </TouchableOpacity>

        {/* Result Card */}
        <View style={styles.resultCard}>
          <Text style={styles.resultBadge}>अनुमानित विवरण</Text>
          <Text style={styles.resultTitle}>Wheat Production Estimate</Text>

          <View style={styles.resultGrid}>
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Lagat (Cost)</Text>
              <Text style={styles.resultValue}>₹42,500</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Labh (Profit)</Text>
              <Text style={styles.resultValue}>₹84,000</Text>
            </View>

            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Joquim (Risk)</Text>
              <Text style={styles.resultValue}>12%</Text>
              <View style={styles.riskBadge}>
                <Text style={styles.riskBadgeText}>LOW</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Profit Comparison */}
        <View style={styles.whiteCard}>
          <Text style={styles.cardTitle}>
            Profit Comparison (per Bigha)
          </Text>

          <View style={styles.chartContainer}>
            {[
              { name: 'Sarson', height: 90, active: false },
              { name: 'Wheat', height: 150, active: true },
              { name: 'Dhan', height: 120, active: false },
            ].map((item) => (
              <View key={item.name} style={styles.barItem}>
                {item.active && (
                  <Text style={styles.bestLabel}>Best</Text>
                )}
                <View
                  style={[
                    styles.bar,
                    {
                      height: item.height,
                      backgroundColor: item.active
                        ? '#2e7d32'
                        : '#cfd8cc',
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.barLabel,
                    item.active && { color: '#2e7d32' },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Expert Tip */}
        <View style={styles.tipCard}>
          <Text style={styles.tipHeader}>💡 Expert Tip</Text>
          <Text style={styles.tipText}>
            Apply bio-fertilizers in week 4 to increase yield by 15%.
          </Text>

          <TouchableOpacity>
            <Text style={styles.tipLink}>Read full guide →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Floating Mic Button */}
      <TouchableOpacity style={styles.micButton}>
        <Text style={styles.micIcon}>🎤</Text>
      </TouchableOpacity>
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

  langButton: {
    backgroundColor: '#e5eadf',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  langText: {
    color: '#0d631b',
    fontWeight: '700',
    fontSize: 14,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },

  heroSection: {
    marginBottom: 28,
  },

  heroTextContainer: {
    marginBottom: 20,
  },

  heroBadge: {
    fontSize: 12,
    fontWeight: '800',
    color: '#8f4e00',
    letterSpacing: 1.5,
  },

  heroTitle: {
    fontSize: 42,
    fontWeight: '900',
    color: '#181d17',
    lineHeight: 46,
    marginTop: 8,
  },

  heroTitleGreen: {
    color: '#0d631b',
  },

  heroDescription: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 24,
    color: '#40493d',
  },

  heroImage: {
    width: '100%',
    height: 220,
    borderRadius: 32,
  },

  formCard: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 24,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#181d17',
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#40493d',
    marginBottom: 12,
  },

  cropContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },

  cropChip: {
    backgroundColor: '#f1f5eb',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 14,
    marginRight: 8,
    marginBottom: 8,
  },

  cropChipActive: {
    backgroundColor: '#2e7d32',
  },

  cropChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#181d17',
  },

  cropChipTextActive: {
    color: '#ffffff',
  },

  landHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  landBadge: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },

  landBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },

  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -4,
    marginBottom: 20,
  },

  sliderLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#707a6c',
  },

  unitToggle: {
    flexDirection: 'row',
    backgroundColor: '#f1f5eb',
    padding: 4,
    borderRadius: 14,
  },

  unitButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  unitButtonActive: {
    backgroundColor: '#ffffff',
  },

  unitButtonText: {
    fontWeight: '700',
    color: '#707a6c',
  },

  unitButtonTextActive: {
    color: '#0d631b',
  },

  saveButton: {
    backgroundColor: '#2e7d32',
    height: 58,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  saveButtonText: {
    color: '#cbffc2',
    fontSize: 18,
    fontWeight: '800',
  },

  resultCard: {
    backgroundColor: '#0d631b',
    borderRadius: 32,
    padding: 28,
    marginBottom: 20,
  },

  resultBadge: {
    color: '#a3f69c',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
  },

  resultTitle: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '900',
    marginTop: 6,
    marginBottom: 24,
  },

  resultGrid: {
    gap: 20,
  },

  resultItem: {
    marginBottom: 10,
  },

  resultLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },

  resultValue: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 4,
  },

  riskBadge: {
    marginTop: 8,
    backgroundColor: '#a3f69c',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },

  riskBadgeText: {
    color: '#0d631b',
    fontSize: 10,
    fontWeight: '900',
  },

  whiteCard: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    padding: 24,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#707a6c',
    marginBottom: 24,
    textTransform: 'uppercase',
  },

  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 200,
  },

  barItem: {
    alignItems: 'center',
    flex: 1,
  },

  bestLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2e7d32',
    marginBottom: 6,
  },

  bar: {
    width: 50,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  barLabel: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '700',
    color: '#707a6c',
  },

  tipCard: {
    backgroundColor: '#fff3e8',
    borderRadius: 32,
    padding: 24,
    marginBottom: 20,
  },

  tipHeader: {
    fontSize: 16,
    fontWeight: '800',
    color: '#8f4e00',
    marginBottom: 10,
  },

  tipText: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 28,
    color: '#181d17',
  },

  tipLink: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: '800',
    color: '#8f4e00',
  },

  micButton: {
    position: 'absolute',
    right: 24,
    bottom: 28,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  micIcon: {
    fontSize: 28,
  },
});