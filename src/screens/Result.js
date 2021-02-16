import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from '@expo-google-fonts/play';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Background from '../components/Background';
import LineChart from '../components/LineChart';
import CommonButton from '../components/CommonButton';

function Result({ route, navigation }) {
  const { totalPoints, onlyShow } = route.params;
  const [dataChart, setDataChart] = useState([]);
  const [average, setAverage] = useState(0);

  const readFromDataChart = async () => {
    const myData = await AsyncStorage.getItem('@quiz_box_game');
    if (myData) {
      const myDataParsed = JSON.parse(myData);

      let sumTotal = myDataParsed
        .map((item) => {
          return item.y;
        })
        .reduce((acc, value) => acc + value);

      setAverage(sumTotal / myDataParsed.length);
      setDataChart(myDataParsed);
    }
  };

  useEffect(() => {
    readFromDataChart();
  }, []);

  return (
    <>
      <Background style={styles.container}>
        {onlyShow && (
          <Text style={{ fontSize: 30 }}>Yours results by now!</Text>
        )}
        {!onlyShow && <Text style={{ fontSize: 30 }}>Game Over!</Text>}
        {!onlyShow && (
          <Text style={{ fontSize: 40 }}>Total Points: {totalPoints}</Text>
        )}

        <Text style={{ fontSize: 17 }}>
          You have played {dataChart.length} / 10 times!
        </Text>
        <Text style={{ fontSize: 20 }}>
          Your general average is: {average.toFixed(2)}
        </Text>

        <LineChart dataChart={dataChart} />

        <View style={{ marginTop: 50 }}>
          <CommonButton
            text="Back to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
});

export default Result;
