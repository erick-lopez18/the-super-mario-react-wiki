import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenuScreen from './screens/MainMenuScreen';
import DataTableScreen from './screens/DataTableScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainMenu">
                <Stack.Screen name="MainMenu" component={MainMenuScreen} />
                <Stack.Screen name="DataTable" component={DataTableScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
