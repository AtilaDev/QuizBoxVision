import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';

function Game() {
  return (
    <Background style={styles.container}>
      <View style={styles.cardContainer}>
        <Animatable.View animation="bounceInRight">
          <Card />
        </Animatable.View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 130,
  },
});

export default Game;
