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
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5, 
    },
    description: {
        width: 300,
        height: 88,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5, 
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,               
    },
    button: {
        width: 300,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
})