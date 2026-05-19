import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryGrid.module.css";
import type { Country } from "../../../../types/country";

type countryGridProps = {
  countries: Country[];
  hasMore: boolean;
  loadMore: () => void;
};

function CountryGrid({ countries, hasMore, loadMore }: countryGridProps) {
  return (

    <div className={styles.countryContainer}>
      <div className={styles.countryGrid}>
        {countries.map((e) => (
          <CountryCard
            key={e.alpha2Code}
            countryName={e.translations.pt}
            countryCode={e.alpha2Code}
            countryRegion={e.region}
            countrySubregion={e.subregion}
            population={e.population}
          />
        ))}
      </div>
      {hasMore && <button className={styles.loadMoreBtn} onClick={loadMore}>Carregar mais</button>}
    </div>
  );
}

export default CountryGrid;
