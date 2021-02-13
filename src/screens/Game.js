import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';
import HeaderGame from '../components/HeaderGame';

function Game() {
  return (
    <>
      <Background style={styles.container}>
        <HeaderGame />
        <View style={styles.cardContainer}>
          <Animatable.View animation="bounceInRight">
            <Card />
          </Animatable.View>
        </View>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 50,
  },
});

export default Game;
