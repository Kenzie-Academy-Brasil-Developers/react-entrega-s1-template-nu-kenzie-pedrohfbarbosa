import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import imgEmpty from "../../assets/img/NoCard.png";

export const EmptyList = () => {
  return (
    <div className="empty-list">
      <h2 className="color-grey-400 title-2">
        Você ainda não possui nenhum lançamento
      </h2>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
