import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#FFF',

        flexDirection: 'row',
        width: '100%',
        marginTop: 24,
        marginBottom: 24
    },

    createdContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    createdText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4EA8DE',
        marginRight: 8,
    },
    createdTextCount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D9D9D9',
        width: 36,
        backgroundColor: '#333333',
        padding: 4,
        borderRadius: 12,
        textAlign: 'center'
    },


    concludedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    concludedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8284FA',
        marginRight: 8,
    },
    concludedTextCount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D9D9D9',
        width: 36,
        backgroundColor: '#333333',
        padding: 4,
        borderRadius: 12,
        textAlign: 'center'
    },
});