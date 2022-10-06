import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import buttomTabNavigator from './buttomTabNavigator';
export default createAppContainer(
    createSwitchNavigator(
      {
        AuthLoad: AuthLoadingScreen,
        // Home: HomeScreen,
        MainMenu: buttomTabNavigator,
      },
      {
        initialRouteName: 'AuthLoad',
        //initialRouteName: 'ProFile',
        headerMode: 'none',
        mode: 'modal',
        transparentCard: true,
        cardStyle: {
          backgroundColor: 'transparent',
          opacity: 1,
        },
      },
    ),
  );