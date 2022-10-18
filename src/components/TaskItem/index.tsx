import { View, Text, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { useState, useEffect } from 'react';

import { styles } from "./styles";

import { TaskItemType } from "../../types";

export function TaskItem(props: TaskItemType) {

    const [isChecked, setIsChecked] = useState(false);
    const [buttonDeletePress, setButtonDeletePress] = useState(false);

    useEffect(() => 
    {
        //Alert.alert(isChecked ? 'Marcou' : 'Desmarcou');
        props.onCheck(props.id, props.description, isChecked)

    }, [isChecked]);

    return (
        <View style={styles.container}>

            <BouncyCheckbox
                style={styles.checkConcluded}
                isChecked={props.concluded}
                //isChecked={isChecked}
                fillColor='#4EA8DE'
                onPress={setIsChecked}
                //onPress={() => props.onCheck(props.id, props.description, props.concluded)}
            />

            <Text 
                style={ isChecked ? styles.descriptionConcluded : styles.description} 
                numberOfLines={2}
            >
                {props.description}
            </Text>

            <TouchableOpacity 
                style={ buttonDeletePress ? styles.buttonDeletePress : styles.buttonDelete }
                onPressIn={ () => setButtonDeletePress(true)}
                onPressOut={ () => setButtonDeletePress(false)}
                onPress={ () => props.onDelete(props.id, props.description) }
            >
                <Image
                    style={ buttonDeletePress ? styles.buttonDeleteIconPress : styles.buttonDeleteIcon }
                    source={require('../../../assets/images/icons/delete32.png')}
                />
            </TouchableOpacity>

        </View>
    );
}