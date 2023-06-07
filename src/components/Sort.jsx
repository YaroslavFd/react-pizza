import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortType } from "../redux/slices/filterSlice";

export const sortList = [
  {
    id: 0,
    name: "популярности (↓)",
    sortProperty: "rating",
    order: "desc",
  },
  {
    id: 1,
    name: "популярности (↑)",
    sortProperty: "rating",
    order: "asc",
  },
  { id: 2, name: "цене (↓)", sortProperty: "price", order: "desc" },
  { id: 3, name: "цене (↑)", sortProperty: "price", order: "asc" },
  { id: 4, name: "алфавиту (↓)", sortProperty: "title", order: "desc" },
  { id: 5, name: "алфавиту (↑)", sortProperty: "title", order: "asc" },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const sortType = useSelector((state) => state.filter.sortType);

  const sortClickHandler = (item) => {
    dispatch(changeSortType(item));
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          ></path>
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen(!isOpen)}>{sortType.name}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortList.map((item, i) => {
              return (
                <li
                  key={item.id}
                  className={sortType.id === item.id ? "active" : ""}
                  onClick={() => sortClickHandler(item)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
