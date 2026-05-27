import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryGrid.module.css";
import type { Country } from "../../../../types/country";

type countryGridProps = {
  countries: Country[];
  hasMore: boolean;
  loadMore: () => void;
  loading: boolean;
  error: string | null;
};

function CountryGrid({
  countries,
  hasMore,
  loadMore,
  loading,
  error,
}: countryGridProps) {
  return (
    <div className={styles.countryContainer}>
      <div className={styles.countryGrid}>
        {loading ? (
          <div className={styles.feedbackContainer}>
            <p>Só um momento. Carregando a lista de países.</p>
          </div>
        ) : error ? (
          <div className={styles.feedbackContainer}>
            <p>{error}</p>
          </div>
        ) : countries.length > 0 ? (
          countries.map((e) => (
            <CountryCard
              key={e.alpha2Code}
              countryName={e.translations.pt}
              countryCode={e.alpha2Code}
              countryRegion={e.region}
              countrySubregion={e.subregion}
              population={e.population}
            />
          ))
        ) : (
          <div className={styles.feedbackContainer}>
            <p>:( Nenhum país corresponde aos filtros selecionados.</p>
          </div>
        )}
      </div>
      {hasMore && (
        <button className={styles.loadMoreBtn} onClick={loadMore}>
          Carregar mais
        </button>
      )}
    </div>
  );
}

export default CountryGrid;
