import { Provider as PaperProvider, List, Text, Subheading } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import RawMaterialScreen, { navigationRef } from "./src/screens/RawMaterial.screen";
import DashboardScreen from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerHorizontal } from "./src/components/container";
import { ScrollView } from "react-native";
import { useState, useEffect, useCallback } from "react";
import AddRawMaterial from "./src/screens/AddRawMaterial";
import { MenuItems } from "./src/json/menu";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMainIndex, setActiveMainIndex] = useState(0);

  const handleClick = useCallback((index, navigation, mainIndex) => {
    if (navigation !== undefined) {
      navigationRef.navigate(navigation);
    }
    setTimeout(() => {
      setActiveMainIndex(parseInt(mainIndex));
      setActiveIndex(parseInt(index));
    }, 360);
  });

  const ListItems = () => {
    return (
      <List.Section>
        {MenuItems.map((k, i) => {
          return k.type === "item" ? (
            <List.Item
              key={i}
              titleStyle={{ color: activeIndex === parseInt(i) ? theme.colors.primary : theme.colors.text }}
              title={k.title}
              style={{ paddingVertical: 0, marginHorizontal: 12, paddingHorizontal: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === parseInt(i) ? theme.colors.primary : theme.colors.textSecondary} icon={k.icon} />}
              onPress={(e) => {
                handleClick(i, k.navigation, i);
              }}
            />
          ) : (
            <CollapsibleView
              key={i}
              noArrow={true}
              initExpanded={activeMainIndex === parseInt(i) ? true : false}
              style={{ borderWidth: 0, alignItems: "flex-start", margin: 0, padding: 0 }}
              title={
                <ContainerHorizontal style={{ flex: 1, padding: 16, paddingLeft: 20, paddingBottom: 18, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
                  <Icon name={k.icon} color={theme.colors.textSecondary} size={24} />
                  <Text style={{ color: theme.colors.text, paddingLeft: 20, fontSize: 16 }}>{k.title}</Text>
                </ContainerHorizontal>
              }
            >
              {k.items.map((j, l) => {
                return (
                  <List.Item
                    key={l}
                    titleStyle={{ color: activeIndex === parseInt(i.toString() + l.toString()) ? theme.colors.primary : theme.colors.textSecondary }}
                    title={j.title}
                    style={{ paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary, backgroundColor: theme.colors.border }}
                    onPress={(e) => {
                      handleClick(i.toString() + l.toString(), j.navigation, i);
                    }}
                  />
                );
              })}
            </CollapsibleView>
          );
        })}
      </List.Section>
    );
  };

  const DrawerContent = () => {
    return (
      <ScrollView>
        <Container>
          <ListItems />
        </Container>
      </ScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
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
                headerStyle: {
                  backgroundColor: theme.colors.primary,
                  height: 64,
                },
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
