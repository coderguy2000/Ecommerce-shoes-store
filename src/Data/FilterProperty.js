const FilterProperty = {
  heading: "FILTERS",
  filterOnBasis: [
    {
      name: "Cost",
      pricing: [
        {
          id: 0,
          upperRange: 1501,
          lowerRange: 0,
        },
        {
          id: 1,
          upperRange: 4000,
          lowerRange: 1500,
        },
        {
          id: 2,
          upperRange: 7000,
          lowerRange: 4001,
        },
        {
          id: 3,
          upperRange: Number.MAX_VALUE,
          lowerRange: 7001,
        },
      ],
    },
    {
      name: "Colour",
      color: [
        { id: 0, name: "red" },
        { id: 1, name: "skyblue" },
        { id: 2, name: "yellow" },
        { id: 3, name: "green" },
        { id: 4, name: "pink" },
      ],
    },
    {
      name: "Design Template",
      design: [
        { id: 0, no: 2 },
        { id: 1, no: 3 },
      ],
    },
    {
      name: "Type",
      type: [
        { id: 0, typeName: "sneakers" },
        { id: 1, typeName: "loafers" },
      ],
    },
  ],
};
export default FilterProperty;
