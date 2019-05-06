import React ,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import BaseStyles from '../assets/estilizacao/padrao';

class TituloPagina extends Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <View style={{...styles.BordaTitulo,...BaseStyles.Sombra}}>
                <Text style={{...styles.Titulo,...BaseStyles.BordaSolida}}>{this.props.Titulo}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Titulo: {
        //padding e margin
        paddingBottom:5,
        marginRight:50,
        marginLeft:50,
        // texto
        textAlign:"center",
        fontSize:30,
        color:'white',
        // bordas
        borderBottomColor:'white'
    },
    BordaTitulo:{                
        paddingTop:10,
        paddingBottom:20,
        backgroundColor: "#85ACD6"
    }
});

export default TituloPagina;
