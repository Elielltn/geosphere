import styles from "./CountryDetail.module.css";
import { useParams } from "react-router-dom";
import DetailsHeader from "./components/DetailsHeader/DetailsHeader";
import DetailsBody from "./components/DetailsBody/DetailsBody";
import { useEffect, useState } from "react";
import type { typeCountryDetail } from "../../types/typeCountryDetail";

function CountryDetail() {
  const { code } = useParams();
  const [data, setData] = useState<typeCountryDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const [res1, res2] = await Promise.all([
          fetch(`https://restcountries.com/v2/alpha/${code}`),
          fetch(`https://servicodados.ibge.gov.br/api/v1/paises/${code}`),
        ]);
        const [json1, json2] = await Promise.all([res1.json(), res2.json()]);
        setLoading(false);
        setData({ ...json1, historico: json2[0]?.historico ?? "" });
      } catch {
        setLoading(false);
        setError("Não foi possível mostrar os dados do país. Tente novamente!");
      }
    }

    if (code) fetchDetails();
  }, [code]);

  return (
    <>
      <DetailsHeader
        countryName={
          error
            ? "Erro"
            : (data?.translations.pt ?? "Buscando os dados do país...")
        }
      />
      {loading ? (
        <div className={styles.feedbackContainer}>
          <p>Carregando...</p>
        </div>
      ) : error ? (
        <div className={styles.feedbackContainer}>
          <p>{error}</p>
        </div>
      ) : (
        <DetailsBody data={data} />
      )}
    </>
  );
}

export default CountryDetail;
