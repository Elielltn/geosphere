import styles from "./DetailsBody.module.css";
import ReactCountryFlag from "react-country-flag";
import type { typeCountryDetail } from "../../../../types/typeCountryDetail";
import { regions, subregions } from "../../../../constants/filterOptions";
type detailsBodyProps = {
  data: typeCountryDetail | null;
};

function DetailsBody({ data }: detailsBodyProps) {
  if (!data) return null;

  const filteredSubregions = subregions.filter((s) => s.region === data.region);

  const languageNames = new Intl.DisplayNames(["pt-BR"], { type: "language" });

  const translatedLanguages = data.languages
    .map((l) => {
      const translatedLanguage = languageNames.of(
        l.bcp47 ||
          l.iso639_1 ||
          l.iso639_2b ||
          l.iso639_2t ||
          l.iso639_3 ||
          l.name ||
          l.native_name,
      );

      if (translatedLanguage == undefined) return null;

      return (
        translatedLanguage.charAt(0).toUpperCase() + translatedLanguage.slice(1)
      );
    })
    .filter(Boolean)
    .join(", ");

  return (
    <main className={styles.mainGrid}>
      <div className={styles.columnOne}>
        <div className={styles.flagContainer}>
          <ReactCountryFlag
            countryCode={`${data.codes.alpha_2}`}
            svg
            style={{ width: "100%", height: "100%" }}
            title={`${data.names.translations.por.common}`}
          />
        </div>

        <div className={`${styles.infoCard} ${styles.dadosCard}`}>
          <h2>Dados</h2>
          <ul>
            <li>
              Região:{" "}
              {regions.find((r) => r.value === data.region)?.label ?? "-"}
            </li>
            <li>
              Sub-região:{" "}
              {filteredSubregions.find((s) => s.value === data.subregion)
                ?.label ?? "-"}
            </li>
            <li>
              Habitantes: {data.population.toLocaleString("pt-BR")} Habitantes
            </li>
            <li>
              Território: {data.area.kilometers.toLocaleString("pt-BR")} km²
            </li>
            {data.capitals.length > 1
              ? `Capitais: ${data.capitals
                  .map((c) => {
                    return c.name;
                  })
                  .join(", ")}`
              : `Capital: ${data.capitals[0].name}`}
            <li>Idiomas: {translatedLanguages || "-"}</li>
          </ul>
        </div>
      </div>

      <div className={`${styles.infoCard} ${styles.resumoCard}`}>
        <h2>Histórico</h2>
        <p>
          {data.historico
            ? data.historico.split("Fontes")[0]
            : ":) Ainda não temos o histórico desse país."}
        </p>
      </div>
    </main>
  );
}

export default DetailsBody;
