import { useEffect, useState } from "react";

import type { Country } from "../types/country";

let cache: Country[] = [];

function useCountries(region: string, subregion: string, independent: string) {
  const [allCountries, setAllCountries] = useState<Country[]>(cache);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    if (cache.length > 0) return;

    async function fetchData() {
      const res = await fetch(
        "https://restcountries.com/v2/all?fields=alpha2Code,translations,region,subregion,population,independent",
      );
      const data = await res.json();
      cache = data;
      setAllCountries(data);
    }

    fetchData();
  }, []);

  const filtered = allCountries
    .filter((c) => (region ? c.region === region : true))
    .filter((c) => (subregion ? c.subregion === subregion : true))
    .filter((c) =>
      independent ? c.independent.toString() === independent : true,
    )
    .sort((a, b) => a.translations.pt.localeCompare(b.translations.pt));

  const paginated = filtered.slice(0, page * perPage);
  const hasMore = paginated.length < filtered.length;

  return {
    countries: paginated,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
  };
}

export default useCountries;
