import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useFonts, Play_700Bold } from '@expo-google-fonts/play';

function StartButton() {
  let [fontsLoaded] = useFonts({
    Play_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStart}>Start</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    backgroundColor: '#6BD8BF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9EEED4',

    shadowColor: '#BEFCE1',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  textStart: {
    color: 'white',
    fontFamily: 'Play_700Bold',
    fontSize: 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default StartButton;
