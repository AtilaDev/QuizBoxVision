import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import LogoBox from '../components/LogoBox';
import StartButton from '../components/StartButton';
import FavreLeandro from '../components/FavreLeandro';

import { useApi } from '../api';

function Home({ navigation }) {
  const startGame = async () => {
    const data = await useApi();
    navigation.navigate('Game', { data });
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
