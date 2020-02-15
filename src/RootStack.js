import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Home from "./Home";
import Detail from "./Detail";

const StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    DetailScreen: {
        screen: Detail,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);