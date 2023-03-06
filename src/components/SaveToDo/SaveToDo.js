/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './SaveToDo.style';

const SaveToDo = props => {

  return (
    <View style={styles.container}>
      <TextInput
        style={props.text > 0 ? styles.textInput : styles.textInput1}
        placeholder={'Yapilacaklar : '}
        value={props.text}
        onChangeText={props.saveText}
      />
       <TouchableOpacity style={props.text > 0 ? styles.btn1 : styles.btn}
          onPress={props.setUpdate}>
          <Text>KAYDET</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SaveToDo;
