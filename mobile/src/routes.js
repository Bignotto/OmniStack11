import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Produtos from "./pages/Produtos";
import Detalhes from "./pages/Detalhes";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Produtos" component={Produtos} />
        <AppStack.Screen name="Detalhes" component={Detalhes} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
