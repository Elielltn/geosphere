import { useNavigate } from "react-router-dom";
import styles from "./DetailsHeader.module.css";

type detailsHeaderProps = {
  countryName: string;
};

function DetailsHeader({ countryName }: detailsHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button className={styles.backBtn} onClick={() => navigate("/")}>
        ← Voltar
      </button>
      <h1 className={styles.countryName}>{countryName}</h1>
    </header>
  );
}

export default DetailsHeader;
