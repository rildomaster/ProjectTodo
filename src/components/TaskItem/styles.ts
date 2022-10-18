import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#262626',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        height: 64,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#333333'
    },
    
    checkConcluded: {
        marginLeft: 6,
    },

    description: {
        flex: 1,
        fontSize: 14,
        color: '#F2F2F2',
    },
    descriptionConcluded: {
        flex: 1,
        fontSize: 14,
        color: '#808080',
        textDecorationLine: 'line-through'
    },

    buttonDelete: {
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDeletePress: {
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: '#333333',
    },
    buttonDeleteIcon:{
        height: 21,
        width: 21,
        tintColor: '#808080'
    },
    buttonDeleteIconPress:{
        height: 21,
        width: 21,
        tintColor: '#E25858'
    }
});