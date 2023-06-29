import React from "react";

export const ContentError: React.FC = () => {
  return (
    <div className="content__error-info">
      <h2>Произошла ошибка 😕</h2>
      <p>
        К сожалению, не удалось получить питсы. Попробуйте повторить попытку
        позже.
      </p>
    </div>
  );
};
