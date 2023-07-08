import React from "react";

export const ContentError: React.FC = () => {
  return (
    <div className="content__error-info">
      <h2>Произошла ошибка 😕</h2>
      <p>
        К&nbsp;сожалению, не&nbsp;удалось получить товары. Попробуйте повторить
        попытку позже.
      </p>
    </div>
  );
};
