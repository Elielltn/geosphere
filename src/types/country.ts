export type Country = {
  names: {
    common: string;
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
  region: string;
  subregion: string;
  classification: {
    dependency: boolean;
  };
  population: number;
};
