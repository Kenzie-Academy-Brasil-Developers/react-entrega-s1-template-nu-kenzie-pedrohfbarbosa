import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { calculateTotal } from "../Dashboard";

export const Card = ({
  description,
  type,
  value,
  id,
  setList,
  list,
  setTotal,
  setListToRender,
  typeToRender,
}) => {
  const handleClick = (e) => {
    const newList = [...list];
    const indexRemove = newList.findIndex((e) => e.id === id);
    newList.splice(indexRemove, 1);
    setTotal(calculateTotal(newList));
    setList(newList);
    const newListToRender =
      typeToRender === "entry" || typeToRender === "exit"
        ? newList.filter((e) => e.type === typeToRender)
        : [...newList];
    setListToRender(newListToRender);
  };

  return (
    <li className={type === "exit" ? "card" : "card border-green"}>
      <div>
        <h4 className="title-5 color-grey-400">{description}</h4>
        <div>
          <span className="text-headline color-grey-400">R$ {value}</span>
          <button className="delete-card" onClick={handleClick}></button>
        </div>
      </div>
      <span className="text-body color-grey-400">
        {type === "exit" ? "Despesa" : "Entrada"}
      </span>
    </li>
  );
};
