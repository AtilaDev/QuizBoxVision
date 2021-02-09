import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Card() {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Card;
