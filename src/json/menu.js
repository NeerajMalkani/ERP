export const MenuItems = [
  {
    title: "Dashboard",
    icon: "view-dashboard",
    type: "item",
    index: 0,
    navigation: "Dashboard",
  },
  {
    title: "Manufacturer",
    icon: "robot-industrial",
    type: "accordian",
    index: 1,
    items: [
      {
        title: "Raw Material Brand",
        type: "accordian",
        index: 11,
        navigation: "RawMaterial",
      },
      {
        title: "Width of GP coil",
        type: "accordian",
        index: 12,
        navigation: "GPCoil",
      },
      {
        title: "Mass of Zinc coating",
        type: "accordian",
        index: 13,
        navigation: "ZincCoating",
      },
      {
        title: "Product for Production",
        type: "accordian",
        index: 14,
      },
      {
        title: "Vendor",
        type: "accordian",
        index: 15,
      },
      {
        title: "Supplier",
        type: "accordian",
        index: 16,
      },
    ],
  },
  {
    title: "Purchase Order",
    icon: "file-document-multiple",
    type: "item",
    index: 2,
  },
  {
    title: "Vendor Order",
    icon: "store",
    type: "item",
    index: 3,
  },
  {
    title: "Invoice receipt",
    icon: "receipt",
    type: "item",
    index: 3,
  },
  {
    title: "Production",
    icon: "factory",
    type: "accordian",
    index: 5,
    items: [
      {
        title: "Add Production",
        index: 51,
        type: "accordian",
      },
      {
        title: "Production List",
        index: 52,
        type: "accordian",
      },
    ],
  },
  {
    title: "Sales Order Form",
    icon: "point-of-sale",
    type: "item",
    index: 6,
  },
];
