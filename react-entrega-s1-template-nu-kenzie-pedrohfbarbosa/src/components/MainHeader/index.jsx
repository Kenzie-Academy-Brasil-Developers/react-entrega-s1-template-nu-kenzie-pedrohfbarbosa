import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import { ButtonDash } from "../ButtonDash";

export const MainHeader = ({ setListToRender, list, setTypeToRender }) => {
  const handleClickAll = () => {
    const newList = [...list];

    setListToRender(newList);
    setTypeToRender("all");
  };

  const handleClickEntry = () => {
    const newList = list.filter((e) => e.type === "entry");

    setListToRender(newList);
    setTypeToRender("entry");
  };

  const handleClickExit = () => {
    const newList = list.filter((e) => e.type === "exit");

    setListToRender(newList);
    setTypeToRender("exit");
  };

  return (
    <div className="main-header">
      <h3 className="title-3 color-grey-400">Resumo financeiro</h3>
      <div className="btns-wrapper">
        <ButtonDash text="Todos" handleClick={handleClickAll} />
        <ButtonDash text="Entradas" handleClick={handleClickEntry} />
        <ButtonDash text="Despesas" handleClick={handleClickExit} />
      </div>
    </div>
  );
};
