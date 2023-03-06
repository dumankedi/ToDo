/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import styles from './SaveToDo.style';

const SaveToDo = props => {

  return (
    <View style={styles.container}>
      <TextInput
        style={props.text.length > 0 ? styles.textInput : styles.textInput}
        placeholder={'Yapilacaklar : '}
        placeholderTextColor={'#808080'}
        value={props.text}
        onChangeText={props.saveText}
      />
       <TouchableOpacity style={props.text.length > 0 ? styles.btn1 : styles.btn}
          onPress={props.setUpdate}>
          <Text>KAYDET</Text>
        </TouchableOpacity>
    </View>
  );
};

export default SaveToDo;
