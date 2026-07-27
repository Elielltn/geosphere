import { useEffect, useState } from "react";
import type { Country } from "../types/country";
import { normalizeString } from "../utils/normalize";

let cache: Country[] = [];

const API_URL = import.meta.env.VITE_API_URL;

async function fetchAllCountries(): Promise<Country[]> {
  const res = await fetch(`${API_URL}/api/countries`);
  const json = await res.json();
  const allData = json;

  return allData;
}

function useCountries(
  region: string,
  subregion: string,
  independency: string,
  search: string,
) {
  const [prevFilters, setPrevFilters] = useState({
    region,
    subregion,
    independency,
    search,
  });
  const [allCountries, setAllCountries] = useState<Country[]>(cache);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(cache.length === 0);
  const [error, setError] = useState("");
  const perPage = 20;

  useEffect(() => {
    if (cache.length > 0) return;

    async function fetchData() {
      try {
        const data = await fetchAllCountries();
        cache = data;
        setAllCountries(data);
        setLoading(false);
      } catch {
        setError("Não foi possível carregar os países. Tente novamente");
      }
    }

    fetchData();
  }, []);

  if (
    prevFilters.region !== region ||
    prevFilters.subregion !== subregion ||
    prevFilters.independency !== independency ||
    prevFilters.search !== search
  ) {
    setPrevFilters({ region, subregion, independency, search });
    setPage(1);
  }

  const filtered = allCountries
    .filter((c) => (region ? c.region === region : true))
    .filter((c) => (subregion ? c.subregion === subregion : true))
    .filter((c) =>
      independency
        ? c.classification.dependency.toString() === independency
        : true,
    )
    .filter((c) =>
      normalizeString(c.names.translations.por.common).includes(
        normalizeString(search),
      ),
    )
    .sort((a, b) =>
      a.names.translations.por.common.localeCompare(
        b.names.translations.por.common,
      ),
    );

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
