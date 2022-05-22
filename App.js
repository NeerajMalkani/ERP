import { Provider as PaperProvider, List, Text } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import RawMaterialScreen, { navigationRef } from "./src/screens/Master/RawMaterials/RawMaterial.screen";
import DashboardScreen from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { useState, useCallback } from "react";
import AddRawMaterial from "./src/screens/Master/RawMaterials/AddRawMaterial";
import { MenuItems } from "./src/json/menu";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Styles } from "./src/styles/styles";
import { color } from "react-native-reanimated";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  let activeIndex = 0;
  let activeMainIndex = 0;

  const DrawerContent = (props) => {
    console.log(activeMainIndex);
    return (
      <DrawerContentScrollView {...props}>
        {MenuItems.map((k, i) => {
          return k.type === "item" ? (
            <DrawerItem
              key={i}
              focused={activeIndex === parseInt(i) ? true : false}
              label={({ focused, color }) => {
                return <Text style={[Styles.textColor, Styles.fontSize14, { color: focused ? theme.colors.primary : theme.colors.text }]}>{k.title}</Text>;
              }}
              icon={({ focused, color, size }) => <Icon color={focused ? theme.colors.primary : theme.colors.textSecondary} size={24} name={k.icon} />}
              onPress={(e) => {
                if (k.navigation !== undefined) {
                  activeMainIndex = parseInt(i);
                  setTimeout(() => {
                    activeIndex = parseInt(i);
                  }, 480);

                  props.navigation.navigate(k.navigation);
                }
              }}
            />
          ) : (
            <CollapsibleView
              key={i}
              isRTL={true}
              collapsibleContainerStyle={{}}
              arrowStyling={{ size: 18, svgProps: { transform: [{ rotate: "-90deg" }] } }}
              initExpanded={activeMainIndex === parseInt(i) ? true : false}
              style={[Styles.border0, Styles.flexAlignStart, Styles.padding0, Styles.margin0]}
              title={
                <View style={[Styles.padding8, Styles.flex1, Styles.flexRow]}>
                  <Icon name={k.icon} color={theme.colors.textSecondary} size={24} />
                  <Text style={[Styles.textColor, Styles.fontSize14, { paddingLeft: 34 }]}>{k.title}</Text>
                </View>
              }
            >
              {k.items.map((j, l) => {
                return (
                  <DrawerItem
                    key={l}
                    style={{ backgroundColor: theme.colors.backgroundSecondary, marginVertical: 0 }}
                    focused={activeIndex === parseInt(i.toString() + l.toString()) ? true : false}
                    label={({ focused }) => <Text style={[Styles.textColor, Styles.fontSize14, { color: focused ? theme.colors.primary : theme.colors.text }]}>{j.title}</Text>}
                    onPress={(e) => {
                      if (j.navigation !== undefined) {
                        activeMainIndex = parseInt(i);
                        setTimeout(() => {
                          activeIndex = parseInt(i.toString() + l.toString());
                        }, 480);

                        props.navigation.navigate(j.navigation);
                      }
                    }}
                  />
                );
              })}
            </CollapsibleView>
          );
        })}
      </DrawerContentScrollView>
    );
  };
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} initialRouteName="Dashboard">
        <Drawer.Screen options={{ headerShown: false }} name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen options={{ headerShown: false }} name="RawMaterial" component={RawMaterialScreen} />
      </Drawer.Navigator>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen
              name="AddRawMaterial"
              component={AddRawMaterial}
              options={{
                headerStyle: [Styles.primaryBgColor, Styles.height64],
                headerTitleStyle: {
                  color: theme.colors.textLight,
                },
                headerTintColor: theme.colors.textLight,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
