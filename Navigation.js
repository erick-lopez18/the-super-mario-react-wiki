import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MainMenuScreen from './screens/MainMenuScreen';
import CharTableScreen from './screens/CharTableScreen';
import GameTableScreen from './screens/GameTableScreen';
import PlatformTableScreen from './screens/PlatformTableScreen';
import CharFavScreen from './screens/CharFavScreen';
import GameFavScreen from './screens/GameFavScreen';
import PlatformFavScreen from './screens/PlatformFavScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const FavoritesNavigator = () => (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { height: 90, backgroundColor: '#2c2929' },
        textStyle: { fontSize: 12 },
        tabBarLabelStyle: { fontSize: 14, paddingTop: 25, color: 'white' },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarIndicatorStyle: { backgroundColor: 'red' },
      }}
    >
        <Tab.Screen name="CharFav"
            component={CharFavScreen}
            options={{
                title: 'Personajes favoritos',
            }}
        />
        <Tab.Screen name="GameFav"
            component={GameFavScreen}
            options={{
                title: 'Juegos favoritos',
            }}
        />
        <Tab.Screen name="PlatformFav"
            component={PlatformFavScreen}
            options={{
                title: 'Plataformas favoritos',
            }}
        />
    </Tab.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainMenu">
                <Stack.Screen name="MainMenu"
                    component={MainMenuScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="CharTable" component={CharTableScreen} />
                <Stack.Screen name="GameTable"
                    component={GameTableScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="PlatformTable" component={PlatformTableScreen} />
                <Stack.Screen name="Favorites"
                    component={FavoritesNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
