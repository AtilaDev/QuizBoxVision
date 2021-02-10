import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Background from '../components/Background';

function Game() {
  return (
    <Background style={styles.container}>
      <Text>Game</Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Game;
