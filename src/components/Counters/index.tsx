import { View, Text } from "react-native";

import { styles } from "./styles";

import { CountType } from "../../types"

export function Counters(props: CountType) {
    return (
        <View style={styles.container}>

            <View style={styles.createdContainer}>
                <Text style={styles.createdText}>Criadas</Text>
                <Text style={styles.createdTextCount}>{props.createdCount}</Text>
            </View>

            <View style={styles.concludedContainer}>
                <Text style={styles.concludedText}>Concluídas</Text>
                <Text style={styles.concludedTextCount}>{props.concludedCount}</Text>
            </View>

        </View>
    );
}