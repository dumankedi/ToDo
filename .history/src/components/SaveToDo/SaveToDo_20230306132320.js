/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Button, TextInput, View, Pressable, Text} from 'react-native';
import styles from './SaveToDo.style';

const SaveToDo = props => {
  const [text, setText] = useState(0);
  

  function saveText(){
    props.saveText(text);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder={'Yapılacaklar : '}
        placeholderTextColor={'#808080'}
        value={text}
      />
      <Pressable onPress={saveText}>
        <Text> I'm pressable! </Text>
      </Pressable>
    </View>
  );
};

export default SaveToDo;
