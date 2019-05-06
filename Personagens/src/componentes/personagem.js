import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import BaseStyles from '../assets/estilizacao/padrao';

class Personagem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.CorpoPersonagem}>
                <Image
                    source={{ uri: this.props.Imagem.toString() }}
                    style={BaseStyles.Foto}
                />
                <View style={{...styles.InformacoesPersonagem,...BaseStyles.Sombra}}>
                    <Text style={styles.InformacaoPersonagem}>
                        <Text>Nome :</Text> {this.props.Nome}
                    </Text>
                    <Text style={styles.InformacaoPersonagem}>
                        <Text>Titulo :</Text> {this.props.DataLancamento.split("(")[0]}
                    </Text>
                    <Text style={styles.InformacaoPersonagem}>
                        <Text>Ano de Lançamento :</Text> {this.props.DataLancamento.split("(")[1].replace(")", "")}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    CorpoPersonagem: {
        // margin /padding
        margin: 10,
        padding: 10,
        // flex
        flex: 1,
        flexDirection: "row",
        // Bordas
        backgroundColor: 'white'
    },
    InformacoesPersonagem:{
        padding:10,
        flex:1,
        justifyContent:'center'
    },
    InformacaoPersonagem:{
        fontSize:15,
        paddingTop:10,
        paddingBottom:10,
    },

});

export default Personagem;
