import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

let totalPoints = 0;

function AnswerButton({ textAnswer, nextPos, type, correctAnswer, actualPos }) {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <View />;

  const handleOnPress = () => {
    nextPos();

    switch (type) {
      case 'multiple':
        if (textAnswer == correctAnswer) {
          totalPoints += 10;
        }
        break;
      case 'boolean':
        if (textAnswer == correctAnswer) {
          totalPoints += 5;
        }
        break;
    }

    if (actualPos === 9) {
      let finalPoints = totalPoints;
      totalPoints = 0;
      navigation.navigate('Result', { totalPoints: finalPoints });
    }
  };

  return (
    <TouchableOpacity style={{ marginBottom: 10 }} onPress={handleOnPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.textButton}>{textAnswer}</Text>
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

export default AnswerButton;
