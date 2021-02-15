import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from '../components/Background';
import Card from '../components/Card';
import HeaderGame from '../components/HeaderGame';

function Game({ route }) {
  const [pos, setPos] = useState(0);
  const { questions } = route.params;

  const animationRightRef = useRef();
  const animationLeftRef = useRef();

  const bounce = () => {
    animationRightRef.current.bounceInRight(1200);
    animationLeftRef.current.bounceInLeft(1200);
  };

  const nextPos = () => {
    if (pos < 9) {
      setPos(pos + 1);
      bounce();
    }
  };

  const renderCards = () => {
    if (pos < questions.length) {
      return (
        <Background style={styles.container}>
          <Animatable.View ref={animationLeftRef}>
            <HeaderGame
              category={questions[pos].category}
              difficulty={questions[pos].difficulty}
            />
          </Animatable.View>
          <View style={styles.cardContainer}>
            <Animatable.View ref={animationRightRef}>
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
