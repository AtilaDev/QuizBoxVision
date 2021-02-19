import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  useFonts,
  Allan_400Regular,
  Allan_700Bold,
} from '@expo-google-fonts/allan';
import { Entypo } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

function FavreLeandro() {
  let [fontsLoaded] = useFonts({
    Allan_400Regular,
    Allan_700Bold,
  });

  const openMyTwitterProfile = () => {
    Linking.openURL('https://twitter.com/FavreLeandro');
  }

  if (!fontsLoaded) return <View />;
  return (
    <TouchableOpacity style={styles.container} onPress={openMyTwitterProfile}>
      <Text style={styles.textBy}>Developed by</Text>
      <Text style={styles.textFavre}>
        {'>>  '}
        <Entypo name="twitter" size={24} color="#673AB7" />
        @FavreLeandro
        {'  <<'}
      </Text>
      <Text style={styles.textBBV}>for BlackBox Vision</Text>
      <Text style={styles.textBBV}>Challenge</Text>
    </TouchableOpacity>
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
    fontSize: 20    
  },
  textBBV: {
    color: '#666',
    fontFamily: 'Allan_700Bold',
    fontSize: 20,
  },
});

export default FavreLeandro;
