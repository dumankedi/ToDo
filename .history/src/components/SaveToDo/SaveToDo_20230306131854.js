/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import styles from './SaveToDo.style';

const SaveToDo = (props) => {
  const [text, setText] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder={'Yapılacaklar : ' + text}
        placeholderTextColor={'#808080'}
        value={text}
        onChangeText={text => setText(text)}
      />
    </View>
  );
};

export default SaveToDo;
