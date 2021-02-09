import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { AppLoading } from 'expo-app-loading';
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

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ flexDirection: 'row' }}>
      <ResponsiveImage
        resizeMode="cover"
        source={require('../../assets/bbvLogo.png')}
        initWidth={87}
        initHeight={100}
      />
      <View style={{ marginLeft: 10, justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Ubuntu_700Bold', fontSize: 30 }}>
          BlackBox Vision
        </Text>
        <Text style={{ fontFamily: 'Ubuntu_400Regular', fontSize: 20 }}>
          QuizBox Vision
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 331,
    width: 289,
  },
});

export default LogoBox;
