import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu';
import { convertChars, messArray } from '../utils';

import AnswerButton from './AnswerButton';
import QuestionPanel from './QuestionPanel';

const { width } = Dimensions.get('window');

function Card({ question, actualPos, total, nextPos }) {
  let pos = actualPos + 1;

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });

  if (!fontsLoaded) return <View />;

  const renderButtons = () => {
    const { incorrect_answers, correct_answer, type } = question;
    const answers = [...incorrect_answers, correct_answer];
    const messAnswers = messArray(answers);

    if (type === 'multiple') {
      return messAnswers.map((item) => (
        <AnswerButton
          textAnswer={convertChars(item)}
          key={item}
          nextPos={nextPos}
        />
      ));
    } else {
      return messAnswers.map((item) => (
        <AnswerButton
          textAnswer={convertChars(item)}
          key={item}
          nextPos={nextPos}
        />
      ));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.badgeCounter}>
        <Text style={styles.badgeText}>{pos + ' / ' + total}</Text>
      </View>
      <LinearGradient colors={['#fff', '#ddd']} style={styles.cardGradient}>
        <QuestionPanel>
          <Text style={styles.textQuestion}>
            {convertChars(question.question)}
          </Text>
        </QuestionPanel>

        <View style={styles.textSeparatorContainer}>
          <Text style={styles.textSeparator}>Your answer is...</Text>
        </View>

        <View style={styles.buttonsContainer}>{renderButtons()}</View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  cardGradient: {
    width: width * 0.8,
    borderRadius: 15,
    alignItems: 'center',
  },
  textQuestion: {
    color: '#fff',
    fontFamily: 'Ubuntu_400Regular_Italic',
    fontSize: 20,
  },
  buttonsContainer: {
    marginTop: 20,
  },
  textSeparatorContainer: {
    marginTop: 5,
    width: width * 0.5,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#673AB7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSeparator: {
    color: '#673AB7',
    fontFamily: 'Ubuntu_400Regular_Italic',
    fontSize: 18,
  },
  badgeCounter: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: '#fff',
    marginTop: -15,
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 30,

    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  badgeText: {
    fontSize: 15,
    fontFamily: 'Ubuntu_500Medium',
  },
});

export default Card;
