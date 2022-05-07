import { Provider as PaperProvider, List, Divider } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MasterScreen from "./src/screens/Master.screen";
import DashboardScreen from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./src/components/container";
import { MenuItems } from "./src/menu/MenuItems";

export const navigationRef = createNavigationContainerRef();
const Drawer = createDrawerNavigator();

const DrawerContent = () => {
  return (
    <Container>
      <List.Section>
        {MenuItems.map((k, i) => {
          return k.list === undefined ? (
            <List.Item key={i} title={k.title} style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: "#ededed" }} left={k.icon} />
          ) : (
            <List.Accordion key={i} title={k.title} style={{ backgroundColor: "white", paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: "#ededed" }} left={k.icon}>
              {k.list.map((l, j) => {
                return <List.Item key={j} title={l.title} style={{ backgroundColor: "#ededed", height: 48, borderBottomWidth: 1, borderBottomColor: "#dedede" }} />;
              })}
            </List.Accordion>
          );
        })}
      </List.Section>
    </Container>
  );
};

export default function App() {
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
