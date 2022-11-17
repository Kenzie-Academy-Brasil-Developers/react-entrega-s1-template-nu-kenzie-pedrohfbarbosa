import "../../styles/globalStyles.css";
import "../../styles/color.css";
import "../../styles/text.css";
import "./styles.css";
import imgEmpty from "../../assets/img/NoCard.png";

export const EmptyList = () => {
  return (
    <div className="empty-list">
      <img src={imgEmpty} alt="Empty Card" />
    </div>
  )
};
