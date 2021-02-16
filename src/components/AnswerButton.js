import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useFonts, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const { width } = Dimensions.get('window');

let totalPoints = 0;

const correct = require('../../assets/effects/correct.mp3');
const fail = require('../../assets/effects/fail.mp3');
const game_over = require('../../assets/effects/game_over.mp3');

function AnswerButton({ textAnswer, nextPos, type, correctAnswer, actualPos }) {
  const navigation = useNavigation();
  const [sound, setSound] = useState();

  async function playSound(create_sound) {
    const { sound } = await Audio.Sound.createAsync(create_sound);
    setSound(sound);

    try {
      await sound.playAsync();
    } catch (e) {}
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <View />;

  const handleOnPress = () => {
    nextPos();

    switch (type) {
      case 'multiple':
        if (textAnswer == correctAnswer) {
          playSound(correct);
          totalPoints += 10;
        } else {
          playSound(fail);
        }
        break;
      case 'boolean':
        if (textAnswer == correctAnswer) {
          playSound(correct);
          totalPoints += 5;
        } else {
          playSound(fail);
        }
        break;
    }

    const storeData = async (value) => {
      try {
        const myData = await AsyncStorage.getItem('@quiz_box_game');
        if (myData) {
          const myDataParsed = JSON.parse(myData);

          myDataParsed.push({
            x: myDataParsed.length + 1,
            y: value,
          });

          await AsyncStorage.setItem(
            '@quiz_box_game',
            JSON.stringify(myDataParsed)
          );
        } else {
          try {
            const data = [
              {
                x: 1,
                y: value,
              },
            ];
            const jsonValue = JSON.stringify(data);

            await AsyncStorage.setItem('@quiz_box_game', jsonValue);
          } catch (e) {}
        }
      } catch (e) {}
    };

    if (actualPos === 9) {
      let finalPoints = totalPoints;
      totalPoints = 0;

      setTimeout(async () => {
        playSound(game_over);
        await storeData(finalPoints);
        navigation.navigate('Result', {
          totalPoints: finalPoints,
          onlyShow: false,
        });
      }, 600);
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
