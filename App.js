import { Provider as PaperProvider, Text } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import RawMaterialScreen from "./src/screens/Master/RawMaterials/RawMaterial.screen";
import DashboardScreen, { navigationRef } from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { useState } from "react";
import AddRawMaterial from "./src/screens/Master/RawMaterials/AddRawMaterial";
import { MenuItems } from "./src/json/menu";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Styles } from "./src/styles/styles";
import GPCoil from "./src/screens/Master/GPCoil/GPCoil.screen";
import AddGPCoilWidth from "./src/screens/Master/GPCoil/AddGPCoilWidth";
import ZincCoating from "./src/screens/Master/ZincCoating/ZincCoating.screen";
import AddZincCoating from "./src/screens/Master/ZincCoating/AddZincCoating";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  let activeIndex = 0;
  const [expanded, setExpanded] = useState(false);

  const DrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        {MenuItems.map((k, i) => {
          return k.type === "item" ? (
            <DrawerItem
              key={i}
              focused={activeIndex === parseInt(i) ? true : false}
              style={[Styles.borderBottom1]}
              label={({ focused }) => {
                return <Text style={[Styles.textColor, Styles.fontSize16, { color: focused ? theme.colors.primary : theme.colors.text }]}>{k.title}</Text>;
              }}
              icon={({ focused }) => <Icon color={focused ? theme.colors.primary : theme.colors.textSecondary} size={24} name={k.icon} />}
              onPress={(e) => {
                if (k.navigation !== undefined) {
                  activeIndex = parseInt(i);
                  props.navigation.navigate(k.navigation);
                }
                setExpanded(false);
              }}
            />
          ) : (
            <CollapsibleView
              key={i}
              isRTL={true}
              arrowStyling={{ size: 18, svgProps: { transform: [{ rotate: "-90deg" }] } }}
              collapsibleContainerStyle={{ width: "100%" }}
              initExpanded={expanded}
              style={[Styles.borderBottom1, Styles.border0, Styles.flexAlignStart, Styles.padding0, Styles.margin0]}
              title={
                <View style={[Styles.padding8, Styles.paddingBottom12, Styles.flex1, Styles.flexRow]}>
                  <Icon name={k.icon} color={theme.colors.textSecondary} size={24} />
                  <Text style={[Styles.textColor, Styles.fontSize16, { paddingLeft: 34 }]}>{k.title}</Text>
                </View>
              }
            >
              {k.items.map((j, l) => {
                return (
                  <DrawerItem
                    key={l}
                    style={{ backgroundColor: theme.colors.backgroundSecondary, marginVertical: 0, paddingHorizontal: 0, width: "100%", marginLeft: 0, borderRadius: 0, borderBottomColor: theme.colors.textLightSecondary, borderBottomWidth: 1 }}
                    focused={activeIndex === parseInt(i.toString() + l.toString()) ? true : false}
                    label={({ focused }) => <Text style={[Styles.textColor, Styles.fontSize16, { color: focused ? theme.colors.primary : theme.colors.text }]}>{j.title}</Text>}
                    onPress={(e) => {
                      if (j.navigation !== undefined) {
                        activeIndex = parseInt(i.toString() + l.toString());
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
        <Drawer.Screen options={{ headerShown: false }} name="GPCoil" component={GPCoil} />
        <Drawer.Screen options={{ headerShown: false }} name="ZincCoating" component={ZincCoating} />
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
            <Stack.Screen
              name="AddGPCoilWidth"
              component={AddGPCoilWidth}
              options={{
                headerStyle: [Styles.primaryBgColor, Styles.height64],
                headerTitleStyle: {
                  color: theme.colors.textLight,
                },
                headerTintColor: theme.colors.textLight,
              }}
            />
            <Stack.Screen
              name="AddZincCoating"
              component={AddZincCoating}
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
