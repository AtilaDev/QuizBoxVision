import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

import LogoBox from '../components/LogoBox';
import StartButton from '../components/StartButton';
import FavreLeandro from '../components/FavreLeandro';

function Home() {
  return (
    <LinearGradient colors={['#BEFCE1', '#5DD1B9']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoSection}>
          <Animatable.View animation="fadeInDown">
            <LogoBox />
          </Animatable.View>
        </View>
        <View style={styles.startButton}>
          <Animatable.View animation="zoomIn">
            <StartButton />
          </Animatable.View>
        </View>

        <View style={styles.devBy}>
          <Animatable.View animation="fadeInUp">
            <FavreLeandro />
          </Animatable.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSection: {
    paddingTop: 120,
  },
  startButton: {
    marginTop: -100,
  },
  devBy: {
    marginBottom: 30,
  },
});

export default Home;
