import { View, TouchableNativeFeedback } from "react-native";
import { FAB, Text } from "react-native-paper";
import { Box } from "../components/box";
import Header from "../components/header";
import { theme } from "../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialIcons";

export const navigationRef = createNavigationContainerRef();

export default RawMaterialScreen = ({ navigation }) => {
  const arrRawMaterials = [
    {
      key: "1",
      text: "ESSAR",
      code: "ES198",
    },
    {
      key: "2",
      text: "JSW",
      code: "J6423",
    },
    {
      key: "3",
      text: "Sample 1",
      code: "S1435",
    },
    {
      key: "4",
      text: "Sample 2",
      code: "S2547",
    },
  ];
  return (
    <Box style={{ flex: 1 }}>
      <Header navigation={navigation} title="Raw Materials" />
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: theme.colors.textLight }}>
        <View style={{ flexDirection: "row", backgroundColor: theme.colors.backgroundSecondary, padding: 16 }}>
          <Text style={{ width: 72, paddingStart: 12 }}>Code</Text>
          <Text style={{ paddingStart: 24, flexGrow: 1 }}>Brand</Text>
          <Text style={{ paddingEnd: 24 }}>Actions</Text>
        </View>
        <SwipeListView
          data={arrRawMaterials}
          renderItem={(data) => (
            <View style={{ flexDirection: "row", height: 56, backgroundColor: theme.colors.textLight, padding: 16, borderBottomWidth: 1, borderBottomColor: theme.colors.border }}>
              <Text style={{ width: 72, paddingStart: 12 }}>{data.item.code}</Text>
              <Text style={{ paddingStart: 24 }}>{data.item.text}</Text>
            </View>
          )}
          renderHiddenItem={() => (
            <View style={{ height: 56, flexDirection: "row-reverse", width: 120, alignSelf: "flex-end", alignItems: "center" }}>
              <TouchableNativeFeedback>
                <View style={{ height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                  <Icon name="delete" color={theme.multicolors.red} size={24} />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View style={{ height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                  <Icon name="edit" color={theme.multicolors.blue} size={24} />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback>
                <View style={{ height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                  <Icon name="remove-red-eye" color={theme.multicolors.yellow} size={24} />
                </View>
              </TouchableNativeFeedback>
            </View>
          )}
          previewRowKey="1"
          previewOpenValue={-120}
          previewDuration={480}
          disableRightSwipe={true}
          useAnimatedList={true}
          rightOpenValue={-120}
        />
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
