import { View, Image, Text } from "react-native";

import { styles } from "./styles";

export function ContentEmpty() {
    return (
        <View style={styles.container} >
            <Image 
                source={require('../../../assets/images/imageEmpty.png')} 
                style={styles.image}
            />

            <Text style={styles.textTitle}>
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text style={styles.textSubTitle}>
                Crie tarefas e organize seus itens a fazer
            </Text>

        </View>
    );
}