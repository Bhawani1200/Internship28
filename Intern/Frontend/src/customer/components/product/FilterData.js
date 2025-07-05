// export const color = [
//   "white",
//   "Black",
//   "Red",
//   "Pink",
//   "Green",
//   "Yellow",
//   "marun",
// ];
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "cotton white", label: "cotton white" },
      { value: "cream", label: "cream" },
      { value: "slight white", label: "slight white" },
      { value: "brown", label: "brown" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "L", label: "L" },
      { value: "M", label: "M" },
    ],
  },
];
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "2000-3000", label: "रु2000-रु3000" },
      { value: "3000-4000", label: "रु3000-र4000" },
      { value: "4000-5000", label: "रु4000-र53000" },
      { value: "5000-6000", label: "रु5000-रु6000" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
