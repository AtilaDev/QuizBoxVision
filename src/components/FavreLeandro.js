import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  useFonts,
  Allan_400Regular,
  Allan_700Bold,
} from '@expo-google-fonts/allan';

function FavreLeandro() {
  let [fontsLoaded] = useFonts({
    Allan_400Regular,
    Allan_700Bold,
  });

  if (!fontsLoaded) return <View />;
  return (
    <View style={styles.container}>
      <Text style={styles.textBy}>Developed by</Text>
      <Text style={styles.textFavre}>@FavreLeandro</Text>
      <Text style={styles.textBBV}>for BlackBox Vision</Text>
      <Text style={styles.textBBV}>Challenge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textBy: {
    color: '#112F41',
    fontFamily: 'Allan_400Regular',
    fontSize: 20,
  },
  textFavre: {
    color: '#673AB7',
    fontFamily: 'Allan_700Bold',
    fontSize: 20,
  },
  textBBV: {
    color: '#B9F9DF',
    fontFamily: 'Allan_700Bold',
    fontSize: 20,
  },
});

export default FavreLeandro;
