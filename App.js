import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import "react-native-gesture-handler"; // dependency for @react-navigation/stack see https://reactnavigation.org/docs/stack-navigator for details
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider value={{ restaurants: [1, 2, 3] }} >
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
