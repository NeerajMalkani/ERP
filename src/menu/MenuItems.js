import { List } from "react-native-paper";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const MenuItems = [
  {
    title: "Dashboard",
    icon: "view-dashboard",
    navigation: "Dashboard",
    index: 0,
  },
  {
    title: "Master",
    icon: "plus-thick",
    index: 1,
    list: [
      {
        title: "Raw Material Brand",
        navigation: "Master",
        index: 10,
      },
      {
        title: "Width of GP coil",
        index: 11,
      },
      {
        title: "Mass of Zinc coating",
        index: 12,
      },
      {
        title: "Product for Production",
        index: 13,
      },
      {
        title: "Vendor",
        index: 14,
      },
      {
        title: "Supplier",
        index: 15,
      },
    ],
  },
  {
    title: "Purchase Order",
    icon: "file-document-multiple",
    index: 2,
  },
  {
    title: "Vendor Order", // / Slitting Details
    icon: "store",
    index: 3,
  },
  {
    title: "Invoice receipt",
    icon: "receipt",
    index: 4,
  },
  {
    title: "Production",
    icon: "factory",
    index: 5,
    list: [
      {
        title: "Add Production",
        index: 50,
      },
      {
        title: "Production List",
        index: 51,
      },
    ],
  },
  {
    title: "Sales Order Form",
    icon: "point-of-sale",
    index: 6,
  },
];
