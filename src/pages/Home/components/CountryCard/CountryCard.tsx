import { useNavigate } from "react-router-dom";
import styles from "./CountryCard.module.css";
import ReactCountryFlag from "react-country-flag";

type countryCardProps = {
  countryName: string;
  countryCode: string;
  countryRegion: string;
  countrySubregion: string;
  population: number;
};

function CountryCard({
  countryName,
  countryCode,
  countryRegion,
  countrySubregion,
  population,
}: countryCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/country/${countryCode}`)}
    >
      <div className={styles.flagContainer}>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: "100%", height: "100%" }}
          title={countryName}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{countryName}</h3>
        <div className={styles.tags}>
          <span className={styles.region}>{countryRegion}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.subregion}>{countrySubregion}</span>
        </div>
        <p className={styles.population}>
          {population.toLocaleString("pt-BR")} hab.
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
