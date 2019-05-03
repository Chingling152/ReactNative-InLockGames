import React ,{Component} from 'react';
import {View,Image,StyleSheet} from 'react-native';

class Personagem extends Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <View>
                <Image            
                    source={this.props.Imagem}
                    style={styles.ImagemPersonagem} 
                />
                <Text>{this.props.Nome}</Text>
                <Text>{this.props.Titulo}</Text>
                <Text>{this.props.DataLancamento}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    ImagemPersonagem: {
        width:100,
        height:100
    }
});

export default Personagem;
