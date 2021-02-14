import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';
import HeaderGame from '../components/HeaderGame';

function Game({ route, navigation }) {
  const [pos, setPos] = useState(0);
  const { questions } = route.params;

  const animationRef = useRef();

  const bounce = () => animationRef.current.bounceInRight(1200);

  // console.log(pos);
  const nextPos = () => {
    if (pos < 9) {
      setPos(pos + 1);
      bounce();
    } else {
      console.log('fin juego');
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
            <Animatable.View ref={animationRef}>
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
