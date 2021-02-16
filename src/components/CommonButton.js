import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

const { width } = Dimensions.get('window');

function CommonButton({ text, onPress }) {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <View />;
  return (
    <TouchableOpacity style={{ marginBottom: 10 }} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.76,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#673AB7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#673AB7',
    fontFamily: 'Ubuntu_700Bold',
  },
});

export default CommonButton;
