import {createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Personagens from './pages/personagens';
import Desenvolvedor from './pages/desenvolvedor';

var t = false;
const Dev = Desenvolvedor;

const BottomMenu = createBottomTabNavigator (
    {
        Personagens:Personagens,
        Desenvolvedor:Dev
    },{
        tabBarVisible: false,
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
        inactiveBackgroundColor: "#85ACD6",
        activeBackgroundColor: "#BECEDD",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
            style: {
                height: 75
            }
        }
    }
);

export default createAppContainer(BottomMenu);