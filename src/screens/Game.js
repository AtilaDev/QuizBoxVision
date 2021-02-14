import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';
import HeaderGame from '../components/HeaderGame';

function Game({ route }) {
  const [pos, setPos] = useState(0);
  const { questions } = route.params;

  const nextPos = () => {
    setPos(pos + 1);
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
                question={questions[0]}
                actualPos={pos + 1}
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
