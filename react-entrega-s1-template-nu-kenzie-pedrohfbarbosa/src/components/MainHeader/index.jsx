import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { ButtonDash } from "../ButtonDash";

export const MainHeader = ({ setListToRender, list, setTypeToRender }) => {
  const handleClickAll = () => {
    const newList = [...list];
    if (newList.length > 0) {
      setListToRender(newList);
      setTypeToRender("all")
    }
  };

  const handleClickEntry = () => {
    const newList = list.filter((e) => e.type === "entry");
    if (newList.length > 0) {
      setListToRender(newList);
      setTypeToRender("entry")
    }
  };

  const handleClickExit = () => {
    const newList = list.filter((e) => e.type === "exit");
    if (newList.length > 0) {
      setListToRender(newList);
      setTypeToRender("exit")
    }
  };

  return (
    <div className="main-header">
      <h3>Resumo financeiro</h3>
      <div className="btns-wrapper">
        <ButtonDash text="Todos" handleClick={handleClickAll} />
        <ButtonDash text="Entradas" handleClick={handleClickEntry} />
        <ButtonDash text="Despesas" handleClick={handleClickExit} />
      </div>
    </div>
  );
};
