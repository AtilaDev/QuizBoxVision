import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  useFonts,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
} from '@expo-google-fonts/ubuntu';
import { convertChars } from '../utils';

import AnswerButton from './AnswerButton';

const { width, height } = Dimensions.get('window');

function Card() {
  const [question, setQuestion] = React.useState(
    'What is the name of Cream the Rabbit&#039;s mom in the &quot;Sonic the Hedgehog&quot; series?'
  );

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
  });

  if (!fontsLoaded) return <View />;

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#fff', '#ddd']} style={styles.cardGradient}>
        <LinearGradient
          colors={['#311B92', '#673AB7']}
          style={styles.questionBox}>
          <View style={{ padding: 30 }}>
            <Text style={styles.textQuestion}>{convertChars(question)}</Text>
          </View>
        </LinearGradient>

        <View style={styles.textSeparatorContainer}>
          <Text style={styles.textSeparator}>Your answer is...</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <AnswerButton textAnswer="Option 1" />
          <AnswerButton textAnswer="Option 2" />
          <AnswerButton textAnswer="Option 3" />
          <AnswerButton textAnswer="Option 4" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    height: height * 0.6,
    borderRadius: 15,
    alignItems: 'center',
  },
  questionBox: {
    width: width * 0.76,
    height: height * 0.25,
    borderRadius: 15,
    marginTop: 8,
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
});

export default Card;
