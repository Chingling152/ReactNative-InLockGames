import {StyleSheet , Image} from 'react-native';
import React , {Component} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Personagem from '../componentes/personagem'

class Personagens extends Component {
    static navigationOptions ={
        tabBarIcon:({tintColor}) =>(
            <Image
            source={require("../assets/icones/superhero.png")}
            style={styles.tabNavigatorIcon}
        />
        )
    }
    constructor(){
        super();
        this.state = {
            personagem:[
                {
                    Imagem: "http://supercinemaup.com/wp-content/uploads/2017/05/homem-aranha.jpg",
                    Nome:"Nome",
                    Titulo:"Titulo",
                    DataLancamento:"11/11/1111"
                }
            ]
        }
    }

    componentDidMount(){

    }

    render() {
        //console.error(this.state.personagem);
      return (
          <View>     
            {
                this.state.personagem.map(
                    i =>{
                        <Personagem 
                            Imagem={i.Imagem}
                            Nome = {i.Nome}
                            Titulo = {i.Titulo}
                            DataLancamento = {i.DataLancamento}
                        />
                    }
                )
            }
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tabNavigatorIcon: { width: 25, height: 25, tintColor: "#FFFFFF" }
  });

  export default Personagens;