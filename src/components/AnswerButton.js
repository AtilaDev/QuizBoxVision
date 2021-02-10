import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

const { width } = Dimensions.get('window');

function AnswerButton(props) {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <TouchableOpacity style={{ marginBottom: 10 }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>{props.textAnswer}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.76,
    height: 40,
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

export default AnswerButton;
