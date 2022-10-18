import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        //width: '100%',
        flexDirection: 'row',
        marginTop: -25
    },

    input: {
        //width: '70%',
        flex: 1,
        backgroundColor: '#262626',
        height: 54,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
        color: '#F2F2F2',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        marginRight: 6,
    },

    button: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        height: 16,
        width: 16
    }
});