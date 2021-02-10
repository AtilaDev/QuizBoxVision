import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import {
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_400Regular,
} from '@expo-google-fonts/ubuntu';

function LogoBox() {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_400Regular,
  });

  if (!fontsLoaded) return <View />;

  return (
    <View style={styles.container}>
      <ResponsiveImage
        source={require('../../assets/bbvLogo.png')}
        initWidth="87"
        initHeight="100"
      />
      <View style={styles.textContainer}>
        <Text style={styles.textBlackBox}>BlackBox Vision</Text>
        <Text style={styles.textQuizBox}>QuizBox Vision</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  textBlackBox: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 30,
  },
  textQuizBox: {
    fontFamily: 'Ubuntu_400Regular',
    fontSize: 20,
  },
});

export default LogoBox;
