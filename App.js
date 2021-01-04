import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Business Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
