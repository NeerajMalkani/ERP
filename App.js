import { Provider as PaperProvider, List } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import RawMaterialScreen, { navigationRef } from "./src/screens/RawMaterial.screen";
import DashboardScreen from "./src/screens/Dashboard.screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container } from "./src/components/container";
import { ScrollView } from "react-native";
import { useState } from "react";
import AddRawMaterial from "./src/screens/AddRawMaterial";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [activeIndex, setActiveIndex] = useState("Dashboard");
  const [expandedMaster, setExpandedMaster] = useState(false);
  const [expandedProduction, setExpandedProduction] = useState(false);
  const DrawerContent = () => {
    return (
      <ScrollView>
        <Container>
          <List.Section>
            <List.Item
              titleStyle={{ color: activeIndex === "Dashboard" ? theme.colors.primary : theme.colors.text }}
              title="Dashboard"
              style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Dashboard" ? theme.colors.primary : theme.colors.textSecondary} icon="view-dashboard" />}
              onPress={(e) => {
                navigationRef.navigate("Dashboard");
                setExpandedMaster(false);
                setExpandedProduction(false);
                setActiveIndex("Dashboard");
              }}
            />
            <List.Accordion
              titleStyle={{ color: activeIndex === "Master" ? theme.colors.primary : theme.colors.text }}
              title="Master"
              expanded={expandedMaster}
              style={{ backgroundColor: theme.colors.textLight, paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Master" ? theme.colors.primary : theme.colors.textSecondary} icon="plus-thick" />}
              onPress={() => {
                setExpandedProduction(false);
                setExpandedMaster(!expandedMaster);
              }}
            >
              <List.Item
                titleStyle={{ color: activeIndex === "Raw Material Brand" ? theme.colors.primary : theme.colors.text }}
                title="Raw Material Brand"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  navigationRef.navigate("RawMaterial");
                  setActiveIndex("Raw Material Brand");
                  setExpandedMaster(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Width of GP coil" ? theme.colors.primary : theme.colors.text }}
                title="Width of GP coil"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Width of GP coil");
                  setActiveIndex("Width of GP coil");
                  setExpandedMaster(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Mass of Zinc coating" ? theme.colors.primary : theme.colors.text }}
                title="Mass of Zinc coating"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Mass of Zinc coating");
                  setActiveIndex("Mass of Zinc coating");
                  setExpandedMaster(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Product for Production" ? theme.colors.primary : theme.colors.text }}
                title="Product for Production"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Master");
                  setActiveIndex("Product for Production");
                  setExpandedMaster(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Vendor" ? theme.colors.primary : theme.colors.text }}
                title="Vendor"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Vendor");
                  setActiveIndex("Vendor");
                  setExpandedMaster(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Supplier" ? theme.colors.primary : theme.colors.text }}
                title="Supplier"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Supplier");
                  setActiveIndex("Supplier");
                  setExpandedMaster(true);
                }}
              />
            </List.Accordion>
            <List.Item
              titleStyle={{ color: activeIndex === "Purchase Order" ? theme.colors.primary : theme.colors.text }}
              title="Purchase Order"
              style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Purchase Order" ? theme.colors.primary : theme.colors.textSecondary} icon="file-document-multiple" />}
              onPress={(e) => {
                //navigationRef.navigate("Purchase Order");
                setExpandedMaster(false);
                setExpandedProduction(false);
                setActiveIndex("Purchase Order");
              }}
            />
            <List.Item
              titleStyle={{ color: activeIndex === "Vendor Order" ? theme.colors.primary : theme.colors.text }}
              title="Vendor Order"
              style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Vendor Order" ? theme.colors.primary : theme.colors.textSecondary} icon="store" />}
              onPress={(e) => {
                //navigationRef.navigate("Vendor Order");
                setExpandedMaster(false);
                setExpandedProduction(false);
                setActiveIndex("Vendor Order");
              }}
            />
            <List.Item
              titleStyle={{ color: activeIndex === "Invoice receipt" ? theme.colors.primary : theme.colors.text }}
              title="Invoice receipt"
              style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Invoice receipt" ? theme.colors.primary : theme.colors.textSecondary} icon="receipt" />}
              onPress={(e) => {
                //navigationRef.navigate("Invoice receipt");
                setExpandedMaster(false);
                setExpandedProduction(false);
                setActiveIndex("Invoice receipt");
              }}
            />
            <List.Accordion
              titleStyle={{ color: activeIndex === "Production" ? theme.colors.primary : theme.colors.text }}
              title="Production"
              expanded={expandedProduction}
              style={{ backgroundColor: theme.colors.textLight, paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Production" ? theme.colors.primary : theme.colors.textSecondary} icon="factory" />}
              onPress={() => {
                setExpandedMaster(false);
                setExpandedProduction(!expandedProduction);
              }}
            >
              <List.Item
                titleStyle={{ color: activeIndex === "Add Production" ? theme.colors.primary : theme.colors.text }}
                title="Add Production"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Add Production");
                  setActiveIndex("Add Production");
                  setExpandedProduction(true);
                }}
              />
              <List.Item
                titleStyle={{ color: activeIndex === "Production List" ? theme.colors.primary : theme.colors.text }}
                title="Production List"
                style={{ backgroundColor: theme.colors.border, height: 52, borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }}
                onPress={(e) => {
                  //navigationRef.navigate("Production List");
                  setActiveIndex("Production List");
                  setExpandedProduction(true);
                }}
              />
            </List.Accordion>
            <List.Item
              titleStyle={{ color: activeIndex === "Sales Order Form" ? theme.colors.primary : theme.colors.text }}
              title="Sales Order Form"
              style={{ paddingVertical: 0, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}
              left={() => <List.Icon color={activeIndex === "Sales Order Form" ? theme.colors.primary : theme.colors.textSecondary} icon="point-of-sale" />}
              onPress={(e) => {
                //navigationRef.navigate("Sales Order Form");
                setExpandedMaster(false);
                setExpandedProduction(false);
                setActiveIndex("Sales Order Form");
              }}
            />
          </List.Section>
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
