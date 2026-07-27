import { useNavigate } from "react-router-dom";
import styles from "./CountryCard.module.css";
import ReactCountryFlag from "react-country-flag";
import { subregions, regions } from "../../../../constants/filterOptions";

type countryCardProps = {
  countryCommonName: string;
  countryName: string;
  countryCode: string;
  countryRegion: string;
  countrySubregion: string;
  population: number;
};

function CountryCard({
  countryCommonName,
  countryName,
  countryCode,
  countryRegion,
  countrySubregion,
  population,
}: countryCardProps) {
  const navigate = useNavigate();
  const filteredSubregions = subregions.filter(
    (s) => s.region === countryRegion,
  );

  return (
    <div
      className={styles.card}
      onClick={
        countryCode
          ? () => navigate(`/country/${countryCode}`)
          : () => navigate(`/country/${countryCommonName}`)
      }
    >
      {countryCode ? (
        <div className={styles.flagContainer}>
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{ width: "100%", height: "100%" }}
            title={countryName}
          />
        </div>
      ) : (
        <div className={styles.flagContainer}>
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#090a0c",
            }}
            title={countryName}
          />
        </div>
      )}

      <div className={styles.info}>
        <h3 className={styles.name}>{countryName}</h3>
        <div className={styles.tags}>
          <span className={styles.region}>
            {regions.find((r) => r.value === countryRegion)?.label}
          </span>
          <span className={styles.separator}>•</span>
          <span className={styles.subregion}>
            {
              filteredSubregions.find((r) => r.value === countrySubregion)
                ?.label
            }
          </span>
        </div>
        <p className={styles.population}>
          {population.toLocaleString("pt-BR")} hab.
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
