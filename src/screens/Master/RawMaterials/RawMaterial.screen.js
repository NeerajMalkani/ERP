import React, { useState } from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { FAB, Text } from "react-native-paper";
import Header from "../../../components/header";
import { theme } from "../../../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Styles } from "../../../styles/styles";
import { useEffect } from "react/cjs/react.production.min";

export const navigationRef = createNavigationContainerRef();

export default RawMaterialScreen = ({ navigation }) => {
  const [rawMaterialsData, setRawMaterialsData] = useState([]);

  // if (route.params != undefined) {
  // } else {
  //   setRawMaterialsData([
  //     {
  //       key: "1",
  //       text: "ESSAR",
  //       code: "ES198",
  //     },
  //     {
  //       key: "2",
  //       text: "JSW",
  //       code: "J6423",
  //     },
  //     {
  //       key: "3",
  //       text: "Sample 1",
  //       code: "S1435",
  //     },
  //     {
  //       key: "4",
  //       text: "Sample 2",
  //       code: "S2547",
  //     },
  //   ]);
  // }

  // useEffect(() => {

  // }, [route.params?.post]);
  // const rawMaterials = useState([
  //   {
  //     key: "1",
  //     text: "ESSAR",
  //     code: "ES198",
  //   },
  //   {
  //     key: "2",
  //     text: "JSW",
  //     code: "J6423",
  //   },
  //   {
  //     key: "3",
  //     text: "Sample 1",
  //     code: "S1435",
  //   },
  //   {
  //     key: "4",
  //     text: "Sample 2",
  //     code: "S2547",
  //   },
  // ]);
  const CreateActionButtons = (icon, color, callback) => {
    return (
      <TouchableNativeFeedback>
        <View style={[Styles.width40, Styles.height40, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <Icon name={icon} color={color} size={24} />
        </View>
      </TouchableNativeFeedback>
    );
  };
  return (
    <View style={[Styles.flex1]}>
      <Header navigation={navigation} title="Raw Materials" />
      <View style={[Styles.flex1, Styles.flexColumn, Styles.backgroundColor]}>
        <View style={[Styles.flexRow, Styles.backgroundSecondaryColor, Styles.padding16]}>
          <Text style={[Styles.paddingStart12, { width: 72 }]}>Code</Text>
          <Text style={[Styles.flexGrow, { paddingStart: 24 }]}>Brand</Text>
          <Text style={{ paddingEnd: 24 }}>Actions</Text>
        </View>
        <SwipeListView
          data={rawMaterials[0]}
          previewRowKey="1"
          previewOpenValue={-120}
          previewDuration={480}
          disableRightSwipe={true}
          useAnimatedList={true}
          rightOpenValue={-120}
          renderItem={(data) => (
            <View style={[Styles.flexRow, Styles.height56, Styles.backgroundColor, Styles.padding16, Styles.borderBottom1]}>
              <Text style={[Styles.paddingStart12, { width: 72 }]}>{data.item.code}</Text>
              <Text style={{ paddingStart: 24 }}>{data.item.text}</Text>
            </View>
          )}
          renderHiddenItem={() => (
            <View style={[Styles.height56, Styles.flexRowReverse, Styles.flexAlignSelfEnd, Styles.flexAlignCenter, { width: 120 }]}>
              {CreateActionButtons("delete", theme.multicolors.red)}
              {CreateActionButtons("edit", theme.multicolors.blue)}
              {CreateActionButtons("remove-red-eye", theme.multicolors.yellow)}
            </View>
          )}
        />
      </View>
      <FAB
        style={{ position: "absolute", margin: 16, right: 16, bottom: 16, backgroundColor: theme.colors.primary }}
        icon="plus"
        onPress={() => {
          navigationRef.navigate("AddRawMaterial");
        }}
      />
    </View>
  );
};
