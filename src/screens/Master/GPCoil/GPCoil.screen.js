import React, { useEffect } from "react";
import { View, ActivityIndicator, TouchableNativeFeedback, LogBox } from "react-native";
import { FAB, Snackbar, Text } from "react-native-paper";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import Header from "../../../components/header";
import { Styles } from "../../../styles/styles";
import { theme } from "../../../theme/apptheme";
import Provider from "../../../services/api/Provider";
import { navigationRef } from "../RawMaterials/RawMaterial.screen";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const GPCoil = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const [visible, setVisible] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarColor, setSnackbarColor] = React.useState(theme.colors.success);

  const gpCoil = React.useState([]);

  useEffect(() => {
    Provider.getAll("shows")
      .then((response) => {
        if (response) {
          if (gpCoil[0].length === 0) {
            gpCoil[1]([
              {
                key: 1,
                text: "1250",
              },
              {
                key: 2,
                text: "750",
              },
              {
                key: 3,
                text: "450",
              },
              {
                key: 4,
                text: "180",
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
    gpCoil[1](updatedList);
  };
  const RearrangeList = (list) => {
    list.map((k, i) => {
      k.key = parseInt(i);
    });
    gpCoil[1](list);
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
        <Text style={{ paddingStart: 24 }}>{data.item.text}</Text>
      </View>
    );
  };
  const RenderHiddenItems = (data, rowMap) => {
    return (
      <View style={[Styles.height56, Styles.flexRowReverse, Styles.flexAlignSelfEnd, Styles.flexAlignCenter, { width: 120 }]}>
        {CreateActionButtons("delete", theme.multicolors.red, () => {
          const arrGP = [...gpCoil[0]];
          const prevIndex = gpCoil[0].findIndex((item) => item.key === data.item.key);
          if (rowMap[data.item.key]) {
            rowMap[data.item.key].closeRow();
          }
          setTimeout(() => {
            setSnackbarText(data.item.text + " has been deleted successfully");
            setSnackbarColor(theme.colors.snackbar);
            setVisible(true);
            arrGP.splice(prevIndex, 1);
            RearrangeList(arrGP);
          }, 250);
        })}
        {CreateActionButtons("edit", theme.multicolors.blue)}
        {CreateActionButtons("remove-red-eye", theme.multicolors.yellow)}
      </View>
    );
  };

  return (
    <View style={[Styles.flex1]}>
      <Header navigation={navigation} title="GP Coil" />
      {isLoading ? (
        <View style={[Styles.flex1, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : (
        <View style={[Styles.flex1, Styles.flexColumn, Styles.backgroundColor]}>
          <View style={[Styles.flexRow, Styles.backgroundSecondaryColor, Styles.padding16]}>
            <Text style={[Styles.flexGrow, { paddingStart: 24 }]}>Width of GP Coil</Text>
            <Text style={{ paddingEnd: 24 }}>Actions</Text>
          </View>
          <SwipeListView data={gpCoil[0]} previewOpenValue={-120} previewDuration={480} disableRightSwipe={true} rightOpenValue={-120} renderItem={(data) => RenderItems(data)} renderHiddenItem={(data, rowMap) => RenderHiddenItems(data, rowMap)} />
        </View>
      )}
      <FAB
        style={[Styles.margin16, Styles.primaryBgColor, { position: "absolute", right: 16, bottom: 16 }]}
        icon="plus"
        onPress={() => {
          navigationRef.navigate("AddGPCoilWidth", { clickHandler: UpdateList, currentList: gpCoil[0] });
        }}
      />
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: snackbarColor }}>
        {snackbarText}
      </Snackbar>
    </View>
  );
};
export default GPCoil;
