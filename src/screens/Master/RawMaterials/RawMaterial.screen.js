import React, { useEffect } from "react";
import { View, TouchableNativeFeedback, ActivityIndicator, LogBox } from "react-native";
import { FAB, Snackbar, Text } from "react-native-paper";
import Header from "../../../components/header";
import { theme } from "../../../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Styles } from "../../../styles/styles";
import Provider from "../../../services/api/Provider";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
export const navigationRef = createNavigationContainerRef();

const RawMaterialScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  
  const [visible, setVisible] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarColor, setSnackbarColor] = React.useState(theme.colors.success);

  const rawMaterials = React.useState([]);

  useEffect(() => {
    Provider.getAll("shows")
      .then((response) => {
        if (response) {
          if (rawMaterials[0].length === 0) {
            rawMaterials[1]([
              {
                key: 1,
                text: "ESSAR",
                code: "ES198",
              },
              {
                key: 2,
                text: "JSW",
                code: "J6423",
              },
              {
                key: 3,
                text: "Sample 1",
                code: "S1435",
              },
              {
                key: 4,
                text: "Sample 2",
                code: "S2547",
              },
            ]);
          }
        } else {
        }
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  }, []);

  const UpdateList = (updatedList, title) => {
    setSnackbarText(title + " has been added successfully");
    setSnackbarColor(theme.colors.success);
    setVisible(true);
    rawMaterials[1](updatedList);
  };
  const RearrangeList = (list) => {
    list.map((k, i) => {
      k.key = parseInt(i);
    });
    rawMaterials[1](list);
  };
  const CreateActionButtons = (icon, color, callback) => {
    return (
      <TouchableNativeFeedback onPress={callback}>
        <View style={[Styles.width40, Styles.height40, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <Icon name={icon} color={color} size={24} />
        </View>
      </TouchableNativeFeedback>
    );
  };
  const RenderItems = (data) => {
    return (
      <View style={[Styles.flexRow, Styles.height56, Styles.backgroundColor, Styles.padding16, Styles.borderBottom1]}>
        <Text style={[Styles.paddingStart12, { width: 72 }]}>{data.item.code}</Text>
        <Text style={{ paddingStart: 24 }}>{data.item.text}</Text>
      </View>
    );
  };
  const RenderHiddenItems = (data, rowMap) => {
    return (
      <View style={[Styles.height56, Styles.flexRowReverse, Styles.flexAlignSelfEnd, Styles.flexAlignCenter, { width: 120 }]}>
        {CreateActionButtons("delete", theme.multicolors.red, () => {
          const arrRM = [...rawMaterials[0]];
          const prevIndex = rawMaterials[0].findIndex((item) => item.key === data.item.key);
          if (rowMap[data.item.key]) {
            rowMap[data.item.key].closeRow();
          }
          setTimeout(() => {
            setSnackbarText(data.item.text + " has been deleted successfully");
            setSnackbarColor(theme.colors.snackbar);
            setVisible(true);
            arrRM.splice(prevIndex, 1);
            RearrangeList(arrRM);
          }, 250);
        })}
        {CreateActionButtons("edit", theme.multicolors.blue)}
        {CreateActionButtons("remove-red-eye", theme.multicolors.yellow)}
      </View>
    );
  };
  return (
    <View style={[Styles.flex1]}>
      <Header navigation={navigation} title="Raw Materials" />
      {isLoading ? (
        <View style={[Styles.flex1, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <View style={[Styles.flex1, Styles.flexColumn, Styles.backgroundColor]}>
          <View style={[Styles.flexRow, Styles.backgroundSecondaryColor, Styles.padding16]}>
            <Text style={[Styles.paddingStart12, { width: 72 }]}>Code</Text>
            <Text style={[Styles.flexGrow, { paddingStart: 24 }]}>Brand</Text>
            <Text style={{ paddingEnd: 24 }}>Actions</Text>
          </View>
          <SwipeListView data={rawMaterials[0]} previewOpenValue={-120} previewDuration={480} disableRightSwipe={true} rightOpenValue={-120} renderItem={(data) => RenderItems(data)} renderHiddenItem={(data, rowMap) => RenderHiddenItems(data, rowMap)} />
        </View>
      )}
      <FAB
        style={[Styles.margin16, Styles.primaryBgColor, { position: "absolute", right: 16, bottom: 16 }]}
        icon="plus"
        onPress={() => {
          navigationRef.navigate("AddRawMaterial", { clickHandler: UpdateList, currentList: rawMaterials[0] });
        }}
      />
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: snackbarColor }}>
        {snackbarText}
      </Snackbar>
    </View>
  );
};

export default RawMaterialScreen;
