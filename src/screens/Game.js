import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Background from '../components/Background';
import Card from '../components/Card';

function Game() {
  return (
    <Background style={styles.container}>
      <View style={styles.cardContainer}>
        <Card />
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
    paddingTop: 100,
  },
});

export default Game;
