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
  TextInput,
} from 'react-native';

export default function QuestionsScreen() {
  const suggestedQuestions = [
    {
      icon: '🧠',
      title: 'Kaunsi fasal ugayein?',
      subtitle: 'मिट्टी और मौसम के आधार पर सलाह',
      color: '#8f4e00',
    },
    {
      icon: '🐛',
      title: 'Keet rog ka samadhan?',
      subtitle: 'कीटों से फसल को बचाने के उपाय',
      color: '#ba1a1a',
    },
    {
      icon: '💧',
      title: 'सिंचाई का सही समय?',
      subtitle: 'अगले 7 दिनों का मौसम पूर्वानुमान',
      color: '#0d631b',
    },
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

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>हिन्दी</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaFbtHOrkR1jtYnjpMHkDsq2tJbURC_-iX_4xk1FEI_H3ViTUZm5sKD4eQjGd-woW6aTyICiUqJWDfJLhy4q1DelIaf_d6EnxZ94OydqiUnWhbSaE3Ymo0se7da47WsqO7Bxdkkyz2tirhPKWPfejbNr2fHAeHIBnbgjDDtVTIEOmQuHlH9E7NEhvMd9m3yOZYRpyxv36lCtrPsOmv1mPCCYCvjH12-080tBmdHOjiSOb-k1AFSIMmbCSoNvFAKD68JXg_3dmYJcc',
              }}
              style={styles.avatar}
            />
            <View style={styles.onlineIndicator} />
          </View>

          <Text style={styles.welcomeTitle}>नमस्ते, मैं हूँ किसान मित्र</Text>
          <Text style={styles.welcomeSubtitle}>
            मैं आपकी फसल और खेती से जुड़ी हर समस्या का समाधान कर सकता हूँ।
          </Text>
        </View>

        {/* Chat Messages */}
        <View style={styles.chatContainer}>
          {/* Bot Welcome Message */}
          <View style={styles.messageRow}>
            <View style={styles.smallAvatarContainer}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR8leNLGc8cS3pCZ-jtqf94xeFfeyJ8DjAKSN4-MVg2G_K5XSlX5I2WwzBsGVTcbXX1cou5BKYzsvyFSUZDqGoHcn1uIkMv1K9Ui_EzTFYWtzWQ6hKV0hsZobUYmeZhwcc3ZG3-8W5lUHrmAQsacYA0-kcXm-gGgRoaEULe-N1lk0LpWaXx05NOLJ6dzodRCZGAFAZvAmMzdxcllZJaRG5gW6KiLD1G8l6ksnJOriDNKYN-K69E0uZDaD5qpO4wG-ko2vU4WCBNKI',
                }}
                style={styles.smallAvatar}
              />
            </View>

            <View style={styles.botBubble}>
              <Text style={styles.botText}>
                आप आज क्या जानना चाहते हैं? आप बोलकर भी पूछ सकते हैं।
              </Text>
            </View>
          </View>

          {/* User Message */}
          <View style={styles.userMessageRow}>
            <View style={styles.userAvatar}>
              <Text style={styles.userAvatarText}>👤</Text>
            </View>

            <View style={styles.userBubble}>
              <Text style={styles.userText}>
                गेहूं की फसल में पीलापन क्यों आ रहा है?
              </Text>
            </View>
          </View>

          {/* Detailed Bot Response */}
          <View style={styles.messageRow}>
            <View style={styles.smallAvatarContainer}>
              <Image
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA_V9r00SsNpJTsLi3XGj7Bqks1Mpce1SC5Qkwn-xMuW2E1xG_iLJ2xaE_ceixmYde-Zcl3IHJ90cQBXeMVG7wwFWh6FSibsVwVgYn_vkmeKoC7gzlKGDHnpUTnor6EvVAdlakdNE9H0WI_hlHdiFZtM0t8QMVkClU8UPYsGijH1xtAWv4hHYq9zHoCV70LgsbPUJxAsF28lW4zWwQOOnov342kW-2-r8jixnux9JL7OO1mEZbOflbUzgWV9d-FqpRJSpkRMYjiFM',
                }}
                style={styles.smallAvatar}
              />
            </View>

            <View style={styles.solutionBubble}>
              <Text style={styles.solutionTitle}>समाधान:</Text>

              <Text style={styles.solutionText}>
                गेहूं में पीलापन नाइट्रोजन की कमी या अधिक पानी के कारण हो सकता
                है। कृपया ये कदम उठाएं:
              </Text>

              <View style={styles.solutionItem}>
                <Text style={styles.checkIcon}>✅</Text>
                <Text style={styles.solutionItemText}>
                  खेत में जल निकासी का उचित प्रबंध करें।
                </Text>
              </View>

              <View style={styles.solutionItem}>
                <Text style={styles.checkIcon}>✅</Text>
                <Text style={styles.solutionItemText}>
                  25-30 किलोग्राम यूरिया प्रति एकड़ का छिड़काव करें।
                </Text>
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity style={styles.shareButton}>
                  <Text style={styles.shareText}>📤 साझा करें</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.likeText}>👍</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* Suggested Questions */}
        <View style={styles.suggestionsSection}>
          <Text style={styles.suggestionsLabel}>
            अक्सर पूछे जाने वाले सवाल
          </Text>

          {suggestedQuestions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.suggestionCard}>
              <View style={styles.suggestionHeader}>
                <Text
                  style={[
                    styles.suggestionIcon,
                    { color: item.color },
                  ]}
                >
                  {item.icon}
                </Text>

                <Text style={styles.suggestionTitle}>
                  {item.title}
                </Text>
              </View>

              <Text style={styles.suggestionSubtitle}>
                {item.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Input Area */}
      <View style={styles.inputArea}>
        {/* Mic Button */}
        <TouchableOpacity style={styles.micContainer}>
          <View style={styles.micButton}>
            <Text style={styles.micIcon}>🎤</Text>
          </View>

          <View style={styles.micLabel}>
            <Text style={styles.micLabelText}>बोलें (HINDI)</Text>
          </View>
        </TouchableOpacity>

        {/* Text Input */}
        <View style={styles.inputBar}>
          <TextInput
            placeholder="अपना सवाल यहाँ लिखें..."
            placeholderTextColor="#707a6c"
            style={styles.textInput}
          />

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendIcon}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = '#0d631b';
const PRIMARY_CONTAINER = '#2e7d32';
const PRIMARY_LIGHT = '#cbffc2';
const BACKGROUND = '#f7fbf0';
const SURFACE_LOW = '#f1f5eb';
const WHITE = '#ffffff';
const TEXT = '#181d17';
const TEXT_SECONDARY = '#40493d';
const BORDER = '#bfcaba';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },

  header: {
    backgroundColor: SURFACE_LOW,
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
    color: PRIMARY,
  },

  languageButton: {
    backgroundColor: '#cbffc2',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  languageText: {
    color: PRIMARY,
    fontWeight: '700',
    fontSize: 14,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 260,
  },

  welcomeSection: {
    alignItems: 'center',
    marginBottom: 24,
  },

  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: PRIMARY_LIGHT,
  },

  onlineIndicator: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    borderWidth: 3,
    borderColor: BACKGROUND,
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: TEXT,
    textAlign: 'center',
    marginBottom: 8,
  },

  welcomeSubtitle: {
    fontSize: 15,
    color: TEXT_SECONDARY,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },

  chatContainer: {
    marginBottom: 32,
  },

  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  userMessageRow: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  smallAvatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: SURFACE_LOW,
  },

  smallAvatar: {
    width: '100%',
    height: '100%',
  },

  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY_LIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  userAvatarText: {
    fontSize: 18,
  },

  botBubble: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },

  botText: {
    fontSize: 16,
    lineHeight: 24,
    color: TEXT,
  },

  userBubble: {
    maxWidth: '82%',
    backgroundColor: '#cbffc2',
    padding: 18,
    borderRadius: 20,
    borderBottomRightRadius: 4,
  },

  userText: {
    fontSize: 16,
    lineHeight: 24,
    color: PRIMARY,
    fontWeight: '600',
  },

  solutionBubble: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
    borderRadius: 24,
    borderTopLeftRadius: 6,
    borderWidth: 1,
    borderColor: BORDER,
  },

  solutionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: PRIMARY,
    marginBottom: 8,
  },

  solutionText: {
    fontSize: 15,
    lineHeight: 24,
    color: TEXT,
    marginBottom: 14,
  },

  solutionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },

  checkIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  solutionItemText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: TEXT,
  },

  actionRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: SURFACE_LOW,
    flexDirection: 'row',
    alignItems: 'center',
  },

  shareButton: {
    marginRight: 16,
  },

  shareText: {
    fontSize: 14,
    fontWeight: '700',
    color: PRIMARY,
  },

  likeText: {
    fontSize: 20,
  },

  suggestionsSection: {
    marginBottom: 20,
  },

  suggestionsLabel: {
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    color: '#707a6c',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  suggestionCard: {
    backgroundColor: SURFACE_LOW,
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
  },

  suggestionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  suggestionIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  suggestionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: TEXT,
  },

  suggestionSubtitle: {
    fontSize: 12,
    color: TEXT_SECONDARY,
    marginTop: 6,
    marginLeft: 30,
  },

  inputArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: 'rgba(247,251,240,0.98)',
  },

  micContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },

  micButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  micIcon: {
    fontSize: 34,
    color: WHITE,
  },

  micLabel: {
    marginTop: 8,
    backgroundColor: WHITE,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
  },

  micLabelText: {
    fontSize: 11,
    fontWeight: '900',
    color: PRIMARY,
  },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 999,
    paddingLeft: 20,
    paddingRight: 6,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: BORDER,
  },

  textInput: {
    flex: 1,
    fontSize: 16,
    color: TEXT,
    paddingVertical: 10,
  },

  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: PRIMARY_CONTAINER,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendIcon: {
    color: WHITE,
    fontSize: 20,
    fontWeight: '700',
  },
});