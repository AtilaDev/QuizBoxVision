import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';

function Result() {
  return (
    <>
      <Background style={styles.container}></Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Result;
