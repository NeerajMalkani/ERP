import React, { useEffect } from "react";
import { View, ActivityIndicator, LogBox } from "react-native";
import { FAB, Snackbar } from "react-native-paper";
import Header from "../../../components/header";
import { theme } from "../../../theme/apptheme";
import { SwipeListView } from "react-native-swipe-list-view";
import { Styles } from "../../../styles/styles";
import Provider from "../../../services/api/Provider";
import { ZincCoatingData } from "../../../json/listitems";
import Noitems from "../../../components/noitems";
import { ListHeader, RenderHiddenItems, RenderItems } from "../../../components/listactions";
import { navigationRef } from "../../Dashboard.screen";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

const ZincCoating = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [snackbarText, setSnackbarText] = React.useState("");
  const [snackbarColor, setSnackbarColor] = React.useState(theme.colors.success);
  const listData = React.useState([]);

  useEffect(() => {
    Provider.getAll("shows")
      .then((response) => {
        if (response) {
          if (listData[0].length === 0) {
            listData[1](ZincCoatingData);
          }
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
    listData[1](updatedList);
  };
  const RearrangeList = (list) => {
    list.map((k, i) => {
      k.key = parseInt(i) + 1;
    });
    listData[1](list);
  };
  const AddCallback = () => {
    navigationRef.navigate("AddZincCoating", { clickHandler: UpdateList, currentList: listData[0] });
  };
  const DeleteCallback = (data, rowMap) => {
    const arrList = [...listData[0]];
    const prevIndex = listData[0].findIndex((item) => item.key === data.item.key);
    if (rowMap[data.item.key]) {
      rowMap[data.item.key].closeRow();
    }
    setTimeout(() => {
      setSnackbarText(data.item.text + " has been deleted successfully");
      setSnackbarColor(theme.colors.snackbar);
      setVisible(true);
      arrList.splice(prevIndex, 1);
      RearrangeList(arrList);
    }, 250);
  };
  return (
    <View style={[Styles.flex1]}>
      <Header navigation={navigation} title="Mass of Zinc Coating" />
      {isLoading ? (
        <View style={[Styles.flex1, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      ) : listData[0].length > 0 ? (
        <View style={[Styles.flex1, Styles.flexColumn, Styles.backgroundColor]}>
          <ListHeader headerText="GSM" />
          <SwipeListView data={listData[0]} previewOpenValue={-120} previewDuration={480} disableRightSwipe={true} rightOpenValue={-120} renderItem={(data) => RenderItems(data)} renderHiddenItem={(data, rowMap) => RenderHiddenItems(data, rowMap, [DeleteCallback])} />
        </View>
      ) : (
        <Noitems icon="format-list-bulleted" text="No records found. Add records by clicking on plus icon." />
      )}
      <FAB style={[Styles.margin16, Styles.primaryBgColor, { position: "absolute", right: 16, bottom: 16 }]} icon="plus" onPress={AddCallback} />
      <Snackbar visible={visible} onDismiss={() => setVisible(false)} duration={3000} style={{ backgroundColor: snackbarColor }}>
        {snackbarText}
      </Snackbar>
    </View>
  );
};
export default ZincCoating;
