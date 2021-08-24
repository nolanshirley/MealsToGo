import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavoritesScreen } from "../../features/settings/screens/favorites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerMode: "screen"
            }}
        >
            <SettingsStack.Screen
            options={{
                header: () => null,
            }}
            name="Settings"
            component={SettingsScreen}
            />
            <SettingsStack.Screen options={{ header: () => null }} name="Favorites" component={FavoritesScreen} />
        </SettingsStack.Navigator>
    );
}
