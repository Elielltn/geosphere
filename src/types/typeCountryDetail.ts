export type typeCountryDetail = {
  names: {
    common: string;
    official: string;
    translations: {
      por: {
        common: string;
        official: string;
      };
    };
  };
  codes: {
    alpha_2: string;
  };
  area: {
    kilometers: number;
  };
  region: string;
  subregion: string;
  capitals: {
    name: string;
  }[];
  population: number;
  languages: {
    bcp47: string;
    iso639_1: string;
    iso639_2b: string;
    iso639_2t: string;
    iso639_3: string;
    name: string;
    native_name: string;
  }[];
  historico: string;
};
