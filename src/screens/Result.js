import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';

function Result({ route, navigation }) {
  const { totalPoints } = route.params;

  return (
    <>
      <Background style={styles.container}>
        <Text style={{ fontSize: 30 }}>Game Over!</Text>
        <Text style={{ fontSize: 40 }}>Total Points: {totalPoints}</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Result;
