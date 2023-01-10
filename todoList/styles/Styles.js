import {StyleSheet} from "react-native";

let Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginLeft: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#55BCF6',
        borderWidth: 1,
        width: 320,
        height: 60,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#55BCF6',
        marginRight: 10,
    },
    addText: {
        fontSize: 25,
        color: '#55BCF6',
    },
});
export default Styles;