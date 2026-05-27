export const regions = [
  { value: "", label: "Todas as regiões" },
  { value: "Africa", label: "África" },
  { value: "Americas", label: "Américas" },
  { value: "Asia", label: "Ásia" },
  { value: "Europe", label: "Europa" },
  { value: "Oceania", label: "Oceania" },
  { value: "Antarctic Ocean", label: "Oceano Antártico" },
  { value: "Antarctic", label: "Antártica" },
];

export const subregions = [
  // Américas
  { value: "", label: "Todas as sub-regiões", region: "Americas" },
  { value: "Northern America", label: "América do Norte", region: "Americas" },
  { value: "Central America", label: "América Central", region: "Americas" },
  { value: "Caribbean", label: "Caribe", region: "Americas" },
  { value: "South America", label: "América do Sul", region: "Americas" },

  // Europa
  { value: "", label: "Todas as sub-regiões", region: "Europe" },
  { value: "Northern Europe", label: "Europa do Norte", region: "Europe" },
  { value: "Western Europe", label: "Europa Ocidental", region: "Europe" },
  { value: "Central Europe", label: "Europa Central", region: "Europe" },
  { value: "Eastern Europe", label: "Europa do Leste", region: "Europe" },
  { value: "Southern Europe", label: "Europa do Sul", region: "Europe" },

  // Ásia
  { value: "", label: "Todas as sub-regiões", region: "Asia" },
  { value: "Central Asia", label: "Ásia Central", region: "Asia" },
  { value: "Eastern Asia", label: "Ásia Oriental", region: "Asia" },
  { value: "South-Eastern Asia", label: "Ásia do Sudeste", region: "Asia" },
  { value: "Southern Asia", label: "Ásia do Sul", region: "Asia" },
  { value: "Western Asia", label: "Ásia Ocidental", region: "Asia" },

  // África
  { value: "", label: "Todas as sub-regiões", region: "Africa" },
  { value: "Northern Africa", label: "África do Norte", region: "Africa" },
  { value: "Western Africa", label: "África Ocidental", region: "Africa" },
  { value: "Middle Africa", label: "África Central", region: "Africa" },
  { value: "Eastern Africa", label: "África Oriental", region: "Africa" },
  { value: "Southern Africa", label: "África do Sul", region: "Africa" },

  // Oceania
  { value: "", label: "Todas as sub-regiões", region: "Oceania" },
  {
    value: "Australia and New Zealand",
    label: "Austrália e Nova Zelândia",
    region: "Oceania",
  },
  { value: "Melanesia", label: "Melanésia", region: "Oceania" },
  { value: "Micronesia", label: "Micronésia", region: "Oceania" },
  { value: "Polynesia", label: "Polinésia", region: "Oceania" },

  {
    value: "South Antarctic Ocean",
    label: "Oceano Antártico do Sul",
    region: "Antarctic Ocean",
  },
  { value: "Antarctic", label: "Antártica", region: "Antarctic" },
];

export const independencyOptions = [
  { value: "", label: "Todos" },
  { value: "true", label: "Independente" },
  { value: "false", label: "Dependente" },
];
