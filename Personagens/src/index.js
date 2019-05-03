import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Personagens from './pages/personagens';
import Desenvolvedor from './pages/desenvolvedor';

const Dev = Desenvolvedor;

const BottomMenu = createBottomTabNavigator (
    {
        Personagens:Personagens,
        Desenvolvedor:Dev
    },{
        swipeEnabled: false,
        tabBarOptions: {
        labelStyle: {
            fontSize: 14,
        },
        showLabel: true,
        showIcon: true,
        indicatorStyle: {
            backgroundColor: "#FFFFFF",
        },
        inactiveBackgroundColor: "black",
        pressColor: "#A0DBEE",
        inactiveBackgroundColor: "#A0DBEE",
        activeBackgroundColor: "#C7EAF6",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
            style: {
            height: 75,
            shadowColor: '#B3D6F9',
            shadowOffset: {
                width: 0,
                height: -7,
            },
            shadowOpacity: 0.94,
            shadowRadius: 9.11,
                
            elevation: 13
            }
        }
    }
);

export default createAppContainer(BottomMenu);