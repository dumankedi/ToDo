import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '102027',
  },
});

export default App;
