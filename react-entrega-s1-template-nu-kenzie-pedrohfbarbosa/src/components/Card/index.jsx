import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";

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
  const calculateTotal = (list) => {
    const sumEntry = list
      .filter((e) => e.type === "entry")
      .reduce((x, y) => x + y.value, 0);
    const sumExit = list
      .filter((e) => e.type === "exit")
      .reduce((x, y) => x + y.value, 0);
    return sumEntry - sumExit;
  };

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
        <h4>{description}</h4>
        <div>
          <span>R$ {value}</span>
          <button className="delete-card" onClick={handleClick}>
            teste
          </button>
        </div>
      </div>
      <span>{type === "exit" ? "Despesa" : "Entrada"}</span>
    </li>
  );
};
