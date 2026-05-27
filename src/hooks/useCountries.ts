import { useEffect, useState } from "react";
import type { Country } from "../types/country";
import { normalizeString } from "../utils/normalize";

let cache: Country[] = [];

function useCountries(
  region: string,
  subregion: string,
  independent: string,
  search: string,
) {
  const [allCountries, setAllCountries] = useState<Country[]>(cache);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(cache.length === 0);
  const [error, setError] = useState("");
  const perPage = 20;

  useEffect(() => {
    if (cache.length > 0) return;

    async function fetchData() {
      try {
        const res = await fetch(
          "https://restcountries.com/v2/all?fields=alpha2Code,translations,region,subregion,population,independent",
        );
        const data = await res.json();
        const normalized = data.map((country: Country) => ({
          ...country,
          subregion:
            country.subregion === "North America"
              ? "Northern America"
              : country.subregion,
        }));
        cache = normalized;
        setAllCountries(normalized);
        setLoading(false);
      } catch (err) {
        setError("Não foi possível carregar os países. Tente novamente");
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [region, subregion, independent, search]);

  const filtered = allCountries
    .filter((c) => (region ? c.region === region : true))
    .filter((c) => (subregion ? c.subregion === subregion : true))
    .filter((c) =>
      independent ? c.independent.toString() === independent : true,
    )
    .filter((c) =>
      normalizeString(c.translations.pt).includes(normalizeString(search)),
    )
    .sort((a, b) => a.translations.pt.localeCompare(b.translations.pt));

  const paginated = filtered.slice(0, page * perPage);
  const hasMore = paginated.length < filtered.length;

  return {
    countries: paginated,
    hasMore,
    loadMore: () => setPage((p) => p + 1),
    loading,
    error,
  };
}

export default useCountries;
