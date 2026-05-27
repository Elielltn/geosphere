import { useState } from "react";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import CountryGrid from "./components/CountryGrid/CountryGrid";

import useCountries from "../../hooks/useCountries";

type HomeProps = {
  region: string;
  subregion: string;
  independent: string;
  onRegionChange: (v: string) => void;
  onSubregionChange: (v: string) => void;
  onIndependencyChange: (v: string) => void;
};

function Home({
  region,
  subregion,
  independent,
  onRegionChange,
  onSubregionChange,
  onIndependencyChange,
}: HomeProps) {
  const [search, setSearch] = useState("");
  const { countries, hasMore, loadMore, loading } = useCountries(
    region,
    subregion,
    independent,
    search,
  );

  return (
    <>
      <Header onSearchChange={setSearch} />
      <FilterBar
        region={region}
        subregion={subregion}
        independent={independent}
        onRegionChange={onRegionChange}
        onSubregionChange={onSubregionChange}
        onIndependencyChange={onIndependencyChange}
      />
      <CountryGrid
        loading={loading}
        countries={countries}
        hasMore={hasMore}
        loadMore={loadMore}
      />
    </>
  );
}

export default Home;
