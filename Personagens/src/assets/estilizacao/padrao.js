import {StyleSheet} from 'react-native';

export default BaseStyles = StyleSheet.create({
    Sombra:{
		shadowOffset: {
            width: 10,
            height: -10
        },
        shadowOpacity: 0.94,
        shadowRadius: 9.11,
        elevation: 13
    },
    BordaSolida:{
        borderBottomWidth:2,
        borderStyle:'solid'
    },
    Foto:{
        width: 150,
		height: 150
    },
    tabNavigatorIcon: {
		width: 25, height: 25,
		tintColor: "#FFFFFF"
    },
    Corpo:{
        flex:1,
        backgroundColor: "#5C80A3"
    }
});