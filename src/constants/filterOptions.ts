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
  { value: "North America", label: "Norte da América", region: "Americas" },
  { value: "Central America", label: "América Central", region: "Americas" },
  { value: "Caribbean", label: "Caribe", region: "Americas" },
  { value: "South America", label: "Sul da América", region: "Americas" },

  // Europa
  { value: "", label: "Todas as sub-regiões", region: "Europe" },
  { value: "Northern Europe", label: "Norte da Europa", region: "Europe" },
  { value: "Western Europe", label: "Oeste da Europa", region: "Europe" },
  { value: "Central Europe", label: "Europa Central", region: "Europe" },
  { value: "Eastern Europe", label: "Leste da Europa", region: "Europe" },
  { value: "Southern Europe", label: "Sul da Europa", region: "Europe" },
  { value: "Southeast Europe", label: "Sudeste da Europa", region: "Europe" },

  // Ásia
  { value: "", label: "Todas as sub-regiões", region: "Asia" },
  { value: "Central Asia", label: "Ásia Central", region: "Asia" },
  { value: "Eastern Asia", label: "Leste da Ásia", region: "Asia" },
  { value: "South-Eastern Asia", label: "Sudeste da Ásia", region: "Asia" },
  { value: "Southeast Asia", label: "Sudeste da Ásia", region: "Asia" }, // palpite — mesmo padrão da Europa
  { value: "Southern Asia", label: "Sul da Ásia", region: "Asia" },
  { value: "Western Asia", label: "Oeste da Ásia", region: "Asia" },

  // África
  { value: "", label: "Todas as sub-regiões", region: "Africa" },
  { value: "Northern Africa", label: "Norte da África", region: "Africa" },
  { value: "Western Africa", label: "Oeste da África", region: "Africa" },
  { value: "Middle Africa", label: "África Central", region: "Africa" },
  { value: "Eastern Africa", label: "Leste da África", region: "Africa" },
  { value: "Southern Africa", label: "Sul da África", region: "Africa" },
  { value: "Southeast Africa", label: "Sudeste da África", region: "Africa" }, // palpite

  // Oceania
  { value: "", label: "Todas as sub-regiões", region: "Oceania" },
  { value: "Australia and New Zealand", label: "Austrália e Nova Zelândia", region: "Oceania" },
  { value: "Melanesia", label: "Melanésia", region: "Oceania" },
  { value: "Micronesia", label: "Micronésia", region: "Oceania" },
  { value: "Polynesia", label: "Polinésia", region: "Oceania" },

  { value: "South Antarctic Ocean", label: "Oceano Antártico do Sul", region: "Antarctic Ocean" },
  { value: "Antarctic", label: "Antártica", region: "Antarctic" },
];


export const independencyOptions = [
  { value: "", label: "Todos" },
  { value: "false", label: "Independente" },
  { value: "true", label: "Dependente" },
];
