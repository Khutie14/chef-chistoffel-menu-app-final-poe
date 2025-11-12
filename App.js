import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";
import FilterScreen from "./screens/FilterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [menu, setMenu] = useState([]);

  // Add a dish
  const addDish = (dish) => {
    setMenu([...menu, dish]);
  };

  // Remove a dish by index
  const removeDish = (index) => {
    const newMenu = [...menu];
    newMenu.splice(index, 1);
    setMenu(newMenu);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {(props) => (
            <HomeScreen {...props} menu={menu} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddDish"
          options={{ headerShown: false }}
        >
          {(props) => (
            <AddDishScreen
              {...props}
              menu={menu}
              addDish={addDish}
              removeDish={removeDish}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Filter"
          options={{ headerShown: false }}
        >
          {(props) => (
            <FilterScreen {...props} menu={menu} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}