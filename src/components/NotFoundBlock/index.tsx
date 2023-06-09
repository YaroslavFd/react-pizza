import React from "react";

import styles from "./styles.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h2>
      <p className={styles.description}>
        К сожалени данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
