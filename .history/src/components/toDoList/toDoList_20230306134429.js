/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './toDoList.style';

const toDoList = (props) => {
    
    const [HelloFlag, setHelloFlag] = useState(true);

    function updateFlag(){
        setHelloFlag(!HelloFlag);
    }
    return(
        <View>
            <TouchableOpacity onPress={updateFlag}>
                <Text style={HelloFlag ? styles.txtbox : styles.txtbox1}>{props.setTodo.item.title}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default toDoList;
