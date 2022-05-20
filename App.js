import { Provider as PaperProvider, List, Text } from "react-native-paper";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
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
import { RawMaterialsContextProvider } from "./src/contexts/ListDataContext";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const rawMaterialsData = useState([]);

  const handleClick = useCallback((index, navigation, mainIndex) => {
    if (navigation !== undefined) {
      navigationRef.navigate(navigation);
    }
    setTimeout(() => {
      setActiveMainIndex(parseInt(mainIndex));
      setActiveIndex(parseInt(index));
    }, 480);
  });

  const ListItems = () => {
    return (
      <List.Section>
        {MenuItems.map((k, i) => {
          return k.type === "item" ? (
            <List.Item
              key={i}
              titleStyle={activeIndex === parseInt(i) ? Styles.primaryColor : Styles.textColor}
              title={k.title}
              style={[Styles.padding0, Styles.marginHorizontal12, Styles.borderBottom1]}
              left={() => <List.Icon color={activeIndex === parseInt(i) ? theme.colors.primary : theme.colors.textSecondary} icon={k.icon} />}
              onPress={(e) => {
                handleClick(i, k.navigation, i);
              }}
            />
          ) : (
            <CollapsibleView
              key={i}
              isRTL={true}
              collapsibleContainerStyle={{}}
              arrowStyling={{ svgProps: { transform: [{ rotate: "-90deg" }] } }}
              initExpanded={activeMainIndex === parseInt(i) ? true : false}
              style={[Styles.border0, Styles.flexAlignStart, Styles.padding0, Styles.margin0, Styles.borderBottom1]}
              title={
                <View style={[Styles.padding16, Styles.flex1, Styles.flexRow, { paddingLeft: 20 }]}>
                  <Icon name={k.icon} color={theme.colors.textSecondary} size={24} />
                  <Text style={[Styles.textColor, Styles.fontSize16, { paddingLeft: 20 }]}>{k.title}</Text>
                </View>
              }
            >
              {k.items.map((j, l) => {
                return (
                  <List.Item
                    key={l}
                    titleStyle={activeIndex === parseInt(i.toString() + l.toString()) ? Styles.primaryColor : Styles.textSecondaryColor}
                    title={j.title}
                    style={[Styles.backgroundSecondaryColor, Styles.paddingVertical8, { borderBottomWidth: 1, borderBottomColor: theme.colors.textLightSecondary }]}
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
        <View>
          <ListItems />
        </View>
      </ScrollView>
    );
  };

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen options={{ headerShown: false }} name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen options={{ headerShown: false }} name="RawMaterial">
          {(props) => <RawMaterialScreen {...props} rawMaterialsData={rawMaterialsData} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <RawMaterialsContextProvider value={rawMaterialsData}>
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
        </RawMaterialsContextProvider>
      </PaperProvider>
    </SafeAreaView>
  );
}
