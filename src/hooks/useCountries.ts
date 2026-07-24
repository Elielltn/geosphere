import { useEffect, useState } from "react";
import type { Country } from "../types/country";
import { normalizeString } from "../utils/normalize";

let cache: Country[] = [];

async function fetchAllCountries(): Promise<Country[]> {
  let allData: Country[] = [];
  let offset = 0;
  const limit = 100;
  let more = true;

  while (more) {
    const res = await fetch(
      `https://api.restcountries.com/countries/v5?response_fields=codes.alpha_2,names.translations.por,region,subregion,population,classification.dependency&limit=${limit}&offset=${offset}`,
      {
        headers: {
          Authorization: "Bearer rc_live_2b804d3c087e4bbe99a70d34d7c7250d",
        },
      },
    );
    const json = await res.json();
    allData = [...allData, ...json.data.objects];
    more = json.data.meta.more;
    offset += limit;
  }

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
      normalizeString(c.names.translations.por.official).includes(
        normalizeString(search),
      ),
    )
    .sort((a, b) =>
      a.names.translations.por.official.localeCompare(
        b.names.translations.por.official,
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
