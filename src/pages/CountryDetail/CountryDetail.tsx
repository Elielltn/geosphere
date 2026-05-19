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
      const res = await fetch(
        `https://restcountries.com/v2/alpha/${code}`
      );

      const json = await res.json();

      setData(json);
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
