import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    input: {

    },
    textinput: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 200,        
    },
    button: {
        backgroundColor: '#575DD9',
        borderColor: 'black',
        alignItems: 'center',
        width: 95,
        height: 30,
        borderWidth: 1,
        padding: 5,
    }
})