import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Audio } from 'expo-av';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../components/Background';
import LogoBox from '../components/LogoBox';
import StartButton from '../components/StartButton';
import FavreLeandro from '../components/FavreLeandro';

import { useApi } from '../api';

const start = require('../../assets/effects/start.mp3');

function Home({ navigation }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(start);
    setSound(sound);

    try {
      await sound.playAsync();
    } catch (e) {}
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const startGame = async () => {
    playSound();
    const data = await useApi();
    navigation.navigate('Game', { questions: data.results });
    // await AsyncStorage.removeItem('@quiz_box_game');
  };

  return (
    <Background style={styles.container}>
      <View style={styles.logoSection}>
        <Animatable.View animation="fadeInDown">
          <LogoBox />
        </Animatable.View>
      </View>
      <View style={styles.startButton}>
        <Animatable.View animation="zoomIn">
          <StartButton play={startGame} />
        </Animatable.View>
      </View>

      <View style={styles.devBy}>
        <Animatable.View animation="fadeInUp">
          <FavreLeandro />
        </Animatable.View>
      </View>
    </Background>
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
