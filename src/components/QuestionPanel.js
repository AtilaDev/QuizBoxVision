import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

function QuestionPanel({ children }) {
  return (
    <LinearGradient colors={['#311B92', '#673AB7']} style={styles.questionBox}>
      <View style={styles.viewContainer}>{children}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    width: width * 0.76,
    height: height * 0.18,
    borderRadius: 15,
    marginTop: 8,
  },
  viewContainer: {
    padding: 30,
  },
});

export default QuestionPanel;
