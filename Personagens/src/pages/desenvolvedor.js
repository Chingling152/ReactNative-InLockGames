import {Text , View,StyleSheet, Image} from 'react-native';
import React , {Component} from 'react';

class Desenvolvedor extends Component {
    static navigationOptions ={
        tabBarIcon:({tintColor}) =>(
            <Image
            source={require("../assets/icones/programming.png")}
            style={styles.tabNavigatorIcon}
        />
        )
    }
    render() {
      return (
        <View>
            <Text>DesenBolBedor</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    tabNavigatorIcon: { width: 25, height: 25, tintColor: "#FFFFFF" }
  });

  export default Desenvolvedor;