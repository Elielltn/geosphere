import { useState } from "react";
import styles from "./FilterBar.module.css";
import {
  regions,
  subregions,
  independencyOptions,
} from "../../../../constants/filterOptions";

type FilterBarProps = {
  onRegionChange: (region: string) => void;
  onSubregionChange: (subregion: string) => void;
  onIndependencyChange: (independency: string) => void;
};

function FilterBar({
  onRegionChange,
  onSubregionChange,
  onIndependencyChange,
}: FilterBarProps) {
  const [selectedRegion, setSelectedRegion] = useState("");

  const filteredSubregions = subregions.filter(
    (sub) => sub.region === selectedRegion,
  );

  function handleRegionChange(value: string) {
    setSelectedRegion(value);
    onSubregionChange("");
    onRegionChange(value);
  }

  return (
    <div className={styles.filterBar}>
      <h2>Filtros:</h2>
      <select onChange={(e) => handleRegionChange(e.target.value)}>
        {regions.map((region) => (
          <option key={region.value} value={region.value}>
            {region.label}
          </option>
        ))}
      </select>
      {selectedRegion && (
        <select onChange={(e) => onSubregionChange(e.target.value)}>
          {filteredSubregions.map((subregion) => (
            <option key={subregion.value} value={subregion.value}>
              {subregion.label}
            </option>
          ))}
        </select>
      )}

      <select onChange={(e) => onIndependencyChange(e.target.value)}>
        {independencyOptions.map((e) => (
          <option key={e.value} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
