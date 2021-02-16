import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Audio } from 'expo-av';

import Background from '../components/Background';
import LogoBox from '../components/LogoBox';
import StartButton from '../components/StartButton';
import FavreLeandro from '../components/FavreLeandro';

import { useApi } from '../api';
import CommonButton from '../components/CommonButton';

const start = require('../../assets/effects/start.mp3');

function Home({ navigation }) {
  const [sound, setSound] = useState();
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [noTimesPlayed, setNoTimesPlayed] = useState(false);

  async function readLengthFromDataChart() {
    const myData = await AsyncStorage.getItem('@quiz_box_game');
    if (myData) {
      return JSON.parse(myData).length;
    }
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(start);
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

  const startGame = async () => {
    playSound();
    const data = await useApi();
    setData(data);
    const timesPlayed = await readLengthFromDataChart();

    if (timesPlayed != 10) {
      await navigation.navigate('Game', { questions: data.results });
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Background style={styles.container}>
      <View style={styles.logoSection}>
        <Animatable.View animation="fadeInDown">
          <LogoBox />
        </Animatable.View>
      </View>
      <View style={styles.startButton}>
        <Animatable.View animation="zoomIn">
          <StartButton play={startGame} />
        </Animatable.View>
      </View>

      <View style={styles.progressButton}>
        <Animatable.View animation="zoomIn">
          <CommonButton
            text="Show Progress"
            color="#673AB7"
            onPress={async () => {
              const timesPlayed = await readLengthFromDataChart();
              if (timesPlayed) {
                navigation.navigate('Result', { onlyShow: true });
              } else {
                setNoTimesPlayed(true);
              }
            }}
          />
        </Animatable.View>
      </View>

      <View style={styles.devBy}>
        <Animatable.View animation="fadeInUp">
          <FavreLeandro />
        </Animatable.View>
      </View>
      <AwesomeAlert
        show={showAlert}
        message="You have played for 10 times. For play again you need reset statistics. If you continue these values will be removed."
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={true}
        showCancelButton={true}
        showConfirmButton={true}
        confirmText="Continue"
        confirmButtonColor="#5DD1B9"
        onCancelPressed={() => setShowAlert(false)}
        onConfirmPressed={() => {
          setShowAlert(false);
          AsyncStorage.removeItem('@quiz_box_game');
          navigation.navigate('Game', { questions: data.results });
        }}
      />

      <AwesomeAlert
        show={noTimesPlayed}
        message="You don't have any game played yet! You need at least one game played to draw a line chart."
        closeOnTouchOutside={false}
        closeOnHardwareBackPress={true}
        showCancelButton={true}
        cancelText="OK"
        cancelButtonColor="#5DD1B9"
        onCancelPressed={() => setNoTimesPlayed(false)}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoSection: {
    paddingTop: 120,
  },
  startButton: {
    marginTop: -10,
  },
  progressButton: {
    marginTop: -40,
  },
  devBy: {
    marginBottom: 30,
  },
});

export default Home;
