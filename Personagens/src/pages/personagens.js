import { StyleSheet, Image, View } from 'react-native';
import React, { Component } from 'react';
import Personagem from '../componentes/personagem.js'
import TituloPagina from '../componentes/tituloPagina.js';
import { ScrollView } from 'react-native-gesture-handler';
import BaseStyles from '../assets/estilizacao/padrao';

class Personagens extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/icones/superhero.png")}
                style={BaseStyles.tabNavigatorIcon}
            />
        )
    }
    constructor() {
        super();
        this.state = {
            personagens: []
        }
    }

    componentDidMount() {
        this.buscarValores();
    }
    buscarValores = async () => {
        await
            fetch("https://salty-atoll-57329.herokuapp.com/personagens")
                .then(resultado =>
                    resultado.json()
                        .then(
                            i => this.setState(
                                {
                                    personagens: i
                                }
                            )
                        )
                )
                .catch(erro => console.error(erro))
    }

    render() {
        return (
            <View style={BaseStyles.Corpo}>
                <TituloPagina Titulo="Personagens"></TituloPagina>
                <ScrollView>
                    {
                        this.state.personagens.map(
                            i => {
                                return (
                                    <Personagem
                                        key={this.state.personagens.indexOf(i)}
                                        Imagem={i.urlImagem}
                                        Nome={i.nome}
                                        Titulo={i.titulo}
                                        DataLancamento={i.lancamento}
                                    />
                                );
                            }
                        )
                    }
                </ScrollView>
            </View>
        )
    }

}

export default Personagens;