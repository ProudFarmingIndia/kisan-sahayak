import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    StatusBar,
    Image,
} from 'react-native';

const marketPrices = [
    { name: 'Gehu', price: '₹2,450', trend: '↑ 2%', up: true },
    { name: 'Dhaan', price: '₹2,180', trend: '↓ 1%', up: false },
    { name: 'Sarso', price: '₹5,200', trend: '↑ 5%', up: true },
];

const HomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f1f5eb" />

            {/* Top Navbar */}
            <View style={styles.navbar}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoIcon}>🌾</Text>
                    <Text style={styles.logoText}>Kisan Sahayak</Text>
                </View>

                <TouchableOpacity>
                    <Text style={styles.languageBtn}>हिन्दी</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {/* Hero Section */}
                <View style={styles.hero}>
                    <Text style={styles.welcome}>WELCOME BACK,</Text>
                    <Text style={styles.welcome}>Gagan Choudhary</Text>

                    <Text style={styles.heroTitle}>
                        Namaste,{'\n'}Kisan Bhai
                    </Text>
                </View>

                {/* Weather Alert */}
                <View style={styles.alertCard}>
                    <View style={styles.alertIcon}>
                        <Text style={styles.alertEmoji}>⚠️</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.alertTitle}>Mausam Chetavani</Text>
                        <Text style={styles.alertText}>
                            Agli 2 ghanto mein bhari baarish ki sambhavna hai.
                        </Text>
                    </View>

                    <Text style={styles.arrow}>›</Text>
                </View>

                {/* Crop Scan Button */}
                <TouchableOpacity
                    style={styles.cropButton}
                    onPress={() => navigation.navigate('Fasal Check')}
                >
                    <Text style={styles.cropIcon}>📄</Text>
                    <Text style={styles.cropText}>Crop Scan</Text>
                </TouchableOpacity>

                {/* Feature Grid */}
                <View style={styles.grid}>
                    {/* Weather Card */}
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.cardLabel}>MAUSAM</Text>
                            <Text style={styles.temp}>24°C</Text>
                            <Text style={styles.cardSubtext}>Saaf Aasmaan</Text>
                        </View>

                        <View style={styles.cardFooter}>
                            <Text style={styles.cardEmoji}>☀️</Text>
                            <Text style={styles.arrow}>↗</Text>
                        </View>
                    </View>

                    {/* AI Card */}
                    <TouchableOpacity
                        style={[styles.card, styles.aiCard]}
                        onPress={() => navigation.navigate('Saval')}
                    >
                        <View>
                            <Text style={styles.aiLabel}>SAVAL</Text>
                            <Text style={styles.aiTitle}>Expert AI Se Puche</Text>
                        </View>

                        <View style={styles.cardFooter}>
                            <View style={styles.chatBubble}>
                                <Text style={{ fontSize: 18 }}>💬</Text>
                            </View>

                            <Text style={[styles.arrow, { color: '#cbffc2' }]}>↗</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Yojna Card */}
                    <View style={styles.card}>
                        <View>
                            <Text style={styles.cardLabel}>YOJNA</Text>
                            <Text style={styles.cardTitle}>Sarkari Labh</Text>
                        </View>

                        <View style={styles.cardFooter}>
                            <Text style={styles.cardEmoji}>📝</Text>
                            <Text style={styles.arrow}>↗</Text>
                        </View>
                    </View>

                    {/* Tips Card */}
                    <View style={styles.tipCard}>
                        <Image
                            source={{
                                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgDYVSnh9AR1-L6dBu7a9y6l1OIlanY3EyDbOW8VPqnMVSvTJx3wrtY_2FB_vYnUAbod9fYJ69bepgXVFcf7qaWEsXV8UDOmOOGR7n7WQrrP_Eja5UBidLucERBAk2aeGGxjUAi3HYPr5VAwz8YxjTI5s-pusvCDlsyMLnDnMqo82g3eEWqfAbnP38blYas2HSOmHwXdL2kVk29DqE-KYJCZYwPpaxbb5ZxZACU3MrqzziJPVyufjg9zyvNvaGSzfKRS3ZoMTU67s',
                            }}
                            style={styles.tipImage}
                        />

                        <View style={styles.tipContent}>
                            <Text style={styles.tipLabel}>SALAH</Text>
                            <Text style={styles.tipTitle}>Behtar Paidavar Tips</Text>
                        </View>
                    </View>
                </View>

                {/* Market Prices */}
                <View style={styles.marketSection}>
                    <View style={styles.marketHeader}>
                        <Text style={styles.marketTitle}>Mandi Bhav</Text>

                        <TouchableOpacity>
                            <Text style={styles.marketBtn}>Sab Dekhein</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {marketPrices.map((item, index) => (
                            <View key={index} style={styles.marketCard}>
                                <Text style={styles.marketName}>{item.name}</Text>
                                <Text style={styles.marketPrice}>{item.price}</Text>

                                <Text
                                    style={[
                                        styles.marketTrend,
                                        { color: item.up ? '#0d631b' : '#8f4e00' },
                                    ]}
                                >
                                    {item.trend}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            {/* <View style={styles.bottomNav}>
        {[
          ['🏠', 'Home', true],
          ['📄', 'Fasal Check', false],
          ['☁️', 'Mausam', false],
          ['💬', 'Saval', false],
          ['📝', 'Yojna', false],
        ].map(([icon, label, active], index) => (
          <TouchableOpacity
            key={index}
            style={[styles.navItem, active && styles.activeNavItem]}
          >
            <Text style={[styles.navIcon, active && { color: '#fff' }]}>
              {icon}
            </Text>

            <Text
              style={[styles.navText, active && { color: '#fff' }]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7fbf0',
    },

    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 120,
    },

    navbar: {
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

    languageBtn: {
        color: '#2e7d32',
        fontSize: 18,
        fontWeight: '700',
    },

    hero: {
        marginTop: 24,
        marginBottom: 20,
    },

    welcome: {
        color: '#8f4e00',
        fontWeight: '700',
        letterSpacing: 2,
        fontSize: 12,
    },

    heroTitle: {
        fontSize: 46,
        fontWeight: '900',
        color: '#0d631b',
        lineHeight: 54,
        marginTop: 10,
    },

    alertCard: {
        backgroundColor: '#fff3e8',
        borderRadius: 18,
        padding: 18,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 22,
    },

    alertIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffdcc2',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },

    alertEmoji: {
        fontSize: 22,
    },

    alertTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#8f4e00',
    },

    alertText: {
        marginTop: 4,
        color: '#555',
        fontSize: 14,
    },

    arrow: {
        fontSize: 24,
        color: '#888',
    },

    cropButton: {
        backgroundColor: '#ff8f06',
        height: 72,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },

    cropIcon: {
        fontSize: 26,
        marginRight: 10,
    },

    cropText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#fff',
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    card: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 18,
        marginBottom: 16,
        justifyContent: 'space-between',
        minHeight: 170,
    },

    aiCard: {
        backgroundColor: '#2e7d32',
    },

    cardLabel: {
        color: '#8f4e00',
        fontWeight: '700',
        fontSize: 12,
    },

    aiLabel: {
        color: '#cbffc2',
        fontWeight: '700',
        fontSize: 12,
    },

    temp: {
        fontSize: 38,
        fontWeight: '900',
        marginTop: 10,
    },

    cardSubtext: {
        marginTop: 6,
        color: '#666',
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardEmoji: {
        fontSize: 32,
    },

    aiTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '800',
        marginTop: 10,
    },

    chatBubble: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: 'rgba(255,255,255,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginTop: 10,
    },

    tipCard: {
        width: '48%',
        backgroundColor: '#eef2e8',
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 16,
    },

    tipImage: {
        width: '100%',
        height: 100,
    },

    tipContent: {
        padding: 14,
    },

    tipLabel: {
        fontSize: 11,
        color: '#0d631b',
        fontWeight: '700',
    },

    tipTitle: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: '800',
    },

    marketSection: {
        marginTop: 12,
    },

    marketHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },

    marketTitle: {
        fontSize: 24,
        fontWeight: '800',
    },

    marketBtn: {
        color: '#0d631b',
        fontWeight: '700',
    },

    marketCard: {
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 16,
        marginRight: 14,
    },

    marketName: {
        color: '#666',
        marginBottom: 8,
    },

    marketPrice: {
        fontSize: 20,
        fontWeight: '800',
    },

    marketTrend: {
        marginTop: 8,
        fontWeight: '700',
    },

    bottomNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 14,
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 10,
    },

    navItem: {
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 18,
    },

    activeNavItem: {
        backgroundColor: '#2e7d32',
    },

    navIcon: {
        fontSize: 22,
    },

    navText: {
        fontSize: 12,
        marginTop: 4,
        color: '#181d17',
        fontWeight: '600',
    },
});
