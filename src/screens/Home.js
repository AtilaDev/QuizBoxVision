import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import LogoBox from '../components/LogoBox';
import StartButton from '../components/StartButton';

function Home() {
  return (
    <LinearGradient colors={['#BEFCE1', '#5DD1B9']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoSection}>
          <LogoBox />
        </View>
        <View style={styles.startButton}>
          <StartButton />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoSection: {
    paddingTop: 130,
  },
  startButton: {
    paddingTop: 120,
  },
});

export default Home;
