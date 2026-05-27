import styles from "./FilterBar.module.css";
import {
  regions,
  subregions,
  independencyOptions,
} from "../../../../constants/filterOptions";

type FilterBarProps = {
  region: string;
  subregion: string;
  independent: string;
  onRegionChange: (region: string) => void;
  onSubregionChange: (subregion: string) => void;
  onIndependencyChange: (independency: string) => void;
};

function FilterBar({
  region,
  subregion,
  independent,
  onRegionChange,
  onSubregionChange,
  onIndependencyChange,
}: FilterBarProps) {
  const filteredSubregions = subregions.filter(
    (sub) => sub.region === region,
  );

  function handleRegionChange(value: string) {
    onSubregionChange("");
    onRegionChange(value);
  }

  function resetFilters() {
    onRegionChange("");
    onSubregionChange("");
    onIndependencyChange("");
  }

  return (
    <div className={styles.filterBar}>
      <h2>Filtros:</h2>
      <select
        value={region}
        onChange={(e) => handleRegionChange(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
      {region && (
        <select value={subregion} onChange={(e) => onSubregionChange(e.target.value)}>
          {filteredSubregions.map((subregion) => (
            <option key={subregion.value} value={subregion.value}>
              {subregion.label}
            </option>
          ))}
        </select>
      )}

      <select value={independent} onChange={(e) => onIndependencyChange(e.target.value)}>
        {independencyOptions.map((e) => (
          <option key={e.value} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>

      <button className={styles.btnClearFilters} onClick={resetFilters}>
        Remover filtros
      </button>
    </div>
  );
}

export default FilterBar;
