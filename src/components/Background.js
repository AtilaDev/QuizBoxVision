import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Background(props) {
  return (
    <LinearGradient colors={['#BEFCE1', '#5DD1B9']} {...props}>
      <SafeAreaView {...props}>{props.children}</SafeAreaView>
    </LinearGradient>
  );
}

export default Background;
