import { Provider as PaperProvider, List, Divider } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MasterScreen from "./src/screens/Master.screen";
import DashboardScreen from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./src/components/container";
import { MenuItems, navigationRef } from "./src/menu/MenuItems";
import { ScrollView } from "react-native";
import { useState } from "react";

const Drawer = createDrawerNavigator();

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const DrawerContent = () => {
    return (
      <ScrollView>
        <Container>
          <List.Section>
            {MenuItems.map((k, i) => {
              return k.list === undefined ? (
                <List.Item
                  key={i}
                  titleStyle={{ color: parseInt(i) === activeIndex ? theme.colors.primary : theme.colors.text }}
                  title={k.title}
                  style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: "#ededed" }}
                  left={() => <List.Icon color={parseInt(i) === activeIndex ? theme.colors.primary : theme.colors.textLightSecondary} icon={k.icon} />}
                  onPress={(e) => {
                    if (k.navigation !== undefined) {
                      navigationRef.navigate(k.navigation);
                    }
                    if (k.index !== undefined) {
                      setActiveIndex(k.index);
                    }
                  }}
                />
              ) : (
                <List.Accordion
                  key={i}
                  title={k.title}
                  id={i}
                  titleStyle={{ color: parseInt(i) === activeIndex ? theme.colors.primary : theme.colors.text }}
                  style={{ backgroundColor: "white", paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: "#ededed" }}
                  left={() => <List.Icon color={parseInt(i) === activeIndex ? theme.colors.primary : theme.colors.textLightSecondary} icon={k.icon} />}
                >
                  {k.list.map((l, j) => {
                    return (
                      <List.Item
                        key={j}
                        title={l.title}
                        titleStyle={{ color: parseInt(i.toString() + j.toString()) === activeIndex ? theme.colors.primary : theme.colors.text }}
                        style={{ backgroundColor: "#ededed", height: 52, borderBottomWidth: 1, borderBottomColor: "#dedede" }}
                        onPress={() => {
                          if (l.navigation !== undefined) {
                            navigationRef.navigate(l.navigation);
                          }
                          if (l.index !== undefined) {
                            setActiveIndex(l.index);
                          }
                        }}
                      />
                    );
                  })}
                </List.Accordion>
              );
            })}
          </List.Section>
        </Container>
      </ScrollView>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} />
            <Drawer.Screen name="Master" component={MasterScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
