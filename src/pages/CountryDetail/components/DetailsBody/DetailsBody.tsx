import styles from "./DetailsBody.module.css";
import ReactCountryFlag from "react-country-flag";
import type { typeCountryDetail } from "../../../../types/typeCountryDetail";

type detailsBodyProps = {
  data: typeCountryDetail | null;
};

function DetailsBody({ data }: detailsBodyProps) {
  if (!data) return null;

  return (
    <main className={styles.mainGrid}>
      <div className={styles.columnOne}>
        <div className={styles.flagContainer}>
          <ReactCountryFlag
            countryCode={`${data.alpha2Code}`}
            svg
            style={{ width: "100%", height: "100%" }}
            title={`${data.translations.pt}`}
          />
        </div>

        <div className={`${styles.infoCard} ${styles.dadosCard}`}>
          <h2>Dados</h2>
          <ul>
            <li>Região: América</li>
            <li>Subregião: América do Sul</li>
            <li>
              Habitantes: {data.population.toLocaleString("pt-BR")} Habitantes
            </li>
            <li>Território: {data.area.toLocaleString("pt-BR")} km²</li>
            <li>Capital: {data.capital}</li>
          </ul>
        </div>
        <div className={`${styles.infoCard} ${styles.algoCard}`}>
          <h2>Algo aí</h2>
          <p>
            Não sei o que colocar aqui então vou digitar um texto grande que
            possa ser apagado mais pra frente. Espero descobrir o que colocar
            aqui logo mais.
          </p>
        </div>
      </div>

      <div className={`${styles.infoCard} ${styles.resumoCard}`}>
        <h2>Histórico</h2>
        <p>teste</p>
      </div>
    </main>
  );
}

export default DetailsBody;
