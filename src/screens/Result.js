import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  useFonts,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
} from '@expo-google-fonts/ubuntu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';

import Background from '../components/Background';
import LineChart from '../components/LineChart';
import CommonButton from '../components/CommonButton';

function Result({ route, navigation }) {
  const { totalPoints, onlyShow } = route.params;
  const [dataChart, setDataChart] = useState([]);
  const [average, setAverage] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_700Bold,
    Ubuntu_500Medium,
  });

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

  if (!fontsLoaded) return <View />;

  return (
    <>
      <Background style={styles.container}>
        {onlyShow && (
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Ubuntu_700Bold',
              lineHeight: 40,
            }}>
            Yours results by now!
          </Text>
        )}
        {!onlyShow && (
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Ubuntu_400Regular_Italic',
              lineHeight: 40,
            }}>
            GAME OVER!
          </Text>
        )}
        {!onlyShow && (
          <Text
            style={{
              fontSize: 40,
              fontFamily: 'Ubuntu_700Bold',
            }}>
            Total Points: {totalPoints}
          </Text>
        )}

        <Text style={{ fontSize: 20, fontFamily: 'Ubuntu_400Regular' }}>
          You have played {dataChart.length} / 10 times!
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'Ubuntu_400Regular' }}>
          Your general average is: {average.toFixed(2)}
        </Text>

        <LineChart dataChart={dataChart} />

        <View style={{ marginTop: 50 }}>
          <CommonButton
            text="Back to Home"
            color="#673AB7"
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <CommonButton
            text="Delete Results"
            color="red"
            onPress={() => setShowAlert(true)}
          />
        </View>

        <AwesomeAlert
          show={showAlert}
          message="This action will delete all progress until now. Are you sure to do this?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={true}
          showCancelButton={true}
          showConfirmButton={true}
          confirmText="Yes, please!"
          cancelText="No, cancel!"
          cancelButtonColor="#000"
          confirmButtonColor="red"
          onCancelPressed={() => setShowAlert(false)}
          onConfirmPressed={() => {
            setShowAlert(false);
            AsyncStorage.removeItem('@quiz_box_game');
            navigation.navigate('Home');
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
    paddingTop: 30,
  },
});

export default Result;
