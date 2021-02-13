import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const isAndroid = Platform.OS === 'android';

function HeaderGame() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#5DD1B9', '#BEFCE1']} style={styles.infoView}>
        <View style={styles.textView}>
          <Text style={styles.categoryText}>
            Category: {'Science & Nature'}
          </Text>
          <Text style={styles.difficultyText}>Difficulty: {'easy'}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: isAndroid ? height * 0.11 : height * 0.04,

    shadowColor: '#FFD180',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  infoView: {
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FFCC80',
    width: width * 0.7,
    paddingVertical: height * 0.02,
  },
  textView: {
    paddingLeft: 20,
  },
  categoryText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
  },
  difficultyText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HeaderGame;
