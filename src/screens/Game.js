import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';
import HeaderGame from '../components/HeaderGame';

function Game({ route, navigation }) {
  const [pos, setPos] = useState(0);
  const { questions } = route.params;

  const nextPos = () => {
    if (pos < 9) {
      setPos(pos + 1);
    } else {
      console.log('Game over!');
    }
  };

  const renderCards = () => {
    if (pos < questions.length) {
      return (
        <Background style={styles.container}>
          <HeaderGame
            category={questions[pos].category}
            difficulty={questions[pos].difficulty}
          />
          <View style={styles.cardContainer}>
            <Animatable.View animation="bounceInRight">
              <Card
                question={questions[pos]}
                actualPos={pos}
                total={questions.length}
                nextPos={nextPos}
              />
            </Animatable.View>
          </View>
        </Background>
      );
    }
  };

  return renderCards();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 50,
  },
});

export default Game;
