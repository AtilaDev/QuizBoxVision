import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import { useFonts } from '@expo-google-fonts/play';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../components/Background';

function Result({ route, navigation }) {
  const { totalPoints } = route.params;
  const [dataChart, setDataChart] = useState([]);

  const readFromDataChart = async () => {
    const myData = await AsyncStorage.getItem('@quiz_box_game');
    if (myData) {
      setDataChart(JSON.parse(myData));
    }
  };

  useEffect(() => {
    readFromDataChart();
  }, []);

  return (
    <>
      <Background style={styles.container}>
        <Text style={{ fontSize: 30 }}>Game Over!</Text>
        <Text style={{ fontSize: 40 }}>Total Points: {totalPoints}</Text>

        <Chart
          style={{ height: 200, width: 400, marginTop: 40 }}
          data={dataChart}
          padding={{ left: 60, bottom: 20, right: 60, top: 20 }}
          xDomain={{ min: 1, max: 10 }}
          yDomain={{ min: 0, max: 100 }}
          viewport={{ size: { width: 5 } }}>
          <VerticalAxis
            tickCount={11}
            theme={{ labels: { formatter: (v) => v } }}
          />
          <HorizontalAxis tickCount={10} />
          <Area
            theme={{
              gradient: {
                from: { color: '#5DD1B9' },
                to: { color: '#5DD1B9', opacity: 0.4 },
              },
            }}
          />
          <Line
            theme={{
              stroke: { color: '#5DD1B9', width: 4 },
              scatter: { default: { width: 4, height: 4, rx: 2 } },
            }}
          />
        </Chart>

        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />

        <Button
          title="Delete Data"
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('@quiz_box_game');
            } catch (e) {}
          }}
        />
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Result;
