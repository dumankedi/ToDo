import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import SaveToDo from './components/SaveToDo';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <SaveToDo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
