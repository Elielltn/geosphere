import { useState } from "react";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import CountryGrid from "./components/CountryGrid/CountryGrid";

import useCountries from "../../hooks/useCountries";

function Home() {
  const [region, setRegion] = useState("");
  const [subregion, setSubregion] = useState("");
  const [independent, setIndependency] = useState("");
  const [search, setSearch] = useState("")

  const { countries, hasMore, loadMore } = useCountries(region, subregion, independent, search);

  return (
    <>
      <Header onSearchChange={setSearch}/>
      <FilterBar
        onRegionChange={setRegion}
        onSubregionChange={setSubregion}
        onIndependencyChange={setIndependency}
      />
      <CountryGrid countries={countries} hasMore={hasMore} loadMore={loadMore}/>
    </>
  );
}

export default Home;


