import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop: 25,
        justifyContent: 'center', 
        alignItems: 'center',       
    },
    anuncios: {
        height: '90%',
        width: '95%',   
    },
    anuncio: {
        padding: 10,
        height: 250,   
        borderWidth: 1,
        borderRadius: 5, 
        borderColor: 'black',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        padding: 10,
    }
})