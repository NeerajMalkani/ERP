import { List } from "react-native-paper";

export const MenuItems = [
  {
    title: "Dashboard",
    icon: () => <List.Icon color="#7d7d7d" icon={"view-dashboard"} />,
  },
  {
    title: "Master",
    icon: () => <List.Icon color="#7d7d7d" icon={"plus-thick"} />,
    list: [
      {
        title: "Raw Material Brand",
      },
      {
        title: "Width of GP coil",
      },
      {
        title: "Mass of Zinc coating",
      },
      {
        title: "Product for Production",
      },
      {
        title: "Vendor",
      },
      {
        title: "Supplier",
      },
    ],
  },
  {
    title: "Purchase Order",
    icon: () => <List.Icon color="#7d7d7d" icon={"file-document-multiple"} />,
  },
  {
    title: "Vendor Order / Slitting Details",
    icon: () => <List.Icon color="#7d7d7d" icon={"store"} />,
  },
  {
    title: "Invoice receipt",
    icon: () => <List.Icon color="#7d7d7d" icon={"receipt"} />,
  },
  {
    title: "Production",
    icon: () => <List.Icon color="#7d7d7d" icon={"factory"} />,
  },
  {
    title: "Sales Order Form",
    icon: () => <List.Icon color="#7d7d7d" icon={"point-of-sale"} />,
  },
];
