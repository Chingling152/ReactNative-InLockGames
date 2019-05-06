import { Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import TituloPagina from '../componentes/tituloPagina';
import { ScrollView } from 'react-native-gesture-handler';
import BaseStyles from '../assets/estilizacao/padrao';

class Desenvolvedor extends Component {

	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
			<Image
				source={require("../assets/icones/programming.png")}
				style={BaseStyles.tabNavigatorIcon}
			/>
		)
	}
	render() {
		return (
			<View style={BaseStyles.Corpo}>
				<TituloPagina Titulo="Desenvolvedor"/>
				<ScrollView style={{...BaseStyles.Sombra,...Padrao.CorpoDesenvolvidor}}>
					<View style={{...Padrao.CorpoDesenvolvidor,paddingLeft:0,paddingRight:0}}> 
						<View style={{...styles.FotoDesenvolvedor,...BaseStyles.Foto,flex:1}}>
							<Image source={require('../assets/fotos/me.jpg')} style={{width:'100%',height:'175%',resizeMode:'contain'}}/>
						</View>
						<Text style={styles.NomeDesenvolvedor}>Franklin Bitencourt Dantas</Text>
						<Text style={{ textAlign: "center", fontSize: 14 }}>Desenvolvedor back-end</Text>
					</View>
					<View style={styles.TopoDesenvolvedor}>
						<Text style={styles.EnfasePequena}>
							Não tenho uma foto boa
						</Text>
						<Text style={{ textAlign: "center"}}>
							Não sei o que colocar aqui mas vai ser um textão chato sobre mim
						</Text>
						<Text style={{ textAlign: "center"}}>
							Aqui tambem
						</Text>
						<Text style={{ textAlign: "center"}}>
							A pagina não tá finalizada....
						</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	NomeDesenvolvedor: {
		fontSize: 20,
		marginBottom:10,
		textAlign:'center'
	},
	TopoDesenvolvedor: {
		// tamanho e padding
		width: '80%',
		padding: 10,
		// bordas
		borderBottomColor: 'gray',
		//cor e posição
		backgroundColor: 'white',
		alignSelf: 'center',
	},
	FotoDesenvolvedor: {
		alignSelf: 'center',
		backgroundColor: 'gray',
		borderRadius: 100,
		overflow: 'hidden',
		marginBottom: 10
	},
	InformacoesDesenvolvedor:{
		fontWeight:'bold'
	},
	EnfasePequena:{ 
		textAlign: "center",
		fontStyle:'italic',
		marginBottom:5,
		fontWeight:'200'
	}
});

const Padrao = StyleSheet.create({
	CorpoDesenvolvidor:{
		...styles.TopoDesenvolvedor,
		...BaseStyles.BordaSolida
	}
});

export default Desenvolvedor;