import { useParams } from "react-router-dom";
import DetailsHeader from "./components/DetailsHeader/DetailsHeader";
import DetailsBody from "./components/DetailsBody/DetailsBody";
import { useEffect, useState } from "react";
import type { typeCountryDetail } from "../../types/typeCountryDetail";

function CountryDetail() {
  const { code } = useParams();
  const [data, setData] = useState<typeCountryDetail | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      const [res1, res2] = await Promise.all([
        fetch(`https://restcountries.com/v2/alpha/${code}`),
        fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${code}`),
      ]);
      const [json1, json2] = await Promise.all([res1.json(), res2.json()]);

      setData({ ...json1, historico: json2[0]?.historico ?? "" });
    }

    if (code) fetchDetails();
  }, [code]);

  return (
    <>
      <DetailsHeader countryName={data?.translations.pt ?? "..."} />
      <DetailsBody data={data} />
    </>
  );
}

export default CountryDetail;
