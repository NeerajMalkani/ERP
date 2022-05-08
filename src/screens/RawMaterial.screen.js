import { View, ScrollView, TouchableNativeFeedback } from "react-native";
import { DataTable, FAB } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTableList } from "@fortawesome/free-solid-svg-icons/faTableList";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { Box } from "../components/box";
import Header from "../components/header";
import { theme } from "../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export default RawMaterialScreen = ({ navigation }) => {
  const arrRawMaterials = [
    {
      title: "ESSAR",
    },
    {
      title: "JSW",
    },
    {
      title: "Sample 1",
    },
    {
      title: "Sample 2",
    },
  ];
  return (
    <Box style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <Header navigation={navigation} />
      <View style={{ flex: 1, flexDirection: "column", marginTop: 16, padding: 16, borderTopLeftRadius: 32, borderTopRightRadius: 32, backgroundColor: theme.colors.textLight }}>
        <ScrollView>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title style={{ flex: 1.5 }}>Sr.No.</DataTable.Title>
              <DataTable.Title style={{ flex: 4 }}>Brand</DataTable.Title>
              <DataTable.Title style={{ flex: 3 }}>Actions</DataTable.Title>
            </DataTable.Header>
            {arrRawMaterials.map((k, i) => {
              return (
                <DataTable.Row style={{ height: 56 }} key={i}>
                  <DataTable.Cell style={{ flex: 1.5 }}>{i + 1}</DataTable.Cell>
                  <DataTable.Cell style={{ flex: 4 }}>{k.title}</DataTable.Cell>
                  <DataTable.Cell style={{ flex: 3 }}>
                    <TouchableNativeFeedback>
                      <View
                        style={{ width: 32, height: 32, alignItems: "center", justifyContent: "center" }}
                        onTouchStart={() => {
                          //navigation.toggleDrawer();
                        }}
                      >
                        <FontAwesomeIcon icon={faTableList} size={18} color={theme.colors.textSecondary} />
                      </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                      <View
                        style={{ width: 32, height: 32, marginLeft: 24, alignItems: "center", justifyContent: "center" }}
                        onTouchStart={() => {
                          //navigation.toggleDrawer();
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} size={18} color={theme.colors.textSecondary} />
                      </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                      <View
                        style={{ width: 32, height: 32, marginLeft: 24, alignItems: "center", justifyContent: "center" }}
                        onTouchStart={() => {
                          //navigation.toggleDrawer();
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} size={18} color={theme.colors.textSecondary} />
                      </View>
                    </TouchableNativeFeedback>
                  </DataTable.Cell>
                </DataTable.Row>
              );
            })}
          </DataTable>
        </ScrollView>
      </View>
      <FAB
        style={{ position: "absolute", margin: 16, right: 16, bottom: 16, backgroundColor: theme.colors.primary }}
        icon="plus"
        onPress={() => {
          navigationRef.navigate("AddRawMaterial");
        }}
      />
    </Box>
  );
};
