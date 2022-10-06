import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { connect, useSelector } from 'react-redux';
import HomeScreen from "../screens/HomeScreen";
import HomeaddphotoScreen from '../screens/HomeaddphotoScreen';
const HomeStack = createNativeStackNavigator();
function HomeStackScreen({ navigation, goBack }) {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Addphoto" component={HomeaddphotoScreen} />
        </HomeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function ButtomTab(props, { navigation }) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Main"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        var tabIcon;
                        if (route.name === 'หน้าแรก') {
                            iconName = 'home';
                            size = focused ? 30 : 25;
                        } else if (route.name === 'อื่นๆ') {
                            // iconName = focused ? 'ios-list' : 'ios-list';
                            iconName = 'bars';
                            size = focused ? 30 : 25;
                        } else if (route.name === 'ร้านค้า') {
                            // iconName = focused ? 'ios-list' : 'ios-list';
                            iconName = 'shoppingcart';
                            size = focused ? 30 : 25;
                        }
                        return <AntDesign name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: props.Darkblue,
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="หน้าแรก" component={HomeStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const mapStateToProps = (state) => state.GlobalReducer;
export default connect(mapStateToProps)(ButtomTab);