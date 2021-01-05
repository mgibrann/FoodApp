import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";
import SearchDetail from "./src/screens/SearchDetail";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen name="Detail" component={SearchDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
