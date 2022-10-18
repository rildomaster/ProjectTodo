import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from 'react';

import { styles } from "./styles";

import { SearchType } from '../../types'

export function Search(props: SearchType) {

    const [text, setText] = useState('');

    function handleSearch() {
        props.onClick(text);
        setText('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa" 
                placeholderTextColor={'#808080'}
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
                <Image 
                    style={styles.buttonIcon}
                    source={require('../../../assets/images/icons/plus32.png')}
                />
            </TouchableOpacity>
        </View>
    );
}